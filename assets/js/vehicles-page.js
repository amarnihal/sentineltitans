// Vehicles Page JavaScript for Sentinel Titans
// This file handles the vehicles page with dynamic vehicle card generation
// and filtering using the unified database

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vehicles page loaded');
    
    const vehiclesGrid = document.getElementById('vehicles-grid');
    const vehicleFilters = document.querySelectorAll('input[name="vehicleType"]');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const allVehiclesFilter = document.querySelector('input[value="all"]');
    const noVehiclesMessage = document.getElementById('no-vehicles-message');
    
    // Function to generate vehicle card HTML (same style as original)
    function generateVehicleCard(vehicle) {
        // Create a filename for the car page based on vehicle ID
        const carPageName = vehicle.id + '.html';
        
        return `
            <div class="bg-white/5 border border-white/10 rounded-none overflow-hidden hover:border-white/20 transition-all duration-300 group" data-vehicle-type="${vehicle.category}">
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
                    <a href="${carPageName}" class="block w-full font-playfair font-medium text-white border border-white px-4 py-2 hover:bg-white hover:text-primary-bg transition-all duration-300 group-hover:border-white text-center">
                        Explore
                    </a>
                </div>
            </div>
        `;
    }
    
    // Function to display all vehicles
    function displayAllVehicles() {
        const allVehicles = getAllVehicles();
        const vehicleCardsHTML = allVehicles.map(vehicle => generateVehicleCard(vehicle)).join('');
        vehiclesGrid.innerHTML = vehicleCardsHTML;
        vehiclesGrid.style.display = 'grid';
        noVehiclesMessage.classList.add('hidden');
    }
    
    // Function to populate the vehicle interest dropdown
    function populateVehicleDropdown() {
        const dropdown = document.getElementById('vehicle-interest-dropdown');
        if (!dropdown) return;
        
        const allVehicles = getAllVehicles();
        
        // Clear existing options except the first one
        while (dropdown.children.length > 1) {
            dropdown.removeChild(dropdown.lastChild);
        }
        
        // Add vehicle options
        allVehicles.forEach(vehicle => {
            const option = document.createElement('option');
            option.value = vehicle.id;
            option.className = 'text-gray-400';
            option.textContent = vehicle.name;
            dropdown.appendChild(option);
        });
        
        // Add "Other" option at the end
        const otherOption = document.createElement('option');
        otherOption.value = 'other';
        otherOption.className = 'text-gray-400';
        otherOption.textContent = 'Other';
        dropdown.appendChild(otherOption);
    }
    
    // Function to get selected vehicle types
    function getSelectedTypes() {
        const selectedTypes = [];
        vehicleFilters.forEach(filter => {
            if (filter.checked) {
                selectedTypes.push(filter.value);
            }
        });
        return selectedTypes;
    }
    
    // Function to handle smart "All Vehicles" logic
    function handleAllVehiclesLogic(changedFilter) {
        if (changedFilter.value === 'all') {
            // If "All Vehicles" is checked, uncheck all other filters
            if (changedFilter.checked) {
                vehicleFilters.forEach(filter => {
                    if (filter.value !== 'all') {
                        filter.checked = false;
                    }
                });
            }
        } else {
            // If a specific filter is checked, uncheck "All Vehicles"
            if (changedFilter.checked) {
                allVehiclesFilter.checked = false;
            }
            
            // If no specific filters are checked, check "All Vehicles"
            const specificFiltersChecked = Array.from(vehicleFilters).some(filter => 
                filter.value !== 'all' && filter.checked
            );
            
            if (!specificFiltersChecked) {
                allVehiclesFilter.checked = true;
            }
        }
    }
    
    // Function to update vehicle display based on selected filters
    function updateVehicleDisplay() {
        const selectedTypes = getSelectedTypes();
        
        if (selectedTypes.length === 0) {
            // Show no vehicles message
            vehiclesGrid.style.display = 'none';
            noVehiclesMessage.classList.remove('hidden');
        } else {
            // Hide no vehicles message and show vehicle grid
            noVehiclesMessage.classList.add('hidden');
            vehiclesGrid.style.display = 'grid';
            
            if (selectedTypes.includes('all')) {
                // Show all vehicles
                displayAllVehicles();
            } else {
                // Filter vehicles based on selection
                const filteredVehicles = getVehiclesByCategories(selectedTypes);
                
                if (filteredVehicles.length === 0) {
                    vehiclesGrid.innerHTML = `
                        <div class="col-span-full text-center py-12">
                            <h3 class="font-playfair text-2xl text-white mb-4">No Vehicles Found</h3>
                            <p class="font-inter text-body-text">No vehicles match the selected filters.</p>
                        </div>
                    `;
                } else {
                    const vehicleCardsHTML = filteredVehicles.map(vehicle => generateVehicleCard(vehicle)).join('');
                    vehiclesGrid.innerHTML = vehicleCardsHTML;
                }
            }
        }
    }
    
    // Add event listeners to checkboxes
    vehicleFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            handleAllVehiclesLogic(this);
            updateVehicleDisplay();
        });
    });
    
    // Clear filters button functionality
    clearFiltersBtn.addEventListener('click', function() {
        // Uncheck all filters
        vehicleFilters.forEach(filter => {
            filter.checked = false;
        });
        // Check "All Vehicles" by default
        allVehiclesFilter.checked = true;
        updateVehicleDisplay();
    });
    
    // Initialize with "All Vehicles" selected by default
    displayAllVehicles();
    
    // Populate the vehicle interest dropdown
    populateVehicleDropdown();
    
    // Note: Explore buttons are now proper links to individual car pages
    // No click handlers needed as they navigate directly
    
    // Check for URL parameters to highlight specific vehicles or set category filters
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleParam = urlParams.get('vehicle');
    const categoryParam = urlParams.get('category');
    
    if (vehicleParam) {
        // Find the vehicle in the database
        const allVehicles = getAllVehicles();
        const targetVehicle = allVehicles.find(v => v.id === vehicleParam);
        
        if (targetVehicle) {
            // Set the appropriate filter
            const filter = document.querySelector(`input[value="${targetVehicle.category}"]`);
            if (filter) {
                // Uncheck "All Vehicles" and check the specific category
                allVehiclesFilter.checked = false;
                filter.checked = true;
                updateVehicleDisplay();
                
                // Scroll to the vehicle
                setTimeout(() => {
                    const vehicleCard = document.querySelector(`[data-vehicle-type="${targetVehicle.category}"]`);
                    if (vehicleCard) {
                        vehicleCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // Add a highlight effect
                        vehicleCard.style.border = '2px solid #B30000';
                        vehicleCard.style.boxShadow = '0 0 20px rgba(179, 0, 0, 0.3)';
                        
                        // Remove highlight after 3 seconds
                        setTimeout(() => {
                            vehicleCard.style.border = '';
                            vehicleCard.style.boxShadow = '';
                        }, 3000);
                    }
                }, 500);
            }
        }
    }
    
    // Handle category parameter for back navigation from car pages
    if (categoryParam) {
        // Find the appropriate filter for this category
        const filter = document.querySelector(`input[value="${categoryParam}"]`);
        if (filter) {
            // Uncheck "All Vehicles" and check the specific category
            allVehiclesFilter.checked = false;
            filter.checked = true;
            updateVehicleDisplay();
            
            // Scroll to the filter section
            setTimeout(() => {
                filter.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    }
}); 