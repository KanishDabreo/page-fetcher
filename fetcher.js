const request = require('request');
const fs = require('fs');

let args = process.argv[2]
let path = process.argv[3]
request(args, function (error, response, body) {
  if (error) {
  console.error('error:', error); // Print the error if one occurred
  return;
  }
  if() {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  return;
  }
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
  })
});