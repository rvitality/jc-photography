export default class NavExpand {
    constructor() {
        this.menuButton = document.querySelector(".menu__container");
        this.menuBg = document.querySelector(".menu");
        this.navBackground = document.querySelector(".background");

        this.navConnect = document.querySelector(".navigation__connect")
        this.navList = document.querySelector(".navigation__nav");

        this.socialLinks = document.querySelectorAll(".filling");

        this.events();
    }

    events() {
        this.menuButton.addEventListener("click", e => this.expand(e));
    }

    expand(e) {
        if (!e.target.classList.contains("background")) {
            this.navBackground.classList.toggle("enlarged");
            this.menuBg.classList.toggle("menu--dark");
            this.navConnect.classList.toggle("navigation__connect--dark");
            this.socialLinks.forEach(el => el.classList.toggle("dark"));
            this.navList.classList.toggle("navigation__nav--show");
        }
    }

}