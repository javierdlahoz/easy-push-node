#!/bin/bash
cd public/shell
sudo ssh -i aws-ubuntu-server-key.pem ubuntu@54.68.87.145 'cd /var/www/public_html; git pull'