const express = require('express');

const app  = express();

app.get('/', (req, res) => {
    console.log("Main service called");

    res.send("ROOTtt Servvvice Working with Jenkins!");
});

app.listen(3000, () => {
    console.log('Main service started on port 3000')
})