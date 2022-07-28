const q1 = document.querySelector("#question1");
const q2 = document.querySelector("#question2");
const q3 = document.querySelector("#question3");
const b1 = document.querySelector("#q1btn");
const b2 = document.querySelector("#q2btn");
const b3 = document.querySelector("#q3btn");

function open1(){
    q1.classList.toggle('q1');
    b1.classList.toggle('clickedbtn');
}
function open2(){
    q2.classList.toggle('q2');
    b2.classList.toggle('clickedbtn');
}
function open3(){
    q3.classList.toggle('q3');
    b3.classList.toggle('clickedbtn');
}