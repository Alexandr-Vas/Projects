document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav-bar');

    burgerMenu.addEventListener('click', function () {
        menu.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
});