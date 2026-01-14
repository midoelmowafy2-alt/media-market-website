@echo off
REM Media Market Website - Quick Start Script (Windows)
echo ================================================
echo Media Market Website Quick Start
echo ================================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
) else (
    echo Dependencies already installed
)

echo.
echo ================================================
echo Choose an option:
echo ================================================
echo 1) Start Frontend Server (http://localhost:3000)
echo 2) Start Backend Server (http://localhost:5000)
echo 3) Start Both Servers
echo 4) Build for Production
echo.
set /p choice="Enter choice (1-4): "

if "%choice%"=="1" (
    echo Starting frontend server on http://localhost:3000
    call npm run dev
) else if "%choice%"=="2" (
    echo Starting backend server on http://localhost:5000
    call npm run server
) else if "%choice%"=="3" (
    echo Starting both servers...
    echo Frontend server on http://localhost:3000
    echo Backend server on http://localhost:5000
    start cmd /k "npm run dev"
    start cmd /k "npm run server"
) else if "%choice%"=="4" (
    echo Building project...
    call npm run build
) else (
    echo Invalid choice
    exit /b 1
)

pause
