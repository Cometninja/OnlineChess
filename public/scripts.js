let board = [,];



function writeToFile() {
    const content = document.getElementById('content').value;

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
    receiveData();
    
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

}