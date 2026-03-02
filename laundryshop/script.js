// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    alert(`Thank you ${name}! We'll get back to you soon at ${email}`);
    
    // Reset form
    document.querySelector('.contact-form').reset();
}

// Add smooth active state to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.borderBottom = 'none';
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.style.borderBottom = '3px solid #e74c3c';
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Fresh & Clean Laundry website loaded');
});
