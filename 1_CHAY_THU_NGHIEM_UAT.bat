@echo off
title KHOI CHAY MOI TRUONG UAT (KIEM THU) - LE QUANG NHAT TUAN CV
color 0E
echo ======================================================================
echo    DANG KHOI CHAY MOI TRUONG UAT (STAGING / KIEM THU)
echo ======================================================================
echo  - Frontend Web : http://localhost:3001
echo  - Backend API  : http://localhost:4001
echo  - Database     : data\uat\cv_uat.sqlite
echo ======================================================================
echo  Dang mo trinh duyet Web sau 3 giay...
echo.

start "" "http://localhost:3001"
npm run dev:uat
pause
