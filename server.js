var http = require('http');
var fs = require('fs');
const express = require('express');
const { connect } = require('http2');

const app = express();

app.use(express.static('public'));


app.listen(3000, () => {
    console.log("Server is running on 3000");
});

app.on('connection', function (client) {
    console.log("something");
})
