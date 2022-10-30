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

/*window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    if(offset>= 1500 && Question1_answered==false){
        //this.alert("Hello1")   // turn this into a QnA
        Question1_answered = true // use an if statment and change boolean correctAnswer1 if the answer is coorect
        checkanswer1();  
    }
    g1.style.backgroundPositionY = offset * 0.905 + "px"
})

const g2 = document.getElementById("guy2")*/

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    console.log(offset)
    if(offset>= 3500 && Question1_answered==false){
        g1.style.backgroundImage = "url(pimg/interviewer-1-eyes.png)";
        //this.alert("Hello1")   // turn this into a QnA
        Question1_answered = true // use an if statment and change boolean correctAnswer1 if the answer is coorect
        checkanswer1();  
    }
    g1.style.backgroundPositionY = offset * 0.905 + "px"

    
    if(offset>= 5500 && Question2_answered==false){
        g2.style.backgroundImage = "url(pimg/interviewer-2-eyes.png)";
        this.alert("It seems you have cleared level 1. Impressive.")
        Question2_answered = true
        checkanswer2();
    }
    g2.style.backgroundPositionY = offset * 0.92 + "px"


    if(offset>= 7500 && Question3_answered==false){
        g3.style.backgroundImage = "url(pimg/interviewer-3-eyes.png)";
        this.alert("")
        Question3_answered = true
        checkanswer3();
    }
    g3.style.backgroundPositionY = offset * 0.93 + "px"


    if(offset>=6500 && Question4_answered==false){
        g4.style.backgroundImage = "url(pimg/interviewer-4-eyes.png)";
        //this.alert("Hello4")
        Question4_answered = true
        checkanswer4();
    }
    g4.style.backgroundPositionY = offset * 0.92 + "px"


    if(offset>=4500 && Question5_answered==false){
        g5.style.backgroundImage = "url(pimg/interviewer-5-eyes.png)";
        //this.alert("Hello5")
        Question5_answered = true
        checkanswer5();
    }
    g5.style.backgroundPositionY = offset * 0.905 + "px"
    })
/*
const g3 = document.getElementById("guy3")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    if(offset>= 4000 && Question3_answered==false){
        //this.alert("Hello3")
        Question3_answered = true
        checkanswer3();
    }
    g3.style.backgroundPositionY = offset * 0.93 + "px"
})

const g4 = document.getElementById("guy4")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    if(offset>=5000 && Question4_answered==false){
        //this.alert("Hello4")
        Question4_answered = true
        checkanswer4();
    }
    g4.style.backgroundPositionY = offset * 0.92 + "px"
})

const g5 = document.getElementById("guy5")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    if(offset>=6000 && Question5_answered==false){
        //this.alert("Hello5")
        Question5_answered = true
        checkanswer5();
    }
    g5.style.backgroundPositionY = offset * 0.905 + "px"
})
*/
function updateScore() {
    document.getElementById('score').innerText = player.score;
}

const player = {
    score: localStorage.getItem('score1'),
};

function checkanswer1(){
    if (correctAnswer1) {
        player.score = player.score + 1000;
        updateScore();
    }
    else{
        player.score = player.score - 2000;
        updateScore();
    }
}

function checkanswer2(){
    if (correctAnswer2) {
        player.score = player.score + 1000;
        updateScore();
    }
    else{
        player.score = player.score - 2000;
        updateScore();
    }
}

function checkanswer3(){
    if (correctAnswer3) {
        player.score = player.score + 1000;
        updateScore();
    }
    else{
        player.score = player.score - 2000;
        updateScore();
    }
}

function checkanswer4(){
    if (correctAnswer4) {
        player.score = player.score + 1000;
        updateScore();
    }
    else{
        player.score = player.score - 2000;
        updateScore();
    }
}

function checkanswer5(){
    if (correctAnswer5) {
        player.score = player.score + 1000;
        updateScore();
    }
    else{
        player.score = player.score - 2000;
        updateScore();
    }
}

updateScore();