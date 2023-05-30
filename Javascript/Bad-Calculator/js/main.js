let total = 0;

document.querySelector('#addA').addEventListener('click', firstFn)
document.querySelector('#addB').addEventListener('click', secondFn)
document.querySelector('#addC').addEventListener('click', thirdFn)
document.querySelector('#addD').addEventListener('click', fourthFn)
document.querySelector('#addE').addEventListener('click', fifthFn)
document.querySelector('#addF').addEventListener('click', sixthFn)

function firstFn () {
    let total = 1;
    document.querySelector('#placeItHere').innerText = total
}

function secondFn () {
    let total = total + 2;
    document.querySelector('#placeItHere').innerText = total
}

function thirdFn () {
    let total = total + 3;
    document.querySelector('#placeItHere').innerText = total 
}

function fourthFn () {
    let total= total + 4;
    document.querySelector('#placeItHere').innerText = total
}

function fifthFn () {
    let total = total + 5;
    document.querySelector('#placeItHere').innerText = total
}

function sixthFn () {
    let total = total + 6;
    document.querySelector('placeItHere').innerText = total
}