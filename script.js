//  hedear scroll reveal
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. scrool reveal
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

// launch reveal on page load
reveal();

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    
    // dynamic moving text
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // text go up
        heroContent.style.transform = `translateY(${scrollValue * 0.3}px)`;
        // gone smoothly
        heroContent.style.opacity = 1 - (scrollValue / 700);
    }

    // navbar transparent
    const nav = document.querySelector('.navbar');
    if (scrollValue > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// reveal
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // toggle menu
    nav.classList.toggle('active');
    // animating burger
    burger.classList.toggle('toggle');
});

// menu close on click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});