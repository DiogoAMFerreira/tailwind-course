import './style.css';

// Hamburger to X toggle
const hamIcons = document.getElementsByClassName('hamburger-icon');
for (let i = 0; i < hamIcons.length; i++) {
    hamIcons[i].addEventListener('click', () => {
        hamIcons[i].classList.toggle('active');
    });
}

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
});
