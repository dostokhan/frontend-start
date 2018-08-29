#! /bin/bash

echo 'Down imonirfront'
docker-compose down
echo "Removing imonirfront_node_modules VOLUME"
docker volume rm imonirfront_node_modules

echo "Remove imonirfront_frontend docker IMAGE";
docker image rm imonirfront_frontend

echo "Run Up Script"
