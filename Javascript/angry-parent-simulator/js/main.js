document.getElementById('speak').addEventListener('click',upperCase)


function upperCase () {
    const synth = window.speechSynthesis;
    document.querySelector('button').style.textTransform = 'uppercase';

    const fName = document.querySelector('#firstName').value
    const mName = document.querySelector('#middleName').value
    const lName = document.querySelector('#lastName').value

    const yellText = `${fName} ${mName} ${lName}`

    document.getElementById('placeItHere').innerText = yellText;
    let yellThis = new SpeechSynthesisUtterance(yellText);
    synth.speak(yellThis);
}