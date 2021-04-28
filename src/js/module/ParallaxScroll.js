export default class ParallaxScroll {
    constructor() {
        this.translates = document.querySelectorAll(".translate");
        this.header = document.querySelector(".header");
        this.headerTitle = document.querySelector(".header__title");
        this.headerBottomFade = document.querySelector(".header__bottom-fade");
        this.headerHeight = this.header.offsetHeight;

        this.events();
    }

    events() {
        this.windowScroll();
    }

    windowScroll() {
        window.addEventListener("scroll", () => {
            let scrollFromTop = window.pageYOffset;

            this.translates.forEach(el => {
                let speed = el.dataset.speed;
                el.style.transform = `translateY(${scrollFromTop * +speed}px)`;
            });

            this.headerTitle.style.opacity = -scrollFromTop / (this.headerHeight / 2) + 1;
            this.headerBottomFade.style.height = `${scrollFromTop * .05 + 15}vh`;

        });
    }

}
