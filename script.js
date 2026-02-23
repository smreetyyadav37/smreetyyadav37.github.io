// Theme Toggle Logic
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️';
    }
});

// Update Active Nav Link on Scroll
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Offset by 150 pixels so the active state triggers right as it comes into view
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
