let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Video Editor', 'Motion Graphics Designer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1200,
    loop: true,
});