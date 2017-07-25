import txt2regiletter from './txt2regiletter.js';

let handleClick = () => {
    let inputString = document.getElementById('stringInput').value;
    document.getElementById('stringOutput').value = txt2regiletter(inputString);
};

window.onload = () => {
    document.getElementById('createStringButton').addEventListener('click', handleClick);
};