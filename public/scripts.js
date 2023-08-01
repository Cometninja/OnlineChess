const { json } = require("body-parser");
const { response } = require("express");

let board = [,];



function writeToFile(data) {
    const content = data;

    fetch('/writeToFile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
    })
        .then((response) => response.text())
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            console.error('Error writing to file:', error);
            alert('Error Writing to File!!');
        });
};

function receiveData() {
    fetch("/readfile")
        .then((response) => response.text())
        .then((content) => {
            document.getElementById("display").innerText = content;
        })
        .catch((error) => {
            console.error('Error Reading File!!', error);
            alert('Error Reading File!!!');
        });
}

function thisfunction() {
    console.log("hi i am in the file");
}

function checkmoves() {

}

function doSomeThing() {
    console.log("i am trying something over here!!!");
    console.log(readChessBoard());
}

async function readChessBoard() {
    try {
        const response = await fetch("/test");
        const content = await response.json();
        console.log("I am in the readChessBoard Function");
        console.log(content);
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve("hello dan");
            }, 1000);
        });
    } catch (error) {
        console.error("Something went wrong", error);
        return 0;
    }
}


class chessboardtile {
    constructor(_corodinate, _point, _containsPiece, _colour) {

    }

}

function receiveDatas() {
    fetch("/readfiles")
        .then((response) => response.text())
        .then((content) => {
            document.getElementById("display").innerText = content;
        })
        .catch((error) => {
            console.error('Error Reading File!!', error);
            alert('Error Reading File!!!');
        });
}

window.readChessBoard = readChessBoard;