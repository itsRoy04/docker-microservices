const express = require('express');

const app  = express();

app.get('/users', (req, res) => {
    console.log("User service called");

    res.send("Hello from user service");
});

app.listen(3001, () => {
    console.log('User service started on port 3001')
})