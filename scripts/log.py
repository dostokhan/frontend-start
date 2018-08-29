#!/usr/bin/env python

import subprocess
import utils

utils.goToParentDir()

showLog = 'docker-compose logs --follow fullstack-frontend'
subprocess.call(['bash', '-c', showLog])
