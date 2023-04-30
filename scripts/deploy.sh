#!/bin/bash -eu

SCRIPT_DIR=$(cd $(dirname $0); pwd)
ROOT_DIR=$(SCRIPT_DIR)/../

cd $ROOT_DIR

sudo docker build -t kira924age/kira924age.com:latest ./SCRIPT_DIR
sudo docker-compose up -d
