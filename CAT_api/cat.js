async function getCat(){
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    document.getElementById('catImage').src = data[0].url;
}

function backcatmenu() {
    window.location.href = '../index.html';
}