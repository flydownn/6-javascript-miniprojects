let globalstate = 0;
const l = document.querySelector('#left');
const r = document.querySelector('#right');
const sm = document.querySelector('#suprise');
let name1 = document.querySelector('#name1');
let name2 = document.querySelector('#name2');
let job = document.querySelector('#job');
let comment = document.querySelector('#paragraph');
let photo = document.querySelector('#image');
let gs = 0;

function left(){
    if(gs == -2){
        name1.innerHTML = '<h1 id="name1">N a t a l i a</h1>';
        name2.innerHTML = '<h1 id="name2">R e n w i c k t o w n</h1>';
        job.innerHTML = '<h1 id="job">Dataase Manager</h1>';
        comment.innerHTML = '<p id="paragraph">Pretty sure that you are doing your best and I dont want to complain but I feel like you miss some important details.You guys can play without me.</p>';
        photo.style.backgroundImage = "url('./img/1.png')";
        gs=2;
        console.log(gs);
    }
    else if(gs == 2){
        name1.innerHTML = '<h1 id="name1">G r i f f i n</h1>';
        name2.innerHTML = '<h1 id="name2">I b i e c a</h1>';
        job.innerHTML = '<h1 id="job">Web Developer</h1>';
        comment.innerHTML = '<p id="paragraph">I loved that episode, where Doctor was living in VR and aliens were trying to get from him valuable information. I really love Dr.Who…</p>';
        photo.style.backgroundImage = "url('./img/2.png')";
        gs = 1;
        console.log(gs);
    }
    else if(gs == 1){
        name1.innerHTML = '<h1 id="name1">F l y</h1>';
        name2.innerHTML = '<h1 id="name2">D o w n</h1>';
        job.innerHTML = '<h1 id="job">Student</h1>';
        comment.innerHTML = '<p id="paragraph">I think wisdom is a rare thing these days, people are not interested in it at all, they focus on small things while completely missing big things in life.</p>';
        photo.style.backgroundImage = "url('./img/0.png')";
        gs = 0;
        console.log(gs);
    }
    else if(gs == 0){
        name1.innerHTML = '<h1 id="name1">M e l a n y</h1>';
        name2.innerHTML = '<h1 id="name2">P i s s a n g e</h1>';
        job.innerHTML = '<h1 id="job">Manager</h1>';
        comment.innerHTML = '<p id="paragraph">I would love to plant some trees, I would love to have a house with a backyard, I would love to enjoy solitude in nature, I would love to enjoy silence.</p>';
        photo.style.backgroundImage = "url('./img/4.png')";
        gs = -1;
        console.log(gs)
    }
    else if(gs == -1){
        name1.innerHTML = '<h1 id="name1">J a c k</h1>';
        name2.innerHTML = '<h1 id="name2">K i p t s y</h1>';
        job.innerHTML = '<h1 id="job">Web Developer</h1>';
        comment.innerHTML = '<p id="paragraph">Sure, but you must remember not to get involved in weird conversations again, especially if you have no clue how to finish the talk.</p>';
        photo.style.backgroundImage = "url('./img/3.png')";
        gs = -2;
        console.log(gs);
    }
}

function right(){
    if(gs == 0){
        name1.innerHTML = '<h1 id="name1">G r i f f i n</h1>';
        name2.innerHTML = '<h1 id="name2">I b i e c a</h1>';
        job.innerHTML = '<h1 id="job">Web Developer</h1>';
        comment.innerHTML = '<p id="paragraph">I loved that episode, where Doctor was living in VR and aliens were trying to get from him valuable information. I really love Dr.Who…</p>';
        photo.style.backgroundImage = "url('./img/2.png')";
        gs = 1;
        console.log(gs);
    }
    else if(gs == 1){
        name1.innerHTML = '<h1 id="name1">N a t a l i a</h1>';
        name2.innerHTML = '<h1 id="name2">R e n w i c k t o w n</h1>';
        job.innerHTML = '<h1 id="job">Dataase Manager</h1>';
        comment.innerHTML = '<p id="paragraph">Pretty sure that you are doing your best and I dont want to complain but I feel like you miss some important details.You guys can play without me.</p>';
        photo.style.backgroundImage = "url('./img/1.png')";
        gs = 2;
        console.log(gs);
    }
    else if(gs == 2){
        name1.innerHTML = '<h1 id="name1">J a c k</h1>';
        name2.innerHTML = '<h1 id="name2">K i p t s y</h1>';
        job.innerHTML = '<h1 id="job">Web Developer</h1>';
        comment.innerHTML = '<p id="paragraph">Sure, but you must remember not to get involved in weird conversations again, especially if you have no clue how to finish the talk.</p>';
        photo.style.backgroundImage = "url('./img/3.png')";
        gs = -2;
        console.log(gs);
    }
    else if(gs == -2){
        name1.innerHTML = '<h1 id="name1">M e l a n y</h1>';
        name2.innerHTML = '<h1 id="name2">P i s s a n g e</h1>';
        job.innerHTML = '<h1 id="job">Manager</h1>';
        comment.innerHTML = '<p id="paragraph">I would love to plant some trees, I would love to have a house with a backyard, I would love to enjoy solitude in nature, I would love to enjoy silence.</p>';
        photo.style.backgroundImage = "url('./img/4.png')";
        gs = -1;
        console.log(gs);
    }
    else if(gs == -1){
        name1.innerHTML = '<h1 id="name1">F l y</h1>';
        name2.innerHTML = '<h1 id="name2">D o w n</h1>';
        job.innerHTML = '<h1 id="job">Student</h1>';
        comment.innerHTML = '<p id="paragraph">I think wisdom is a rare thing these days, people are not interested in it at all, they focus on small things while completely missing big things in life.</p>';
        photo.style.backgroundImage = "url('./img/0.png')";
        gs = 0;
        console.log(gs);
    }
}

