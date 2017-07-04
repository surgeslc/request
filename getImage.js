var requestHost = 'https://sytantris.github.io'
var requestPath = '/http-examples/future.jpg';
var requestString = requestHost + requestPath;
console.log(requestString);

var request = require('request');
var fs = require('fs');

request.get(requestString)
       .on('error', function (err) {
         console.log('Error ', err);
       })
       .on('response', function (response) {
          if (response.statusCode === 200) {
            console.log('Download complete.');
          }
          if (response.statusCode !== 200) {
            console.log('Response Status Code: ', response.statusCode);
          }
       })
       .pipe(fs.createWriteStream('./future.jpg'));
       console.log('Downloading image...');

// During development, I got 404 errors, so I know that they're logged.
// I was logging Status Code 200 OK, until I began logging downloading
// 'end' isn't chained


// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?