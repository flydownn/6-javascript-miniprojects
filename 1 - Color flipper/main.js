const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

function gen(){
    let randomhex = '#'+hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]+
    hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]+
    hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)];

    document.body.style.backgroundColor = randomhex;
    text.innerHTML = '<h1 id="text">Background Color : '+randomhex+'</h1>'

}

btn.addEventListener('click',gen)