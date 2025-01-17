/// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the active class on nav-links
    navLinks.classList.toggle('active');
    // Animate the hamburger icon
    hamburger.classList.toggle('active');
});

// Social Links Hover Effect (Optional Customization)
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

// Smooth Scrolling (Optional for Internal Links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tilt Effect for the Profile Image
VanillaTilt.init(document.querySelectorAll('.profile-image'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5,
});

// Profile image and red circle animation
const profileContainer = document.querySelector('.profile-image-container');
const redCircle = document.querySelector('.red-circle');

profileContainer.addEventListener('mouseenter', () => {
    cursorFollower.style.transform = 'scale(1.5)';
    redCircle.style.transform = 'scale(1.1)';
});

profileContainer.addEventListener('mouseleave', () => {
    cursorFollower.style.transform = 'scale(1)';
    redCircle.style.transform = 'scale(1)';
});

// Typing effect for the title
const titleSpan = document.querySelector('.title span');
const roles = ['Developer', 'Designer', 'Freelancer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        titleSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        titleSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Pause at full word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500); // Pause before next word
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}

// Start the typing effect
typeEffect();



socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'scale(1.5)';
        link.style.transform = 'translateY(-5px)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'scale(1)';
        link.style.transform = 'translateY(0)';
    });
});

// Hire button effects
const hireButton = document.querySelector('.hire-button');

hireButton.addEventListener('mouseenter', () => {
    cursorFollower.style.transform = 'scale(1.5)';
    hireButton.style.transform = 'scale(1.05)';
});

hireButton.addEventListener('mouseleave', () => {
    cursorFollower.style.transform = 'scale(1)';
    hireButton.style.transform = 'scale(1)';
});

// Smooth scroll for hire button
hireButton.addEventListener('click', (e) => {
    e.preventDefault();
    const contactPage = '/contact.html';
    window.location.href = contactPage;
});

// Add tilt effect to the profile image container
VanillaTilt.init(document.querySelector('.profile-image-container'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.3
});

// Fade in content on page load
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        content.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);
});