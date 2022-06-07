| lvm
https://habr.com/ru/post/67283/

/* File & Directory Commands
To navigate into the root directory, use 
| cd /
To navigate to your home directory, use 
| cd
/*or*/
| cd ~
To navigate up one directory level, use
| cd ..
To navigate to the previous directory (or back), use 
| cd -

shows disk space in human-readable format
| df -h 

Getting the Size of a Directory
| sudo du -sh /var

| free -h

Disks list:
| fdisk -l 
or 
| parted -l
or
| lsblk


Every Linux System has three options to clear cache without interrupting any processes or services.

1. Clear PageCache only.

# sync; echo 1 > /proc/sys/vm/drop_caches
2. Clear dentries and inodes.

# sync; echo 2 > /proc/sys/vm/drop_caches
3. Clear pagecache, dentries, and inodes.

# sync; echo 3 > /proc/sys/vm/drop_caches 

If you want to clear Swap space, you may like to run the below command.

# swapoff -a && swapon -a

Now we will be combining both above commands into one single command to make a proper script to clear RAM Cache and Swap Space.

# echo 3 > /proc/sys/vm/drop_caches && swapoff -a && swapon -a && printf '\n%s\n' 'Ram-cache and Swap Cleared'

OR

$ su -c "echo 3 >'/proc/sys/vm/drop_caches' && swapoff -a && swapon -a && printf '\n%s\n' 'Ram-cache and Swap Cleared'" root

/tmp is supposed to be cleaned up on reboot, but if you don't reboot (which is normal for servers), clean up will not happen

find /tmp -ctime +10 -exec rm -rf {} +

will delete all files and folders older than 10 days. you may want to add it to the daily cron.

UPDATE
In comments below @sfussenegger recommends a slightly different format of this command that may be better suited to your needs and to the system you're operating on.

sudo find /tmp -type f -atime +10 -delete

Here the command is using sudo to make sure everything is deleted (or you could run it as root), operating on files that haven't been accessed for more than 10 days and only deletes files, not folders. It also uses -delete to avoid having to execute rm command

221

Had the exact same problem with a fresh install of Ubuntu Server 18.04.1.

What I had to do was:

# We need to resize the logical volume to use all the existing and free space of the volume group
$ lvm
lvm> lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
lvm> exit

# And then, we need to resize the file system to use the new available space in the logical volume
$ resize2fs /dev/ubuntu-vg/ubuntu-lv
resize2fs 1.44.1 (24-Mar-2018)
Filesystem at /dev/ubuntu-vg/ubuntu-lv is mounted on /; on-line resizing required
old_desc_blocks = 1, new_desc_blocks = 58
The filesystem on /dev/ubuntu-vg/ubuntu-lv is now 120784896 (4k) blocks long.

# Finally, you can check that you now have available space:
$ df -h
Filesystem                         Size  Used Avail Use% Mounted on
udev                               3.9G     0  3.9G   0% /dev
tmpfs                              786M  1.2M  785M   1% /run
/dev/mapper/ubuntu--vg-ubuntu--lv  454G  3.8G  432G   1% /
If you didn't customize the LVM settings, the names for the volume group and logical volume should be the same as mine (ubuntu-vg and ubuntu-lv respectively).

If your partition is completely full, you could get a no space left error when trying to resize the logical volume like:

lvm> lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
  /etc/lvm/archive/.lvm_computer: write error failed: No space left on device
The easiest way to fix this is by removing apt cache (it will get regenerated next time you do apt update), which should give you more than enough space to complete the operation:

$ rm -rf /var/cache/apt/*