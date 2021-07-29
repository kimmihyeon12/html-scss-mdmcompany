console.log("onepage hello");
const slider = document.querySelector('.img-slider')
const sliderlength = document.querySelectorAll('.img-slider img').length;

const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
const slideBtnPrev = document.querySelector('.slide_btn_prev');

const slideWidth = window.innerWidth;

const slideSpeed = 300;
let count = 0;

slideBtnNext.onclick = function(){
    count++;
    if(count >= sliderlength){
        count = 0;
        slider.style.transform = "translate3d(0px, 0px, 0px)";
        return;
    }
    slider.style.transform = "translate3d(-" + (slideWidth * count) + "px, 0px, 0px)";
}

slideBtnPrev.onclick = function(){
    if(count <= 0){
        count = 1;
        slider.style.transform = "translate3d(-" + (slideWidth * count) + "px, 0px, 0px)";
        return;
    }
    count -= 1;
    slider.style.transform = "translate3d(0px, 0px, 0px)";
}
