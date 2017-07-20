//var url = 'https://recochoku.jp/';
//var url = 'https://www.dreamarts.co.jp/';

//var url = 'http://exabugs-www.s3-website-ap-northeast-1.amazonaws.com/index_roomA.html'
var url = 'https://goo.gl/auzWgy'

// GitHub Pages webIDE
var url = 'https://goo.gl/pj1CgR'

var eddystoneBeacon = require('eddystone-beacon');

//var namespaceId = '00010203040506070809';
//var instanceId = 'aabbccddeeff';
//eddystoneBeacon.advertiseUid(namespaceId, instanceId);

eddystoneBeacon.advertiseUrl(url);

