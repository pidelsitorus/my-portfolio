// Navar Fixed
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar-fixed');

    window.onscroll = function() {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
    }
});

// hamburger
const hamburger = document.querySelector('#hamburger');
const NavMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function()    {
    hamburger.classList.toggle('hamburger-active');
    NavMenu.classList.toggle('hidden');
});