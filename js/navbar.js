const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
});

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () =>{
    if(window.scrollY>50){
        navbar.style.background = "rgba(15,76,129,.95)";
        navbar.style.padding = "15px 8%";
    }else{
        navbar.style.background = "rgba(255,255,255,.15)";
        navbar.style.padding = "20px 8%";
    }
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () =>{
    navLinks.classList.remove("active");
});

});