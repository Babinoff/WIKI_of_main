Open TerminalTerminalGit Bash.
	https://medium.com/@viviennediegoencarnacion/manage-github-and-gitlab-accounts-on-single-machine-with-ssh-keys-on-mac-43fda49b7c8d
	ssh-keygen -t rsa -C "personal@mail.com" -f ~/.ssh/id_rsa_gitlab
	ssh-keygen -t rsa -C "personal@mail.com" -f ~/.ssh/id_rsa_github
	ssh-add ~/.ssh/id_rsa_github
	ssh-add ~/.ssh/id_rsa_gitlab
	touch ~/.ssh/config    // Creates config file if it does not exist
	vi ~/.ssh/config .     // Edit config file

config:
# This is a comment
# Personal github account
Host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_github
# Personal gitlab account
Host gitlab.com
   HostName gitlab.com
   User bgit
   IdentityFile ~/.ssh/id_rsa_gitlab

Github
	pbcopy < ~/.ssh/id_rsa_github.pub
	in browser: Settings > SSH and GPG Keys > New SSH key
Gitlab
	pbcopy < ~/.ssh/id_rsa_gitlab.pub
	in browser: Settings > SSH Keys

