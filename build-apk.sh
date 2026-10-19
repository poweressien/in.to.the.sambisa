#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
npm install && npm run build && npx cap sync android
cd android && ./gradlew assembleDebug && cd ..
cp android/app/build/outputs/apk/debug/app-debug.apk IN-TO-THE-SAMBIZA.apk
echo "DONE -> IN-TO-THE-SAMBIZA.apk"
