
var url = 'https://moe.dreamarts.co.jp/';
var url = 'https://goo.gl/gXA6y5';

var options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};


var eddystoneBeacon = require('eddystone-beacon');
//eddystoneBeacon.advertiseUrl(url, options);
eddystoneBeacon.advertiseUrl(url);

