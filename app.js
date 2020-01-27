const express = require('express');
const app = express();

const port = 8081;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    res.json({
        'success': true
    });
});

app.listen(port, () => {
    console.log('Listening: ' + port);
});