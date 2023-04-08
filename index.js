const ics = require('ics');
const http = require('http');

const event = {
  start: [2023, 4, 7, 6, 30],
  end: [2023, 4, 7, 7, 30],
  title: 'My Event',
  description: 'This is a test event',
  location: 'Tokyo, Japan',
  url: 'https://example.com',
  status: 'CONFIRMED',
  busyStatus: 'BUSY',
};

const cal = ics.createEvent(event);

console.log(cal.value);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/calendar; charset=utf-8'});
  res.end(cal.value);
}).listen(8080);
