//para mandar a llamar una url  se hacen los siguientes pasos

const URL = 'https://api.thecatapi.com/v1/images/search';

async function mycat () {
    const res = await fetch(URL);
    const data = await res.json();
    const img = document.getElementById('img-cat');
    img.src = data[0].url;
}

const myButton = document.getElementById('btn-button');
myButton.onclick = mycat;

mycat();