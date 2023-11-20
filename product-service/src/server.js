const express = require('express');

const app  = express();

app.get('/product', (req, res) => {
    console.log("Product service called");
    res.send("Product from user serviceeeeeeeeeeeeee");

});

app.listen(3002, () => {
    console.log('Product service started on port 3002')
})