const hamburger = document.querySelector(".hamburger-menu")
const close = document.querySelector(".close-menu")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", showMenu)

function showMenu(){
    navMenu.style.display = "block"
}

close.addEventListener("click", hideMenu)

function hideMenu(){
    navMenu.style.display = "none"
}