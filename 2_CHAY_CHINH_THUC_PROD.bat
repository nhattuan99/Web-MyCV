@echo off
title KHOI CHAY MOI TRUONG PRODUCTION (CHINH THUC) - LE QUANG NHAT TUAN CV
color 0A
echo ======================================================================
echo    DANG KHOI CHAY MOI TRUONG PRODUCTION (CHINH THUC)
echo ======================================================================
echo  - Frontend Web : http://localhost:3000
echo  - Backend API  : http://localhost:4000
echo  - Database     : data\prod\cv_prod.sqlite
echo ======================================================================
echo  Dang mo trinh duyet Web sau 3 giay...
echo.

start "" "http://localhost:3000"
npm run dev:prod
pause
