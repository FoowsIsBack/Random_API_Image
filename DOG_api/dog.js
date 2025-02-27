async function getDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    document.getElementById('dogImage').src = data.message;
    
}

function backdogmenu() {
    window.location.href = '../index.html';
}