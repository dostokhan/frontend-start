#!/usr/bin/env python

from subprocess import call
import utils
import os
#  , isProduction

utils.goToParentDir()
#  runProduction = isProduction()

#  if runProduction
#      print("Production Config")
#      stopProxyContainers = 'docker-compose -f docker-compose.yml -f docker-compose.production.yml down'
#  else:
print("Development Config")
#  stopFrontendContainer = f"CURRENT_UID={str(os.geteuid())}:{str(os.getegid())} docker-compose -f docker-compose.yml -f docker-compose.override.yml down"
stopFrontendContainer = 'docker-compose -f docker-compose.yml -f docker-compose.override.yml down'


#  subprocess.check_output(['bash', '-c', stopProxyContainers])
#  call(stopProxyContainers.split())
os.system(stopFrontendContainer)

print('frontned Down')
