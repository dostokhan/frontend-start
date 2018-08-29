#!/usr/bin/env python

#  import subprocess
import os
import utils

utils.goToParentDir()

showLog = f"CURRENT_UID={str(os.geteuid())}:{str(os.getegid())} docker-compose exec fullstack-frontend bash"

#  startFrontendContainer = f"CURRENT_UID={str(os.geteuid())}:{str(os.getegid())} docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d"
#  subprocess.call(['bash', '-c', showLog])
os.system(showLog)
