const d5 = document.getElementById("p5")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    d5.style.backgroundPositionX = offset * -2.7 + "px"
})

const g1 = document.getElementById("guy1")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    g1.style.backgroundPositionY = offset * -2.7 + "px"
})

const g2 = document.getElementById("guy2")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    g2.style.backgroundPositionY = offset * -2.7 + "px"
})