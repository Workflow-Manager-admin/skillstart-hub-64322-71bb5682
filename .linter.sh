#!/bin/bash
cd /home/kavia/workspace/code-generation/skillstart-hub-64322-71bb5682/skillstart_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

