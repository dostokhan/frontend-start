#!/usr/bin/env python

from subprocess import call
import os
import utils

utils.goToParentDir()

#  runProduction = isProduction()

#  if runProduction
#      print("Production Config")
#      stopProxyContainers = 'docker-compose -f docker-compose.yml -f docker-compose.production.yml down'
#  else:
#  stopFrontendContainer = f"CURRENT_UID={str(os.geteuid())}:{str(os.getegid())} docker-compose -f docker-compose.yml -f docker-compose.override.yml down"

stopFrontendContainer = 'docker-compose -f docker-compose.yml -f docker-compose.override.yml down'
os.system(stopFrontendContainer)

