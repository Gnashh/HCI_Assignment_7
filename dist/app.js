const navmenu = document.querySelector("#navmenu")
const menu = document.querySelector("#menu")

navmenu.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    navmenu.classList.toggle("bg-white")
})