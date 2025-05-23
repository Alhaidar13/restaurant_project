// Menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");



menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

// Close Menu On scroll
window.onscroll.remove = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};

// ScrollReveal
const animate = ScrollReveal({
    origin: "top",
    distance: '60px',
    duration: "2500",
    delay: "400",
});

animate.reveal(".home-text", {origin: "left"});
animate.reveal(".home-img", {origin: "bottom"});
animate.reveal(".heading.newsletter h2", {origin: "top"});
animate.reveal(
    "Header',.feature-Box,.feature-menu,.item-box,.m-item-box,.t-box,.newsletter form",
     {
        interval: 100,
    }
);

