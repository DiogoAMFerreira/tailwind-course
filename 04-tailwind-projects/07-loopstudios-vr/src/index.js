import './style.css';

// Hamburger to X toggle
const hamIcons = document.getElementsByClassName('hamburger-icon');
for (let i = 0; i < hamIcons.length; i++) {
    hamIcons[i].addEventListener('click', () => {
        hamIcons[i].classList.toggle('active');
    });
}
