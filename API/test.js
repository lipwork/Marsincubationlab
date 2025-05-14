const https = require('https');

https.get('https://us-central1-mars-incubation-lab.cloudfunctions.net/getUploads', (resp) => {
let data = '';

// A chunk of data has been received.
resp.on('data', (chunk) => {
data += chunk;
});

// The whole response has been received. Print out the result.
resp.on('end', () => {
console.log(JSON.parse(data));
});

}).on("error", (err) => {
console.log("Error: " + err.message);
});