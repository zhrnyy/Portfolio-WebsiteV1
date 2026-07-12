const progress = document.querySelector(".progress-fill");
const indicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const percent = scrollTop / docHeight;

    progress.style.width = percent * 100 + "%";

    const maxLeft = window.innerWidth - indicator.offsetWidth;
    indicator.style.left =
    `calc(${percent * 100}% - ${indicator.offsetWidth / 2}px)`;
});

const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
    if(navList.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
})