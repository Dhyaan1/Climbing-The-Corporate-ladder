const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;



function flipCard(){
    if(lockBoard) return;
    if(this===firstCard) return;
    this.classList.add('flip');
    console.log(this.dataset)
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
    resetBoard();
}
function unFlipCard(){
    lockBoard=true;
    setTimeout(()=>{
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