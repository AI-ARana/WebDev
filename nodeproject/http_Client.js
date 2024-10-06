const https = require('http');
//const https = require('https');

const options = {
    hostname: 'localhost',
    port: 8080,
    //port: 443,
    path: '/?year=2024&month=October',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });// client.js
    const http = require('http');

// Define the options for the HTTP request
    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/?year=2024&month=October', // Query parameters
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

// Make the HTTP GET request to the server
    const req = http.request(options, (res) => {
        let data = '';

        // Collect the response data
        res.on('data', (chunk) => {
            data += chunk;
        });

        // When the response is complete, log the output
        res.on('end', () => {
            console.log('Response from server:', data);
        });
    });

// Handle any errors with the request
    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

// End the request (necessary for GET requests)
    req.end();


    res.on('end', () => {
        console.log('Response:', data);
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
    console.error(`Error code: ${e.code}`);
    console.error(`Error details:`, e);
});

req.end();
