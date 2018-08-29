#!/usr/bin/env python

#  from subprocess import call
import argparse
from os.path import dirname, abspath
from os import chdir

def goToParentDir():
    chdir(dirname(dirname(abspath(__file__))))


def isProduction():
    parser = argparse.ArgumentParser()
    parser.add_argument("-isProduction", help="Run in Production Config", default="development")
    args = parser.parse_args()

    return args.isProduction == 'production'

