IN TO THE SAMBIZA  (Road Strike - Forest Highway)  -  Android / Capacitor

BUILD THE APK (Windows):  double-click BUILD-APK.bat
  -> produces IN-TO-THE-SAMBIZA.apk in this folder (install it on your phone).
  Needs Node 20+ and Android Studio installed once (gives you the Android SDK + JDK).

Or:  npm install && npm run build && npx cap sync android && npx cap open android
     then Build > Build APK(s) in Android Studio.

No Android Studio?  Push this folder to a GitHub repo -> Actions tab -> "Build APK"
-> download the IN-TO-THE-SAMBIZA-apk artifact.

Web version still works: open index.html in a browser. After editing src/*.js run: npm run build
