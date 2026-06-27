
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((enteries) => {
    enteries.forEach(entry => {
        if(entry.isIntersecting){

            const counter = entry.target; 
            const target = +counter.dataset.target;

            let count=0;

            const update = () => {
                
                const increment = target /150;

                if(count<target){
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(update);
                }else{
                    counter.innerText = target + "+";
                }
            };
            update();
            counterObserver.unobserve(counter);
        }
    });
});
counters.forEach(counter => counterObserver.observe(counter));

/* TESTIMONIALS */
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


let currentIndex = 0;
const totalCards=cards.length;

function updateSlider(){
    /*track.computedStyleMap.apply.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot,index) => {
        dot.classList.toggle("active", index === currentIndex);
    });*/
    console.log(currentIndex);
    track.style.transform = `translateX(-${currentIndex*100}%)`
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex >= totalCards){
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex<0){
        currentIndex = totalCards -1;
    }
    updateSlider();
})
setInterval(() =>{
    currentIndex++;
    if(currentIndex>=totalCards){
        currentIndex = 0;
    }
    updateSlider();
}, 5000);

/* SCROLL BUTTON */
const scrollBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () =>{
    if(window.scrollY > 500){
        scrollBtn.classList.add("show");
    }else{
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((reveal, index) => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            setTimeout(() => {
                reveal.classList.add("active");
            }, index * 120);

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();