
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
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve(content);
            }, 1000);
        });
    } catch (error) {
        console.error("Something went wrong", error);
        return 0;
    }
}

function updateboard(listoftiles) {
    console.log(listoftiles.length);

    fetch("/updateboard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listoftiles), // Sending the array directly without an object wrapper
    }).then((response) => response.text())
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            console.error('Error writing to file:', error);
            alert('Error Writing to File!!');
        });
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



class chessboardtile {
    constructor(_point, _colour, _containsPiece, _piece) {
        this._colour = _colour;
        this._point = _point;
        this._containsPiece = _containsPiece;
        this._piece = _piece;
        this._selected = false;
    }

}
let last;
let lastTile;
let listOfTiles = [];
let lastColor = "silver";

async function myfunction(source) {

    let thing = await readChessBoard();
    console.log(thing);
    let count = 0;
    console.log("i am here!!");
    const board = readChessBoard();
    thing.forEach(element => {
        let tile = new chessboardtile(element._point, element._colour, element._containsPiece, element._piece);
        listOfTiles.push(tile);
        const square = document.createElement("div");
        const para = document.createTextNode(tile._point.X + " " + tile._point.Y);

        square.className = "chessboardtile";

        square.style.position = "absolute";
        square.style.width = "50px";
        square.style.height = "50px";
        source.appendChild(square);
        square.style.color = "black";
        square.style.top = tile._point.X * 50 + "px";
        square.style.left = tile._point.Y * 50 + "px";
        square.id = tile._point.X + "," + tile._point.Y;



        square.onclick = function () { getCorodinate(this, tile) };

        if (tile._point.X % 2 == 0 && tile._point.Y % 2 == 0) {

            square.style.backgroundColor = "silver";
        }
        else if (tile._point.X % 2 != 0 && tile._point.Y % 2 != 0) {

            square.style.backgroundColor = "silver";

        }


        else {

            square.style.backgroundColor = "gainsboro";
        }

        if (tile._containsPiece) {
            let piece = document.getElementById(tile._colour + tile._piece);
            let newPiece = document.createElement("img");
            newPiece.src = piece.src;

            console.log(tile._colour + tile._piece);
            newPiece.style.top = "-20px";
            square.appendChild(newPiece);

        }
    });
}

function getCorodinate(element, tile) {
    if (last != null) {
        last.style.backgroundColor = lastColor;
    }
    lastColor = element.style.backgroundColor;
    last = element;
    if (lastTile != null) {
        lastTile._selected = false;
    }
    lastTile = tile;
    element.style.backgroundColor = "red";
    tile._selected = true;

    listOfTiles.forEach(element => {
        if (element._selected) {
            console.log(element);
        }
    });
    console.log("before function " + listOfTiles.length);
    updateboard(listOfTiles);
    console.log("after function")
}

function writetoDatabase() {

}
window.listOfTiles = listOfTiles;

window.readChessBoard = readChessBoard;
window.updateboard = updateboard;