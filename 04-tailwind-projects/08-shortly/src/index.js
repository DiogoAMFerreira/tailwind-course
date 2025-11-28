import './style.css';

const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const longUrl = input.value;
    if (longUrl === '') {
        input.classList.add('border-red-500');
        errMsg.textContent = 'Please add a link';
        return;
    }

    if (!validUrkl(longUrl)) {
        input.classList.add('border-red-500');
        errMsg.textContent = 'Please enter a valid URL';
        return;
    }

    //...submit to URL shortening service...
});

function validUrkl(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
        'i'
    );
    return !!pattern.test(str);
}

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
