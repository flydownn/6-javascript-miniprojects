let number = document.querySelector('#number');
let dec = document.querySelector('#decrase');
let res = document.querySelector('#reset');
let inc = document.querySelector('#increase');
let nam = 0;
function reset(){
    if(nam != 0){
        nam = 0;
        number.innerHTML = '<h2 id="number">'+nam+'</h2>';
        number.style.color = 'black';
        console.log(nam);
    }
}

function decrase(){
    if(nam <= 0){
        nam--;
        number.innerHTML = '<h2 id="number">'+nam+'</h2>';
        number.style.color = 'red';
        console.log(nam);
    }else{
        nam--;
        number.innerHTML = '<h2 id="number">'+nam+'</h2>';
        console.log(nam);
    }
}
function increase(){
    if(nam >= 0){
        nam++;
        number.innerHTML = '<h2 id="number">'+nam+'</h2>';
        number.style.color = 'lightgreen';
        console.log(num);
    }else{
        nam++;
        number.innerHTML = '<h2 id="number">'+nam+'</h2>';
        console.log(nam);
    }
}

res.addEventListener('click',reset);
dec.addEventListener('click',decrase);
inc.addEventListener('click',increase);
