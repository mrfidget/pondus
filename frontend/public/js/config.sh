#!/bin/bash
echo "window.appConfig = { ELK_URL: '${ELK_URL}'} " >> config.js
# cat config.js
# nginx -g "daemon off;"