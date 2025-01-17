// Cursor effects
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Follower follows with slight delay for smooth effect
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Form validation and handling
const form = document.querySelector('.contact-form form');
const inputs = document.querySelectorAll('.form-input');

// Add floating label effect
inputs.forEach(input => {
    // Add focus effects
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
        cursorFollower.style.transform = 'scale(0.5)';
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
        cursorFollower.style.transform = 'scale(1)';
    });

    // Add hover effect
    input.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'scale(1.5)';
    });

    input.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Form submission handling
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic validation
    let isValid = true;
    const errorMessages = [];

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            errorMessages.push(`${input.placeholder} is required`);
        } else {
            input.classList.remove('error');
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
                errorMessages.push('Please enter a valid email address');
            }
        }
    });

    if (!isValid) {
        alert(errorMessages.join('\n'));
        return;
    }

    // Simulate form submission
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        // Here you would typically make an API call to your backend
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
        
        // Success handling
        submitBtn.textContent = 'Message Sent!';
        form.reset();
        
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }, 2000);
        
    } catch (error) {
        submitBtn.textContent = 'Error! Try Again';
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }, 2000);
    }
});

// Social icons hover effect
const socialLinks = document.querySelectorAll('.social-link');

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

// Contact details hover effect
const contactDetails = document.querySelectorAll('.contact-detail');

contactDetails.forEach(detail => {
    detail.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'scale(1.5)';
        detail.style.transform = 'translateX(10px)';
    });
    
    detail.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'scale(1)';
        detail.style.transform = 'translateX(0)';
    });
});

// Add tilt effect to the form container
VanillaTilt.init(document.querySelector('.contact-form'), {
    max: 5,
    speed: 400,
    glare: true,
    'max-glare': 0.2
});