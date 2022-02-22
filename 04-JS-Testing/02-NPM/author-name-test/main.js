const moment = require('moment');

const aDay = new Date();
const niceDay = moment(aDay).format('ll');

console.log(aDay);
console.log(niceDay);
