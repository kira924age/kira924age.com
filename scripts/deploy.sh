#!/bin/bash -eu

SCRIPT_DIR=$(cd $(dirname $0); pwd)
PROJECT_ROOT_DIR="$SCRIPT_DIR"/../

cd $PROJECT_ROOT_DIR

sudo docker build -t kira924age/kira924age.com:latest .
sudo docker-compose up -d
