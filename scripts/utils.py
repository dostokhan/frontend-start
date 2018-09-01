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


def replaceStrInFile(filename, oldString, newString):
    # Safely read the input filename using 'with'
    with open(filename) as f:
        s = f.read()
        if oldString not in s:
            print('"{oldString}" not found in {filename}.'.format(**locals()))
            return

    # Safely write the changed content, if found in the file
    with open(filename, 'w') as f:
        print('Changing "{oldString}" to "{newString}" in {filename}'.format(**locals()))
        s = s.replace(oldString, newString)
        f.write(s)

