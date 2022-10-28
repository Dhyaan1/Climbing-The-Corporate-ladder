const d5 = document.getElementById("p5")

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset
    d5.style.backgroundPositionY = offset * -2.7 + "px"
})