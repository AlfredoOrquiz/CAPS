'use strict';

const events = require('../eventEmitter.js');

const driverHandle = (payload) => {
  events.emit('global', payload);
  if (payload.event === 'pickup') {
    console.log('DRIVER: Picked up your package');
  } else {
    console.log('DRIVER: Delivered your package');
  }
}

module.exports = driverHandle;
