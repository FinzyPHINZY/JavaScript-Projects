document.querySelector('#sunny').addEventListener('click', playSunny)
document.getElementById('rainy').onclick = playRainy;
document.getElementById('snowy').onclick = playSnowy;
document.getElementById('windy').onclick = playWindy;

function playSunny () {
    document.querySelector('body').style.backgroundImage = 'url(images/Sunny.jpg)';
    document.querySelector('body').style.color = 'white';
    // document.querySelector('body').style.backgroundRepeat = 'no-repeat';
}

function playRainy () {
    document.querySelector('body').style.backgroundImage = 'url(images/Rainy.jpg)';
    document.querySelector('body').style.color = 'white';
    // document.querySelector('body').style.backgroundRepeat = 'no-repeat';
}

function playSnowy () {
    document.querySelector('body').style.background = 'url(images/Snowy.jpg)';
    document.querySelector('body').style.color = 'blue';
    // document.querySelector('body').style.backgroundRepeat = 'no-repeat';
}

function playWindy() {
    document.querySelector('body').style.backgroundImage = 'url(images/Windy.jpg)';
    document.querySelector('body').style.color = 'black';
    // document.querySelector('body').style.backgroundRepeat = 'no-repeat';
}