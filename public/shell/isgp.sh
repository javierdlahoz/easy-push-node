#!/bin/bash
cd public/shell
sudo ssh -i aws-ubuntu-server-key.pem ubuntu@52.10.252.189 'cd /var/www/public_html; git pull'