#!/bin/bash

scp -rp dist/* bm:~/www/
scp -p .env bm:~/www/
