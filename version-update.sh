#!/bin/bash

if [ $1 = "master" ] then
 npm version patch
 git push origin master --tag
else
 npm version minor
 git push --tag
fi
