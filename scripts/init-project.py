#!/usr/bin/env python

import utils
import sys

utils.goToParentDir()


PROJECT_NAME_PLACEHOLDER = 'fullstack'
DOCKER_CONFIG_FILES = [
    './docker-compose.yml',
    './docker-compose.override.yml',
    './docker-compose.production.yml',
]
projectName = str(sys.argv[1])
domainName = str(sys.argv[2])
emailAddress = str(sys.argv[3])

print("\nProjectName: " + projectName)
print('DomainName: ' + domainName)
print('Email: ' + emailAddress)

print("\nChange projectName in docker compose files so frontend containers are named after projectName")
for filename in DOCKER_CONFIG_FILES:
    utils.replaceStrInFile(filename, PROJECT_NAME_PLACEHOLDER, projectName)

print("\nAdd necessary environtment variables in docker environtment files")
with open('.env.docker.development', 'a+') as f:
    print('Updating .env.docker.development')
    f.write(f"\nNODE_ENV=development\nVIRTUAL_HOST=local.{domainName}")

with open('.env.docker.production', 'a+') as f:
    print('Updating .env.docker.production')
    f.write(f"\nNODE_ENV=production\nVIRTUAL_HOST={domainName}\nLETSENCRYPT_HOST={domainName}\nLETSENCRYPT_EMAIL={emailAddress}")
