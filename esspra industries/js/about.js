// Facilities Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.facility-slide');
const totalSlides = slides.length;

// Hide all slides except the first one
for (let i = 1; i < totalSlides; i++) {
    slides[i].style.display = 'none';
}

// Function to show the next slide
function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'block';
}

// Function to show the previous slide
function prevSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
}

// Add navigation buttons to the slider
const facilitiesSlider = document.querySelector('.facilities-slider');
const prevButton = document.createElement('button');
prevButton.className = 'slider-nav prev';
prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
prevButton.addEventListener('click', prevSlide);

const nextButton = document.createElement('button');
nextButton.className = 'slider-nav next';
nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
nextButton.addEventListener('click', nextSlide);

facilitiesSlider.appendChild(prevButton);
facilitiesSlider.appendChild(nextButton);

// Add slider navigation styles
const style = document.createElement('style');
style.innerHTML = `
    .facilities-slider {
        position: relative;
    }
    
    .slider-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
        transition: background-color 0.3s ease;
    }
    
    .slider-nav:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
    
    .slider-nav.prev {
        left: 10px;
    }
    
    .slider-nav.next {
        right: 10px;
    }
    
    .facility-slide {
        display: block;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

// Auto-rotate slides
setInterval(nextSlide, 5000);

document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
// Add animation class to CSS
const timelineStyle = document.createElement('style');
timelineStyle.innerHTML = `
    .timeline-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .timeline-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item:nth-child(1) { transition-delay: 0.1s; }
    .timeline-item:nth-child(2) { transition-delay: 0.2s; }
    .timeline-item:nth-child(3) { transition-delay: 0.3s; }
    .timeline-item:nth-child(4) { transition-delay: 0.4s; }
    .timeline-item:nth-child(5) { transition-delay: 0.5s; }
    .timeline-item:nth-child(6) { transition-delay: 0.6s; }
`;
document.head.appendChild(timelineStyle);

// Run animation check on scroll
window.addEventListener('scroll', animateTimelineItems);
// Initial check for elements in view
window.addEventListener('load', animateTimelineItems);

// Animate value cards when they come into view
const animateValueCards = () => {
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 100);
        }
    });
};

// Add animation class to CSS
const valueCardStyle = document.createElement('style');
valueCardStyle.innerHTML = `
    .value-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .value-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(valueCardStyle);

// Run animation check on scroll
window.addEventListener('scroll', animateValueCards);
// Initial check for elements in view
window.addEventListener('load', animateValueCards);