/********** typing animation***********/

var typed = new Typed(".typing",{
    strings:["","Web Developer...","Graphic Designer...","Web Designer..."],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})



const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",() => 
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    }

    

