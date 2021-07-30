console.log("onepage hello");
const slider = document.querySelector('.img-slider')
const sliderlength = document.querySelectorAll('.img-slider img').length;
const navWrap = document.querySelector('.nav-wrap');
const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
const slideBtnPrev = document.querySelector('.slide_btn_prev');
const navItems = document.querySelectorAll('.nav-li>li>a');
const navsubItems = document.querySelectorAll('.nav-li>li>ul>li>a');
const eng = document.querySelector('.eng');
const slideWidth = window.innerWidth;
const backNav = document.querySelector(".back-nav");
const logo = document.querySelector(".logo");
const slideSpeed = 300;
let count = 0;

slideBtnNext.onclick = function () {
    count++;
    if (count >= sliderlength) {
        count = 0;
        slider.style.transform = "translate3d(0px, 0px, 0px)";
        return;
    }
    slider.style.transform = "translate3d(-" + (slideWidth * count) + "px, 0px, 0px)";
}

slideBtnPrev.onclick = function () {
    if (count <= 0) {
        count = 1;
        slider.style.transform = "translate3d(-" + (slideWidth * count) + "px, 0px, 0px)";
        return;
    }
    count -= 1;
    slider.style.transform = "translate3d(0px, 0px, 0px)";
}

function hover() {
    // logo.style.src = "http://www.mdmworld.co.kr/assets/pc/images/common/logo-header.png";
    backNav.style.display = "block";

    for (let navItem of navItems) {
        navItem.style.color = "black";
    }
    for (let navsubItem of navsubItems) {
        navsubItem.style.display = "block";

    }

    eng.style.color = "black";
    navWrap.style.borderBottom = "1px solid lightgrey";
}

function unhover() {
    backNav.style.display = "none";

    for (let navItem of navItems) {
        navItem.style.color = "white";
    }
    for (let navsubItem of navsubItems) {
        navsubItem.style.display = "none";
    }
    navWrap.style.borderBottom = "none";
    eng.style.color = "white";
}