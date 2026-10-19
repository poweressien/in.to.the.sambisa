@echo off
REM ===== IN TO THE SAMBIZA - one-click APK build (Windows) =====
REM Needs: Node 20+, Android Studio (installed once, so the Android SDK + JDK exist)
cd /d "%~dp0"

call npm install || goto :err
call npm run build || goto :err
call npx cap sync android || goto :err

REM Use Android Studio's bundled JDK if JAVA_HOME isn't set
if "%JAVA_HOME%"=="" if exist "C:\Program Files\Android\Android Studio\jbr" set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
REM Point Gradle at the Android SDK if local.properties is missing
if not exist android\local.properties (
  if "%ANDROID_HOME%"=="" set "ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk"
  > android\local.properties echo sdk.dir=%ANDROID_HOME:\=\\%
)

cd android
call gradlew.bat assembleDebug || goto :err
cd ..
copy /Y android\app\build\outputs\apk\debug\app-debug.apk IN-TO-THE-SAMBIZA.apk
echo.
echo DONE ->  %~dp0IN-TO-THE-SAMBIZA.apk
pause
exit /b 0
:err
echo BUILD FAILED - scroll up for the error.
pause
exit /b 1
