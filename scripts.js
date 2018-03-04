var text = prompt('paste your font here and it will display on the page');
alert('click to get font');

if (text) {
    text = text.toLowerCase();
    document.getElementById('outputText').innerHTML = text;
} else {
    document.getElementById('outputText').innerHTML = "NONE!!"
}
