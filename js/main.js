/* ============================================
   Myungsung Kim - Academic Website
   UI interactions and language toggle
   ============================================ */

let currentLanguage = 'en';

function applyLanguage(lang) {
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';

    document.querySelectorAll('[data-en][data-ko]').forEach((element) => {
        const nextValue = element.getAttribute(lang === 'ko' ? 'data-ko' : 'data-en');
        if (typeof nextValue === 'string') {
            element.innerHTML = nextValue;
        }
    });

    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'en' ? '한국어' : 'English';
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ko' : 'en';
    applyLanguage(currentLanguage);
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLanguage);

    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    document.addEventListener('scroll', () => {
        if (!nav) return;
        if (window.scrollY > 12) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            const target = targetId ? document.querySelector(targetId) : null;
            if (!target) return;

            event.preventDefault();
            const navHeight = nav ? nav.offsetHeight : 0;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;

            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        });
    });
});
