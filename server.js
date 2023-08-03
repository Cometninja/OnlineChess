var http = require('http');
var fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('http2');


const app = express();
let user = app.userMan

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/writeToFile', (req, res) => {
    const content = req.body.content;

    const filePath = 'data.txt';

    fs.appendFile(filePath, content + '\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Error Writing to file');
        } else {
            console.log('Content appended to file sucessfully!');
            res.status(200).send('Content appended to file sucessfully!!');
        }
    });
});

app.get("/readfile", (req, res) => {

    fs.readFile('data.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error Reading File', err);
            res.status(500).send('Error Reading File!!');
        } else {
            res.status(200).send(data);
        }
    });
});

app.listen(3000, '0.0.0.0', () => {

    console.log("Server is running on 3000");
});

app.on('connection', function (client) {
    console.log("something");
});

function WriteToFile() {
    fs.writeFile("./testing.txt", "hello i am in a file");
}

app.get("/test", (req, res) => {

    fs.readFile("C:\\Users\\danie\\Desktop\\OnlineChessJavaLogic\\serverSideNode.js\\OnlineChess\\JavaChess\\chessboard.json", 'utf-8', (err, data) => {
        if (err) {
            console.error('Error Reading File', err);
            res.status(500).send('Error Reading File!!');
        } else {
            res.status(200).send(data);
        }
    });
});
app.get("/readfiles", (req, res) => {

    fs.readFile('data.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error Reading File', err);
            res.status(500).send('Error Reading File!!');
        } else {
            res.status(200).send(data);
        }
    });
});

app.post("/updateboard", (req, res) => {
    const listoftiles = req.body; // Accessing the array directly from req.body
    console.log(listoftiles);

    fs.writeFile("game1.json", JSON.stringify(listoftiles), (err) => {
        if (err) {
            console.log("error writing to file: " + err);
            res.status(500).send("Error writing to file!");
        } else {
            console.log("successful!!!");
            res.send("Data successfully written to file!");
        }
    });
});