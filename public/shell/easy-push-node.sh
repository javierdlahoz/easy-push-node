#!/bin/bash
cd public/shell
sudo ssh -i aws-ubuntu-server-key.pem ubuntu@52.24.9.252 'cd /var/www/public_html; git pull'
