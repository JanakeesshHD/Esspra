// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formFields = contactForm.querySelectorAll('input, select, textarea');

// Add success message div
const successMessage = document.createElement('div');
successMessage.className = 'success-message';
successMessage.innerHTML = 'Thank you for your message! We will get back to you shortly.';
contactForm.insertBefore(successMessage, contactForm.firstChild);

// Form validation function
function validateForm(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Remove all existing error messages
    const existingErrors = contactForm.querySelectorAll('.error');
    existingErrors.forEach(error => error.remove());
    
    // Reset error styling
    formFields.forEach(field => {
        field.classList.remove('error-field');
    });
    
    // Validate required fields
    formFields.forEach(field => {
        if (field.required && !field.value.trim()) {
            isValid = false;
            field.classList.add('error-field');
            
            // Create error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error';
            errorMessage.textContent = 'This field is required';
            
            // Insert error message after the field
            field.parentNode.insertBefore(errorMessage, field.nextSibling);
        }
    });
    
    // Validate email format
    const emailField = document.getElementById('email');
    if (emailField.value.trim() && !isValidEmail(emailField.value)) {
        isValid = false;
        emailField.classList.add('error-field');
        
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error';
        errorMessage.textContent = 'Please enter a valid email address';
        
        // Insert error message after the field
        emailField.parentNode.insertBefore(errorMessage, emailField.nextSibling);
    }
    
    // Validate phone format (if provided)
    const phoneField = document.getElementById('phone');
    if (phoneField.value.trim() && !isValidPhone(phoneField.value)) {
        isValid = false;
        phoneField.classList.add('error-field');
        
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error';
        errorMessage.textContent = 'Please enter a valid phone number';
        
        // Insert error message after the field
        phoneField.parentNode.insertBefore(errorMessage, phoneField.nextSibling);
    }
    
    // If form is valid, submit it
    if (isValid) {
        // In a real application, you would send the form data to a server here
        // For this demo, we'll just show a success message and reset the form
        successMessage.style.display = 'block';
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation function
function isValidPhone(phone) {
    // Basic phone validation - allows various formats
    const phoneRegex = /^[\d\s\+\-\(\)]{10,20}$/;
    return phoneRegex.test(phone);
}

// Add form submission event listener
contactForm.addEventListener('submit', validateForm);

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current FAQ item
        item.classList.toggle('active');
    });
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.info-card, .faq-item');
    
    elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            setTimeout(() => {
                element.classList.add('animate');
            }, index * 100);
        }
    });
};

// Add animation class to CSS
const style = document.createElement('style');
style.innerHTML = `
    .info-card, .faq-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .info-card.animate, .faq-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);
// Initial check for elements in view
window.addEventListener('load', animateOnScroll);