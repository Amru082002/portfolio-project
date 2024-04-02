const styleswitchertoggle=document.querySelector(".style-toggler");
styleswitchertoggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll",()=>{
    if( document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternatestyle=document.querySelectorAll(".alternate-style");
function setActiveStyle(colors){
    alternatestyle.forEach((style) => {
        if(colors === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}
const daynight=document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon");
    }
})