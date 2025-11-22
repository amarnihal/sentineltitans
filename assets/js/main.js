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

    // --- Mega Menu Interactions ---
    // Use JS to keep the mega menu open while hovering anywhere over the
    // Vehicles trigger OR the mega menu panel, using a single wrapper.
    (function setupMegaMenuInteractions() {
        // Wrapper that contains the Vehicles link + the mega menu panel
        const vehiclesGroup = document.querySelector('nav .group > a[href="vehicles.html"]')
            ? document.querySelector('nav .group > a[href="vehicles.html"]').parentElement
            : null;

        if (!vehiclesGroup) return;

        const megaMenu = vehiclesGroup.querySelector('.mega-menu');
        const triggerLink = vehiclesGroup.querySelector('a[href="vehicles.html"]');
        let closeTimer = null;

        function openMenu() {
            vehiclesGroup.classList.add('menu-open');
            if (megaMenu) megaMenu.setAttribute('aria-hidden', 'false');
            if (triggerLink) triggerLink.setAttribute('aria-expanded', 'true');
        }

        function closeMenu() {
            vehiclesGroup.classList.remove('menu-open');
            if (megaMenu) megaMenu.setAttribute('aria-hidden', 'true');
            if (triggerLink) triggerLink.setAttribute('aria-expanded', 'false');
        }

        vehiclesGroup.addEventListener('mouseenter', () => {
            if (closeTimer) {
                clearTimeout(closeTimer);
                closeTimer = null;
            }
            openMenu();
        });

        vehiclesGroup.addEventListener('mouseleave', () => {
            // Small delay so quick movements between trigger and panel don't close it
            closeTimer = setTimeout(() => {
                closeMenu();
                closeTimer = null;
            }, 150);
        });

        if (triggerLink) {
            // Click to toggle on desktop (and for accessibility)
            triggerLink.setAttribute('aria-haspopup', 'true');
            triggerLink.setAttribute('aria-expanded', 'false');

            triggerLink.addEventListener('click', (e) => {
                // Prevent navigation when we're just toggling the menu
                e.preventDefault();
                if (vehiclesGroup.classList.contains('menu-open')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });
        }

        // Close when clicking outside or pressing Escape
        document.addEventListener('click', (e) => {
            if (!vehiclesGroup.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
    })();

    // --- Mega Menu: Tabbed Category Content ---
    (function setupMegaMenuTabs() {
        const menu = document.querySelector('.mega-menu');
        if (!menu) return;
        const tabs = menu.querySelectorAll('#mega-menu-tabs .vehicle-tab');
        const content = menu.querySelector('#mega-menu-content');
        if (!tabs.length || !content) return;

        // Map for safety with database keys
        const validCategories = new Set(['suv', 'sedan', 'truck', 'limousine', 'cash-transit', 'special-purpose']);

        function generateCard(vehicle) {
            const img = vehicle.thumbnail || ((vehicle.images && vehicle.images.length) ? vehicle.images[0] : 'assets/images/featured-cars/suvs/mercedes/mercedes-g63.png');
            const href = `${vehicle.id}.html`;
            return `
                <div class="group flex flex-col items-center text-center">
                    <div class="mega-img-box">
                        <img src="${img}" alt="${vehicle.name}" class="block max-h-full w-auto">
                    </div>
                    <h4 class="font-playfair text-base text-white mt-2">${vehicle.name}</h4>
                    <a href="${href}" class="explore-btn inline-block font-playfair font-medium text-white border border-white px-4 py-2 hover:bg-white hover:text-primary-bg transition-all duration-300 mt-4 mx-auto">Explore</a>
                </div>
            `;
        }

        function emptyState(label) {
            return `
                <div class="col-span-full text-center py-8">
                    <h3 class="font-playfair text-xl text-white mb-2">${label}</h3>
                    <p class="font-inter text-body-text text-sm">No vehicles are available in this category yet.</p>
                </div>
            `;
        }

        function displayCategory(category) {
            try {
                if (!validCategories.has(category)) {
                    content.innerHTML = emptyState('Coming Soon');
                    return;
                }
                let vehicles = [];
                // Prefer helper if available, else read database directly
                if (typeof getVehiclesByCategory === 'function') {
                    vehicles = getVehiclesByCategory(category) || [];
                } else if (typeof vehiclesDatabase !== 'undefined') {
                    vehicles = vehiclesDatabase[category] || [];
                }
                if (!vehicles.length) {
                    content.innerHTML = emptyState('No Vehicles Found');
                    return;
                }
                // Show featured first if present
                const featured = vehicles.filter(v => v.featured);
                const others = vehicles.filter(v => !v.featured);
                const ordered = [...featured, ...others].slice(0, 6); // show up to 6
                content.innerHTML = ordered.map(generateCard).join('');

                // Images auto-fit inside fixed-height boxes; no extra JS needed
            } catch (e) {
                console.error('Mega menu populate error:', e);
                content.innerHTML = emptyState('Error loading vehicles');
            }
        }

        function setActiveTab(activeTab) {
            tabs.forEach(t => {
                t.classList.remove('active', 'text-[#B30000]', 'border-[#B30000]');
                t.classList.add('text-body-text', 'border-transparent');
            });
            activeTab.classList.add('active', 'text-[#B30000]', 'border-[#B30000]');
            activeTab.classList.remove('text-body-text', 'border-transparent');
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.getAttribute('data-category');
                setActiveTab(tab);
                displayCategory(category);
            });
            tab.addEventListener('mouseenter', () => {
                if (window.matchMedia('(hover: hover)').matches) {
                    const category = tab.getAttribute('data-category');
                    setActiveTab(tab);
                    displayCategory(category);
                }
            });
        });

        // Initialize default tab (SUVs)
        const defaultTab = menu.querySelector('#mega-menu-tabs .vehicle-tab[data-category="suv"]') || tabs[0];
        if (defaultTab) {
            setActiveTab(defaultTab);
            displayCategory(defaultTab.getAttribute('data-category'));
        }
    })();

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