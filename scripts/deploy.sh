#!/bin/bash

ssh -t bm "rm -rf ~/www/assets && rm -rf ~/www/locales"
scp -rp dist/* dist/.* .env bm:~/www/
ssh -t bm "chmod -R a+rwx ~/www/assets/ && chmod -R a+rwx ~/www/locales/"
