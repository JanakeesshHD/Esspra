// Product Details Page JavaScript

// Thumbnail Gallery
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Update main image
        const imageUrl = this.getAttribute('data-image');
        mainImage.src = imageUrl;
        
        // Update active thumbnail
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        this.classList.add('active');
    });
});

// Quantity Selector
const quantityInput = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decreaseQuantity');
const increaseBtn = document.getElementById('increaseQuantity');

decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
    }
});

// Ensure quantity is always a valid number
quantityInput.addEventListener('change', () => {
    let value = parseInt(quantityInput.value);
    if (isNaN(value) || value < 1) {
        quantityInput.value = 1;
    } else if (value > 10) {
        quantityInput.value = 10;
    }
});

// Product Tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show corresponding tab content
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });
    });
});

// Add to Cart Button
const addToCartBtn = document.getElementById('addToCart');
const scrollToTopBtn = document.getElementById('scrollToTop');

addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    
    // In a real application, you would add the product to the cart here
    // For this demo, we'll just show an alert
    alert(`Added ${quantity} item(s) to cart!`);
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Simulate clicking the Add to Cart button
    setTimeout(() => {
        addToCartBtn.click();
    }, 800);
});

// Request Quote Button
const requestQuoteBtn = document.getElementById('requestQuote');

requestQuoteBtn.addEventListener('click', () => {
    // In a real application, you would open a quote request form
    // For this demo, we'll redirect to the contact page
    window.location.href = 'contact.html?product=ES-PRO-4Z';
});

// Related Products Slider
const sliderPrev = document.querySelector('.slider-arrow.prev');
const sliderNext = document.querySelector('.slider-arrow.next');
const sliderDots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = 3; // Number of pages in the slider

sliderNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

sliderPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

function updateSlider() {
    // Update active dot
    sliderDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // In a real implementation, this would slide the products
    // For this demo, we'll just log the current slide
    console.log(`Showing slide ${currentSlide + 1} of ${totalSlides}`);
}

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-item, .support-card, .product-card');
    
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
    .feature-item, .support-card, .product-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .feature-item.animate, .support-card.animate, .product-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);
// Initial check for elements in view
window.addEventListener('load', animateOnScroll);