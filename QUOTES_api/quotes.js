async function getQuotes() {
    const response = await fetch('https://inspirobot.me/api?generate=true');
    const data = await response.text();
    document.getElementById('qoutesImage').src = data;
}

function backquotesmenu() {
    window.location.href = '../index.html';
}