#!/bin/bash
cd public/shell
sudo ssh -i aws-ubuntu-server-key.pem ubuntu@52.11.182.244 'cd /var/www/public_html; git pull'