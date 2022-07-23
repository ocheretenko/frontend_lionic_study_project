document.addEventListener('DOMContentLoaded', () => {

    let headerNav = document.querySelector('.header__nav');

    document.querySelector('.header__show-popup-nav-btn').addEventListener('click', (event) => {
        event.preventDefault();
        headerNav.classList.add('header__nav-popup');
    });

    document.querySelector('.header__hide-popup-nav-btn').addEventListener('click', (event) => {
        event.preventDefault();
        headerNav.classList.remove('header__nav-popup');
    });
})