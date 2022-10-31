let Question1_answered = false
let Question2_answered = false
let Question3_answered = false
let Question4_answered = false
let Question5_answered = false
let correctAnswer1 = false // turn this to true when correct answer and ket there be magic
let correctAnswer2 = false
let correctAnswer3 = false
let correctAnswer4 = false
let correctAnswer5 = false

const g1 = document.getElementById("guy1")
const g2 = document.getElementById("guy2")
const g3 = document.getElementById("guy3")
const g4 = document.getElementById("guy4")
const g5 = document.getElementById("guy5")


window.addEventListener("scroll", function(){
    
    updateScore();
    const qbox=document.getElementById('qbox');
    const question=document.getElementById('question');
    const opt1label =document.getElementById('opt1label');
    const opt2label =document.getElementById('opt2label');
    const opt3label =document.getElementById('opt3label');
    const opt1 =document.getElementById('opt1');
    const opt2 =document.getElementById('opt2');
    const opt3 =document.getElementById('opt3');
    const subbt = document.getElementById('subbt');
    const sliderspan= document.getElementById('sliderspan');
    const radiobtn= document.getElementById('radiobtn');

    sliderspan.style.display='none';
    radiobtn.style.display='block';


    let offset = window.pageYOffset
    console.log(offset)
    if(offset>= 3500 && Question1_answered==false){
        g1.style.backgroundImage = "url(pimg/interviewer-1-eyes.png)";
        //this.alert("Hello1")   // turn this into a QnA
        radiobtn.style.display='none';
        qbox.style.display='block';
        question.innerHTML="Hello Developer, it seems you've cleared level-1. <br> Impressive."
        subbt.setAttribute('onclick', 'checkanswer1();');
    }
    g1.style.backgroundPositionY = offset * 0.905 + "px"

    
    if(offset>= 5500 && Question2_answered==false){
        g2.style.backgroundImage = "url(pimg/interviewer-2-eyes.png)";
        question.innerHTML='Where do you see yourself in five years?';

        opt1label.innerHTML='I see myself earning a decent amount by working hard at whatever work is assigned to me, impressing my boss and surpassing expectations.';
        opt1.setAttribute('value','medium')

        opt2label.innerHTML='I see myself being part of a digital revolution helping out to change the world through this corporation.';
        opt2.setAttribute('value','good')

        opt3label.innerHTML='I see myself climbing the corporate ladder and hopefully earning my place among you.';
        opt3.setAttribute('value','bad')

        qbox.style.display='block';

        subbt.setAttribute('onclick', 'checkanswer2();')
        

    }
    g2.style.backgroundPositionY = offset * 0.92 + "px"


    if(offset>= 7500 && Question3_answered==false){
        g3.style.backgroundImage = "url(pimg/interviewer-3-eyes.png)";
        question.innerHTML='What is the price of your soul?';
        radiobtn.style.display='none';
        sliderspan.style.display='block';
        console.log(radiobtn.style.display)

        qbox.style.display='block';

        subbt.setAttribute('onclick', 'checkanswer3();')
        
    }
    g3.style.backgroundPositionY = offset * 0.93 + "px"


    if(offset>=6500 && Question4_answered==false){
        g4.style.backgroundImage = "url(pimg/interviewer-4-eyes.png)";
        
       
        question.innerHTML='How do you view the privacy of your users?';

        opt1label.innerHTML='We must build privacy tools that put the user in control.￲';
        opt1.setAttribute('value','bad')

        opt2label.innerHTML='The quality of our services depends greatly on the data we collect. The users will understand.';
        opt2.setAttribute('value','medium')

        opt3label.innerHTML='User data keeps the software free. They won&lsquo;t admit it, but convenience is more important to the user than their own privacy';
        opt3.setAttribute('value','good')
        
        qbox.style.display='block';

        subbt.setAttribute('onclick', 'checkanswer4();')
        
    }
    g4.style.backgroundPositionY = offset * 0.92 + "px"


    if(offset>=4500 && Question5_answered==false){
        g5.style.backgroundImage = "url(pimg/interviewer-5-eyes.png)";
        radiobtn.style.display='none';
        qbox.style.display='block';
        question.innerHTML="Before we can send you off to him, we have three questions. Don't worry, it's just a formality."
        subbt.setAttribute('onclick', 'checkanswer5();');
    }
    g5.style.backgroundPositionY = offset * 0.905 + "px"
    })

function updateScore() {
    document.getElementById('score').innerText = player.score;
}

const player = {
    score: localStorage.getItem('score1'),
};

function checkanswer1(){
    qbox.style.display='none';
    radiobtn.style.display='block';
    Question1_answered = true;
}

function checkanswer2(){
    Question2_answered = true;
    qbox.style.display='none'
    switch(document.querySelector('input[name="q"]:checked').value){
        case 'good':
            player.score+=10000
        case 'medium':
            player.score+=7000
        case 'bad':
            player.score+=5000
    }
    updateScore();
}

function checkanswer3(){
    Question3_answered = true;
    qbox.style.display='none';
    if (document.getElementById('slider').value) {
        player.score -= document.getElementById('slider').value;
        updateScore();
    }
    radiobtn.style.display='block';
    sliderspan.style.display='none';
}

function checkanswer4(){
    Question4_answered = true
    qbox.style.display='none'
    switch(document.querySelector('input[name="q"]:checked').value){
        case 'good':
            player.score+=10000
        case 'medium':
            player.score+=7000
        case 'bad':
            player.score+=5000
    }
    updateScore();
}

function checkanswer5(){
    qbox.style.display='none';
    radiobtn.style.display='block';
    Question5_answered = true;
}
player.score=0;
updateScore();