// Shared site chrome: loader, theme toggle, mobile nav, scroll effects, reveal-on-scroll.
// Used by index.html and pitch.html.

// ===== LOADER =====
const loader = document.getElementById('loader');
if (loader) {
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 300);
    });
}

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const updateThemeIcon = (theme) => {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');
if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });
}

// ===== SCROLL PROGRESS =====
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
    const updateScrollProgress = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        scrollProgress.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    updateScrollProgress();
}

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ===== ACTIVE NAV LINK (sections with ids + matching #hash nav links) =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (revealElements.length) {
    if (prefersReducedMotion) {
        revealElements.forEach(el => el.classList.add('active'));
    } else {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 100);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '200px',
            threshold: 0
        });
        revealElements.forEach(el => revealObserver.observe(el));
    }
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
                if (nav) {
                    nav.classList.remove('active');
                    if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
                }
            }
        }
    });
});

// ===== PARALLAX EFFECT (skipped when the user prefers reduced motion) =====
const heroGradients = document.querySelectorAll('.hero-gradient');
if (heroGradients.length && !prefersReducedMotion) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        heroGradients.forEach((gradient, index) => {
            const speed = (index + 1) * 0.1;
            gradient.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });
}

// ===== FOOTER YEAR =====
const footerCopyright = document.getElementById('footerCopyright');
if (footerCopyright) {
    const studio = footerCopyright.dataset.studio || 'Taratorkin Official';
    footerCopyright.textContent = `© ${new Date().getFullYear()} ${studio} — All rights reserved`;
}
