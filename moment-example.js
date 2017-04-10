var moment = require('moment');
var now = moment();

//console.log(now.format());
//console.log(now.format('X'));
//console.log(now.format('x'));
//console.log(now.valueOf());

var timestamp = 1491559661677;
var timestampMoment = moment.utc(timestamp); //11:06 am

console.log(timestampMoment.format());

console.log(timestampMoment.local().format('h:mm a'));

//now.subtract(1,'year');
//console.log(now.format());
//console.log(now.format('h:mm a')); 

//Oct 5th 2017,6:45 pm
//console.log(now.format('MMM Do YYYY, h:mma'));