function supriseme(){
    random = Math.floor(Math.random()*5);

    if(random == 0){
        if(gs==0){
            name1.innerHTML = '<h1 id="name1">G r i f f i n</h1>';
            name2.innerHTML = '<h1 id="name2">I b i e c a</h1>';
            job.innerHTML = '<h1 id="job">Web Developer</h1>';
            comment.innerHTML = '<p id="paragraph">I loved that episode, where Doctor was living in VR and aliens were trying to get from him valuable information. I really love Dr.Who…</p>';
            photo.style.backgroundImage = "url('./img/2.png')";
            gs=1;
            console.log(gs)
        }else{
            name1.innerHTML = '<h1 id="name1">F l y</h1>';
            name2.innerHTML = '<h1 id="name2">D o w n</h1>';
            job.innerHTML = '<h1 id="job">Student</h1>';
            comment.innerHTML = '<p id="paragraph">I think wisdom is a rare thing these days, people are not interested in it at all, they focus on small things while completely missing big things in life.</p>';
            photo.style.backgroundImage = "url('./img/0.png')";
            gs=0;
            console.log(gs)
        }
    }
    else if(random == 1){
        if(gs==1){
            name1.innerHTML = '<h1 id="name1">N a t a l i a</h1>';
            name2.innerHTML = '<h1 id="name2">R e n w i c k t o w n</h1>';
            job.innerHTML = '<h1 id="job">Dataase Manager</h1>';
            comment.innerHTML = '<p id="paragraph">Pretty sure that you are doing your best and I dont want to complain but I feel like you miss some important details.You guys can play without me.</p>';
            photo.style.backgroundImage = "url('./img/1.png')";
            gs=2;
            console.log(gs)
        }else{
            name1.innerHTML = '<h1 id="name1">G r i f f i n</h1>';
            name2.innerHTML = '<h1 id="name2">I b i e c a</h1>';
            job.innerHTML = '<h1 id="job">Web Developer</h1>';
            comment.innerHTML = '<p id="paragraph">I loved that episode, where Doctor was living in VR and aliens were trying to get from him valuable information. I really love Dr.Who…</p>';
            photo.style.backgroundImage = "url('./img/2.png')";
            gs=1;
            console.log(gs)
        }
    }
    else if(random == 2){
        if(gs==2){
            name1.innerHTML = '<h1 id="name1">J a c k</h1>';
            name2.innerHTML = '<h1 id="name2">K i p t s y</h1>';
            job.innerHTML = '<h1 id="job">Web Developer</h1>';
            comment.innerHTML = '<p id="paragraph">Sure, but you must remember not to get involved in weird conversations again, especially if you have no clue how to finish the talk.</p>';
            photo.style.backgroundImage = "url('./img/3.png')";
            gs=-2;
            console.log(gs)
        }else{
            name1.innerHTML = '<h1 id="name1">N a t a l i a</h1>';
            name2.innerHTML = '<h1 id="name2">R e n w i c k t o w n</h1>';
            job.innerHTML = '<h1 id="job">Dataase Manager</h1>';
            comment.innerHTML = '<p id="paragraph">Pretty sure that you are doing your best and I dont want to complain but I feel like you miss some important details.You guys can play without me.</p>';
            photo.style.backgroundImage = "url('./img/1.png')";
            gs=2;
            console.log(gs)
        }
    }
    else if(random == -2){
        if(gs==-2){
            name1.innerHTML = '<h1 id="name1">M e l a n y</h1>';
            name2.innerHTML = '<h1 id="name2">P i s s a n g e</h1>';
            job.innerHTML = '<h1 id="job">Manager</h1>';
            comment.innerHTML = '<p id="paragraph">I would love to plant some trees, I would love to have a house with a backyard, I would love to enjoy solitude in nature, I would love to enjoy silence.</p>';
            photo.style.backgroundImage = "url('./img/4.png')";
            gs=-1;
            console.log(gs)
        }else{
            name1.innerHTML = '<h1 id="name1">J a c k</h1>';
            name2.innerHTML = '<h1 id="name2">K i p t s y</h1>';
            job.innerHTML = '<h1 id="job">Web Developer</h1>';
            comment.innerHTML = '<p id="paragraph">Sure, but you must remember not to get involved in weird conversations again, especially if you have no clue how to finish the talk.</p>';
            photo.style.backgroundImage = "url('./img/3.png')";
            gs=-2;
            console.log(gs)
        }
    }
    else if(random == -1){
        if(gs==-1){
            name1.innerHTML = '<h1 id="name1">F l y</h1>';
            name2.innerHTML = '<h1 id="name2">D o w n</h1>';
            job.innerHTML = '<h1 id="job">Student</h1>';
            comment.innerHTML = '<p id="paragraph">I think wisdom is a rare thing these days, people are not interested in it at all, they focus on small things while completely missing big things in life.</p>';
            photo.style.backgroundImage = "url('./img/0.png')";
            gs=0;
            console.log(gs)
        }else{
            name1.innerHTML = '<h1 id="name1">M e l a n y</h1>';
            name2.innerHTML = '<h1 id="name2">P i s s a n g e</h1>';
            job.innerHTML = '<h1 id="job">Manager</h1>';
            comment.innerHTML = '<p id="paragraph">I would love to plant some trees, I would love to have a house with a backyard, I would love to enjoy solitude in nature, I would love to enjoy silence.</p>';
            photo.style.backgroundImage = "url('./img/4.png')";
            gs=-1;
            console.log(gs)
        }
    }

}
