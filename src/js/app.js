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

