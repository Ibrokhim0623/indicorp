

window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu-icon");
    const nav = document.querySelector(".nav");
    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        nav.classList.toggle("active");
    });
    nav.addEventListener("click", () => {
        menu.classList.toggle("active");
        nav.classList.toggle("active");
    });

});

window.addEventListener("scroll", () => {
    let header = document.querySelector(".navigation");
    let top = document.querySelector(".scrollUp");
    top.classList.toggle("sticky", window.scrollY > 200);
    header.classList.toggle("sticky", window.scrollY > 0);
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal("header h1, #pricing h1, .video, .touch p, .text", {origin: 'left', delay: 400});
sr.reveal(".card, .box, .work1 h1, .cup",  {delay: 500, interval: 200});
sr.reveal(".work1 p, .col-4",  {delay: 500, origin: 'bottom', interval: 250});
sr.reveal(".content1 img", {interval: 200});

