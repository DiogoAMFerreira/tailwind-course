import './style.css';

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// Tabs menu event listener
tabs.forEach((tab) =>
    tab.addEventListener('click', (event) => {
        // Remove active classes from all tabs and panels
        tabs.forEach((tab) =>
            tab.children[0].classList.remove(
                'border-soft-red',
                'border-b-4',
                'md:border-b-0'
            )
        );
        panels.forEach((panel) => panel.classList.add('hidden'));

        // Activate clicked tab and corresponding panel
        event.target.classList.add(
            'border-soft-red',
            'border-b-4',
            'md:border-b-0'
        );
        const panelToActivate = document.querySelector(
            `.${event.target.dataset.target}`
        );
        panelToActivate.classList.remove('hidden');
    })
);

// Hamburger to X toggle
const hamIcons = document.getElementsByClassName('hamburger-icon');

for (let i = 0; i < hamIcons.length; i++) {
    hamIcons[i].addEventListener('click', () => {
        hamIcons[i].classList.toggle('active');
    });
}

const logo = document.getElementById('logo');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    if (menu.classList.contains('flex')) {
        logo.src = './images/logo-bookmark-footer.svg';
    } else {
        logo.src = './images/logo-bookmark.svg';
    }
});

const menuLinks = menu.querySelectorAll('a.mobile-link');
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        menuBtn.click();
        const hamIcon = menuBtn.querySelector('.hamburger-icon');
        if (hamIcon) {
            hamIcon.classList.remove('active');
        }
    });
}
