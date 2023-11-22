const express = require('express');

const app  = express();

app.get('/', (req, res) => {
    console.log("Main service called");

    res.send("Root Service  Jenkins!");
});

app.listen(3000, () => {
    console.log('Main service started on port 3000')
}) 