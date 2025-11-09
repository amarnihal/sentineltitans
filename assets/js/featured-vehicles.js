// Featured Vehicles JavaScript for Sentinel Titans
// This file handles the featured vehicles section with tab navigation
// and dynamic vehicle card generation using the unified database

document.addEventListener('DOMContentLoaded', function() {
    console.log('Featured Vehicles section loaded');
    
    // Tab functionality
    const vehicleTabs = document.querySelectorAll('.vehicle-tab');
    const featuredCardContainer = document.querySelector('#featured-vehicles-container');
    
    // Map tab text to database categories
    const tabCategoryMap = {
        'SUVs': 'suv',
        'Sedans': 'sedan',
        'Trucks': 'truck',
        'Limousines': 'limousine',
        'Cash in Transit': 'cash-transit',
        'Special Purpose': 'special-purpose'
    };
    
    // Function to generate vehicle card HTML (same style as vehicles page)
    function generateVehicleCard(vehicle) {
        return `
            <div class="bg-white/5 border border-white/10 rounded-none overflow-hidden hover:border-white/20 transition-all duration-300 group w-full" data-vehicle-id="${vehicle.id}">
                <!-- Vehicle Image -->
                <div class="relative">
                    <img src="${vehicle.images[0]}" 
                         alt="${vehicle.name}" 
                         class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                
                <!-- Vehicle Info -->
                <div class="p-4">
                    <!-- Vehicle Type Badge -->
                    <div class="mb-2">
                        <span class="bg-white/10 backdrop-blur-sm text-white text-xs font-inter px-3 py-1 border border-white/20">
                            ${vehicle.categoryDisplay}
                        </span>
                    </div>
                    
                    <h3 class="font-playfair text-xl text-white mb-3 group-hover:text-white transition-colors">
                        ${vehicle.name}
                    </h3>
                    
                    <!-- Explore Button -->
                    <a href="${vehicle.id}.html" class="block w-full font-playfair font-medium text-white border border-white px-4 py-2 hover:bg-white hover:text-primary-bg transition-all duration-300 group-hover:border-white text-center">
                        Explore
                    </a>
                </div>
            </div>
        `;
    }
    
    // Function to display vehicles for a specific category
    function displayVehiclesForCategory(category) {
        const vehicles = getVehiclesByCategory(category);
        
        if (vehicles.length === 0) {
            // Show no vehicles message
            featuredCardContainer.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <h3 class="font-playfair text-2xl text-white mb-4">No Vehicles Available</h3>
                    <p class="font-inter text-body-text">No vehicles are currently available in this category.</p>
                </div>
            `;
            return;
        }
        
        // Filter to show only featured vehicles first, then others
        const featuredVehicles = vehicles.filter(v => v.featured);
        const otherVehicles = vehicles.filter(v => !v.featured);
        const displayVehicles = [...featuredVehicles, ...otherVehicles];
        
        // Generate and display vehicle cards
        const vehicleCardsHTML = displayVehicles.map(vehicle => generateVehicleCard(vehicle)).join('');
        featuredCardContainer.innerHTML = vehicleCardsHTML;
    }
    
    // Function to handle tab clicks
    function handleTabClick(tab) {
        // Remove active class from all tabs
        vehicleTabs.forEach(t => {
            t.classList.remove('active', 'text-[#B30000]', 'border-[#B30000]');
            t.classList.add('text-body-text', 'border-transparent');
        });
        
        // Add active class to clicked tab
        tab.classList.add('active', 'text-[#B30000]', 'border-[#B30000]');
        tab.classList.remove('text-body-text', 'border-transparent');
        
        // Get category and display vehicles
        const category = tabCategoryMap[tab.textContent.trim()];
        if (category) {
            displayVehiclesForCategory(category);
        }
    }
    
    // Add click event listeners to tabs
    vehicleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            handleTabClick(this);
        });
    });
    
    // Initialize with SUVs tab (first tab) active
    if (vehicleTabs.length > 0) {
        displayVehiclesForCategory('suv');
    }
    
    // Add hover effects for non-active tabs
    vehicleTabs.forEach(tab => {
        if (!tab.classList.contains('active')) {
            tab.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.classList.add('border-white');
                }
            });
            
            tab.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.classList.remove('border-white');
                }
            });
        }
    });
    
    // Note: Explore buttons are now proper links to individual car pages
    // No click handlers needed as they navigate directly
}); 