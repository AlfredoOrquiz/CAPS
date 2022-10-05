'use strict';

const events = require('./src/eventEmitter.js');
const observables = require('./src/eventPool.js');
const driverHandle = require('./src/driver/driverHandle.js');
const vendorHandle = require('./src/vendor/vendorHandle.js');
const globalHandle = require('./src/global/globalHandle.js');

events.on('pick-up', driverHandle);
events.on('in-transit', driverHandle);
events.on('delivered', vendorHandle);
events.on('global', globalHandle);

events.emit(observables[0], {
  event: 'pick-up',
  time: dateTime1,
  payload:
  {
    store: 'Target',
    customer: 'Ezrael',
    adress: 'Temecula, CA',
  },
});
events.emit(observables[1], {
  event: 'in-transit',
  time: dateTime2,
  payload:
  {
    store: 'Target',
    customer: 'Ezrael',
    adress: 'Temecula, CA',
  },
});
events.emit(observables[2], {
  event: 'in-transit',
  time: dateTime2,
  payload:
  {
    store: 'Target',
    customer: 'Ezrael',
    adress: 'Temecula, CA',
  },
});
