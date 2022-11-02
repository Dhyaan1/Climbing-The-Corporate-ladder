const cards = document.querySelectorAll('.card'),
timeTag = document.querySelector(".time b");
scoreTag = document.querySelector(".score b");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let maxTime = 60;
let timeLeft = maxTime;
let timer;
let matchedCard = 0;
let isPlaying = false;
let score = 0;

function initTimer() {
    if(timeLeft <= 0) {
        lockBoard=true;
        return clearInterval(timer);
    }
    timeLeft--;
    score = timeLeft*42069
    timeTag.innerText = timeLeft;
    scoreTag.innerText = score;
    this.classList.add('score');
}
function flipCard(){
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(lockBoard) return;
    if(this===firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard=true;
        firstCard=this;
    }
    else{
        hasFlippedCard=false;
        secondCard=this;

        checkForMatch();
    }
}

function checkForMatch(){
    let isMatch=firstCard.dataset.name === secondCard.dataset.name
    isMatch?disableCards():unFlipCard()
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedCard++;
    if(matchedCard == 8 && timeLeft > 0) {
        return clearInterval(timer);
    }
    resetBoard();
}

function unFlipCard(){
    firstCard.classList.add('shake')
    secondCard.classList.add('shake')
    lockBoard=true;
    setTimeout(()=>{
    firstCard.classList.remove('shake')
    secondCard.classList.remove('shake')
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetBoard();
    }, 750)
}

function resetBoard()
{
    [hasFlippedCard, lockBoard] = [false,false];
    [firstCard, secondCard] = [ null, null];
}

(function shuffle(){
    cards.forEach(card=>{
        card.style.order=Math.floor((Math.random()*16));
    })
})();
cards.forEach(card => card.addEventListener('click',flipCard))