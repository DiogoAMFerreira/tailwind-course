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
