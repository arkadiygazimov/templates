// burger

const headerBurger = document.querySelector('.header-top__burger');

headerBurger.addEventListener('click', function () {

    const burgerActive = document.querySelector('.header-top__burger');
    const headerNavActive = document.querySelector('.nav');
    const navBg = document.querySelector('.nav-bg');

    burgerActive.classList.toggle('active');
    headerNavActive.classList.toggle('active');
    navBg.classList.toggle('active');
}, false);