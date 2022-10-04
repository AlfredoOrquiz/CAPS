'use strict';

const events = require('../event-emmiter.js');
const vendorHandler = (payload) => {
  console.log('VENDOR: Thank you for delivering this package');
  events.emit('global', payload);
}

module.exports = vendorHandler;
