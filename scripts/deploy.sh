#!/bin/bash -eu

sudo docker build -t kira924age/kira924age.com:latest .
sudo docker-compose up -d

