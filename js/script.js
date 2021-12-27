
// side bar toggle (open and close)
let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
};
document.querySelector('#close-side-bar').onclick = () => {
    sideBar.classList.toggle('active');
};

// search input form toggle bar
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
};

document.querySelectorAll('.accordion-container .accordion').forEach(accordion => {
    accordion.onclick = () => {
        accordion.classList.toggle('active');
    }
});

// homepage slide and cursor slide
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// div cursor slide
var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});