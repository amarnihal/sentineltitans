// Unified Vehicle Database for Sentinel Titans
// This database pulls from the "All Vehicles" folders and is used by both
// the featured vehicles section and the full vehicles page

const vehiclesDatabase = {
    // SUV Category
    suv: [
        {
            id: 'lexus-lx600',
            name: 'Armored Lexus LX600',
            category: 'suv',
            categoryDisplay: 'Armored SUV',
            thumbnail: 'assets/images/All Vehicles/suvs/LEXUS 600/LEXUS 600-thumbnail.png',
            images: [
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113047.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_112941.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113014.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113027.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113104.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113138.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113157.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113219.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113246.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113345.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113357.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113448.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113512.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113528.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113537.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113706.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113710.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113718.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113721.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113728.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113731.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113736.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113800.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113807.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113815.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113819.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113823.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113826.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113939.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_113950.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_114013.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_114028.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_114112.jpg',
                'assets/images/All Vehicles/suvs/LEXUS 600/20250222_114117.jpg'
            ],
            featured: true,
            description: 'Luxury armored SUV with advanced protection systems'
        },
		{
			id: 'toyota-land-cruiser-prado',
			name: 'Toyota Land Cruiser Prado',
			category: 'suv',
			categoryDisplay: 'Armored SUV',
			thumbnail: 'assets/images/All Vehicles/suvs/Toyota Land Cruiser Prado/Toyota Land Cruiser Prado White-thumbnail.png',
			images: [],
			featured: false,
			description: 'Armored Toyota Land Cruiser Prado with enhanced protection and comfort'
		}
    ],

    // Cash in Transit Category
    'cash-transit': [
        {
                    id: 'tlc-79-moneybox',
        name: 'Toyota Land Cruiser 79 Money Box',
            category: 'cash-transit',
            categoryDisplay: 'Cash in Transit',
            thumbnail: 'assets/images/All Vehicles/cash in transit/TLC 79 Money Box-White/TLC 79 Money Box-White-thumbnail.png',
            images: [
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151213.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151222.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151236.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151239.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151242.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151245.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151247.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151254.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151309.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151314.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151321.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151324.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151341.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151344.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151351.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151354.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151358.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151401.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151404.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151410.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151417.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250218_151420.mp4',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250219_155804.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250219_155821.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250219_155833.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250219_155945.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250219_155948.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250219_155954.jpg',
                'assets/images/All Vehicles/cash in transit/TLC 79 Money Box  - White/20250219_160010.jpg'
            ],
            featured: true,
            description: 'Secure cash transportation vehicle with advanced security features'
        }
    ],

    // Truck Category (Armored Pickup Trucks)
    truck: [
        {
            id: 'toyota-tlc79',
            name: 'Toyota Land Cruiser 79',
            category: 'truck',
            categoryDisplay: 'Armored Pickup Trucks',
            thumbnail: 'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/Toyota Land Cruiser 79-thumbnail.png',
            images: [
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_103220.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_103253.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_103317.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_103351.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_103418.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_103510.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105537.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105541.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105551.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105556.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105611.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105616.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105625.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105629.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105637.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105644.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105650.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_105705.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_110823.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/20250222_110831.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 79/TLC 79 DOUBLE CABIN.mp4'
            ],
            featured: true,
            description: 'Robust armored pickup truck for heavy-duty security operations'
        },
        {
            id: 'toyota-tlc78',
            name: 'Toyota Land Cruiser 78',
            category: 'truck',
            categoryDisplay: 'Armored Pickup Trucks',
            thumbnail: 'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/Toyota Land Cruiser 78-thumbnail.png',
            images: [
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133002.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133010.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133028.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133110.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133127.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133206.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133217.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133222.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133229.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133232.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133235.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133238.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133241.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133254.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133303.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133309.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133312.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133314.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133317.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133320.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133331.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133334.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_133338.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_154408.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_154417.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_154519.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_154541.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/20250225_154555.jpg',
                'assets/images/All Vehicles/Armored Pickup Trucks/Toyota Land Cruiser 78/TLC 78.mp4'
            ],
            featured: true,
            description: 'Versatile armored pickup truck for various security applications'
        }
    ],

    // Placeholder categories for future vehicles
    sedan: [],
    limousine: [],
    'special-purpose': []
};

// Helper functions
function getAllVehicles() {
    const allVehicles = [];
    Object.values(vehiclesDatabase).forEach(category => {
        allVehicles.push(...category);
    });
    return allVehicles;
}

function getVehiclesByCategory(category) {
    return vehiclesDatabase[category] || [];
}

function getFeaturedVehicles() {
    return getAllVehicles().filter(vehicle => vehicle.featured);
}

function getVehiclesByCategories(categories) {
    if (categories.includes('all')) {
        return getAllVehicles();
    }
    
    const vehicles = [];
    categories.forEach(category => {
        if (vehiclesDatabase[category]) {
            vehicles.push(...vehiclesDatabase[category]);
        }
    });
    return vehicles;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        vehiclesDatabase,
        getAllVehicles,
        getVehiclesByCategory,
        getFeaturedVehicles,
        getVehiclesByCategories
    };
} 