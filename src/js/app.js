const translates = document.querySelectorAll(".translate");

const header = document.querySelector(".header");
const headerTitle = document.querySelector(".header__title");
const headerBottomFade = document.querySelector(".header__bottom-fade");

const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
    let scrollFromTop = window.pageYOffset;

    translates.forEach(el => {
        let speed = el.dataset.speed;
        el.style.transform = `translateY(${scrollFromTop * +speed}px)`;
    });

    headerTitle.style.opacity = -scrollFromTop / (headerHeight / 2) + 1;
    headerBottomFade.style.height = `${scrollFromTop * .05 + 15}vh`;

});


// nav
const menuButton = document.querySelector(".menu__container");
const menuBg = document.querySelector(".menu");
const navBackground = document.querySelector(".background");

const navConnect = document.querySelector(".navigation__connect")
const navList = document.querySelector(".navigation__nav");

const socialLinks = document.querySelectorAll(".filling");

menuButton.addEventListener("click", e => {
    if (!e.target.classList.contains("background")) {
        navBackground.classList.toggle("enlarged");
        menuBg.classList.toggle("menu--dark");
        navConnect.classList.toggle("navigation__connect--dark");
        socialLinks.forEach(el => el.classList.toggle("dark"));
        navList.classList.toggle("navigation__nav--show");
    }
});
