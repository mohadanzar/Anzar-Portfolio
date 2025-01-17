 // Hamburger menu functionality
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');
 const links = document.querySelectorAll('.nav-links a');

 hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navLinks.classList.toggle('active');
 });

 // Close menu when a link is clicked
 links.forEach(link => {
     link.addEventListener('click', () => {
         hamburger.classList.remove('active');
         navLinks.classList.remove('active');
     });
 });

 // Close menu when clicking outside
 document.addEventListener('click', (e) => {
     if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
         hamburger.classList.remove('active');
         navLinks.classList.remove('active');
     }
 });

 // Previous JavaScript functionality
 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Form submission handling
 document.querySelector('.contact-form').addEventListener('submit', function(e) {
     e.preventDefault();
     alert('Thank you for your message! I will get back to you soon.');
     this.reset();
 });

 // Animate project cards on scroll
 const projectCards = document.querySelectorAll('.project-card');
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = 1;
             entry.target.style.transform = 'translateY(0)';
         }
     });
 });

 projectCards.forEach(card => {
     card.style.opacity = 0;
     card.style.transform = 'translateY(20px)';
     card.style.transition = 'opacity 0.5s, transform 0.5s';
     observer.observe(card);
 });