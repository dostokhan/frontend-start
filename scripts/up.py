#!/usr/bin/env python

#  from subprocess import call
import utils
import os
#  , isProduction

utils.goToParentDir()
#  runProduction = isProduction()

#  createNetwork = 'docker network ls|grep fullstack > /dev/null || docker network create fullstack'
#  subprocess.check_output(['bash','-c', createNetwork])

#  if runProduction
#      startProxyContainers = 'docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d'
#  else:
#  startFrontendContainer = f"CURRENT_UID={str(os.geteuid())}:{str(os.getegid())} docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d"
startFrontendContainer = 'docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d'
os.system(startFrontendContainer)


print('frontend Up')


