When you’re getting a 500 error, here are some steps you can take to help troubleshoot the issue:

You can check the logs for errors by running
| gitlab-ctl tail

You can also run rake tests to find any issues with your GitLab installation.
| sudo gitlab-rake gitlab:check --trace
| sudo gitlab-rake db:migrate:status --trace

| sudo gitlab-rake gitlab:env:info

| sudo gitlab-ctl status

postgresql doesn't run after server crash

solution.
| gitlab-ctl stop

Rename the .s.PGSQL.5432 socket file.
| gitlab-ctl reconfigure
| gitlab-ctl start

Everything fine and running.


