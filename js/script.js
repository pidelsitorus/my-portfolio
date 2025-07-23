// Navar Fixed
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar-fixed');

    window.onscroll = function() {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;
        const toTop = document.querySelector('#to-top');

        if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
            toTop.classList.remove('hidden');
            toTop.classList.add('flex');
        } else {
            header.classList.remove('navbar-fixed');
            toTop.classList.remove('flex');
            toTop.classList.add('hidden');
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


// klik diluar hamburger
window.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !NavMenu.contains(event.target)) {
        hamburger.classList.remove('hamburger-active');
        NavMenu.classList.add('hidden');
    }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});