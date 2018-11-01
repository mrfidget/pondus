#!/bin/bash
echo "window.appConfig = { ELK_URL: '${ELK_URL}'} " >> config.js
nginx -g "daemon off;"