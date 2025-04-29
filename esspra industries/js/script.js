// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        }
    });
});

// Testimonial Slider
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize testimonial display
showTestimonial(currentTestimonial);

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form Submission
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to a server
        console.log('Form submitted with values:', formValues);
        
        // Show success message
        alert('Thank you for your message. We will get back to you soon!');
        
        // Reset form
        this.reset();
    });
}


// Return to Top Button Functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const returnToTopBtn = document.getElementById("return-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        returnToTopBtn.style.display = "block";
    } else {
        returnToTopBtn.style.display = "none";
    }
}

document.getElementById("return-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Product Slider functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("product-slide");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}

// Add event listeners to buttons
document.querySelector('.prev-btn').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next-btn').addEventListener('click', () => plusSlides(1));

// Auto slide every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);