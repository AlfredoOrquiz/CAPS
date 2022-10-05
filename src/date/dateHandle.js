'use strict';

const currentDate = new Date();
const dateTime1 = currentDate.getDate() + '/'
  + (currentdate.getMonth() + 1) + '/'
  + currentdate.getFullYear() + ' @ '
  + currentdate.getHours() + ':'
  + currentdate.getMinutes() + ':'
  + currentdate.getSeconds();
const dateTime2 = currentDate.getDate() + '/'
  + (currentdate.getMonth() + 1) + '/'
  + currentdate.getFullYear() + ' @ '
  + currentdate.getHours() + ':'
  + currentdate.getMinutes() + ':'
  + currentdate.getSeconds();
const dateTime3 = currentDate.getDate() + '/'
  + (currentdate.getMonth() + 1) + '/'
  + currentdate.getFullYear() + ' @ '
  + currentdate.getHours() + ':'
  + currentdate.getMinutes() + ':'
  + currentdate.getSeconds();

  module.exports = {
    dateTime1,
    dateTime2,
    dateTime3,
  }
