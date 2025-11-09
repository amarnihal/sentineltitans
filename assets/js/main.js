// Main JavaScript file for Sentinel Titans website
console.log('Sentinel Titans website loaded');

// Navigation scroll logic and mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let lastScrollTop = 0;
    let scrollTimeout;
    
    // Navbar scroll behavior
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down - hide navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show navbar
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        }, 10); // Small delay to prevent excessive calls
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero Slideshow Functionality
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        const prevSlideIndex = currentSlide;
        
        // Guard: when first load prevSlideIndex may equal index
        if (slides[prevSlideIndex] && prevSlideIndex !== index) {
            slides[prevSlideIndex].classList.remove('active');
            slides[prevSlideIndex].classList.add('prev');
            
            // After transition ends, remove 'prev' to reset position
            setTimeout(() => {
                if (slides[prevSlideIndex]) {
                    slides[prevSlideIndex].classList.remove('prev');
                }
            }, 1200); // match CSS transition duration
        }

        slides[index].classList.add('active');
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Event listeners
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            stopSlideshow();
            startSlideshow(); // Restart timer
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevSlide();
            stopSlideshow();
            startSlideshow(); // Restart timer
        });
    }

    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopSlideshow();
            startSlideshow(); // Restart timer
        });
    });

    // Pause slideshow on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopSlideshow);
        slideshowContainer.addEventListener('mouseleave', startSlideshow);
    }

    // Start the slideshow
    startSlideshow();

    // Jeep Wrangler Slideshow Functionality
    const jeepSlides = document.querySelectorAll('.jeep-slide');
    const jeepIndicators = document.querySelectorAll('.jeep-indicator');
    const jeepPrevButton = document.querySelector('.jeep-prev-slide');
    const jeepNextButton = document.querySelector('.jeep-next-slide');
    let currentJeepSlide = 0;
    let jeepSlideInterval;

    function showJeepSlide(index) {
        // Remove all classes from slides
        jeepSlides.forEach(slide => {
            slide.classList.remove('active', 'prev');
        });
        jeepIndicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Show current slide
        jeepSlides[index].classList.add('active');
        jeepIndicators[index].classList.add('active');
        
        currentJeepSlide = index;
    }

    function nextJeepSlide() {
        const nextIndex = (currentJeepSlide + 1) % jeepSlides.length;
        showJeepSlide(nextIndex);
    }

    function prevJeepSlide() {
        const prevIndex = (currentJeepSlide - 1 + jeepSlides.length) % jeepSlides.length;
        showJeepSlide(prevIndex);
    }

    function startJeepSlideshow() {
        jeepSlideInterval = setInterval(nextJeepSlide, 4000); // Change slide every 4 seconds
    }

    function stopJeepSlideshow() {
        clearInterval(jeepSlideInterval);
    }

    // Event listeners for Jeep slideshow
    if (jeepNextButton) {
        jeepNextButton.addEventListener('click', () => {
            nextJeepSlide();
            stopJeepSlideshow();
            startJeepSlideshow(); // Restart timer
        });
    }

    if (jeepPrevButton) {
        jeepPrevButton.addEventListener('click', () => {
            prevJeepSlide();
            stopJeepSlideshow();
            startJeepSlideshow(); // Restart timer
        });
    }

    // Jeep indicator click events
    jeepIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showJeepSlide(index);
            stopJeepSlideshow();
            startJeepSlideshow(); // Restart timer
        });
    });

    // Pause Jeep slideshow on hover
    const jeepSlideshowContainer = document.querySelector('.jeep-slideshow-container');
    if (jeepSlideshowContainer) {
        jeepSlideshowContainer.addEventListener('mouseenter', stopJeepSlideshow);
        jeepSlideshowContainer.addEventListener('mouseleave', startJeepSlideshow);
    }

    // Start the Jeep slideshow
    startJeepSlideshow();

    // Vehicle Gallery Thumbnails Logic
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('#thumbnail-container .thumbnail');
    if (mainImage && thumbnails.length) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainImage.src = thumb.src;
                thumbnails.forEach(t => {
                    t.classList.remove('border-white');
                    t.classList.add('border-transparent');
                });
                thumb.classList.remove('border-transparent');
                thumb.classList.add('border-white');
            });
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopSlideshow();
            startSlideshow();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopSlideshow();
            startSlideshow();
        }
    });
}); 