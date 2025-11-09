# Car Pages Template System - Sentinel Titans

This system allows you to create individual car pages quickly using a template approach.

## Files Created

1. **`car-template.html`** - The base template for all car pages
2. **`lexus-lx600.html`** - Example implementation for Lexus LX600
3. **`toyota-tlc78.html`** - Example implementation for Toyota Land Cruiser 78
4. **Updated `vehicles-page.js`** - Enhanced with category filtering and navigation

## How to Create a New Car Page

### Step 1: Copy the Template
```bash
cp car-template.html your-car-name.html
```

### Step 2: Update the Vehicle Data
Replace the `vehicleData` object with your car's information:

```javascript
const vehicleData = {
    id: 'your-car-id',
    name: 'Your Car Name',
    category: 'category-key', // Must match the filter values in vehicles.html
    categoryDisplay: 'Display Name', // What users see
    images: [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        // ... more images
    ],
    video: null, // YouTube video ID if available
    specifications: {
        'YEAR': '2024',
        'MAKE': 'Make',
        'MODEL': 'Model',
        'BODY': 'Body Type',
        'ARMOR LEVEL': 'Armor Level',
        'TRANSMISSION': 'Transmission Type',
        'ENGINE': 'Engine Details',
        'HORSEPOWER': 'HP',
        'DRIVETRAIN': 'Drivetrain Type',
        'DIMENSIONS (MM)': 'L x W x H',
        'WHEELBASE (MM)': 'Wheelbase',
        'SEATING CAPACITY': 'Capacity',
        'FUEL CAPACITY': 'Fuel Capacity',
        'AVAILABILITY': 'Availability Status'
    }
};
```

### Step 3: Update the Page Title
Change the `<title>` tag in the HTML head section.

## Category Values

Use these exact values for the `category` field to ensure proper navigation:

- `suv` - Armored SUV
- `sedan` - Armored Sedan  
- `truck` - Armored Pickup Trucks
- `cash-transit` - Cash in Transit
- `limousine` - Limousines
- `special-purpose` - Special Purpose

## Navigation Features

### Back Navigation Options
1. **"Back to Vehicles"** - Takes you to the main vehicles page
2. **"Back to [Category]"** - Takes you to vehicles page with that category filter pre-selected

### Smart Filtering
When someone clicks "Back to [Category]", they'll be taken to the vehicles page with:
- The appropriate category filter automatically selected
- Only vehicles from that category displayed
- Smooth scrolling to the filter section

## Image Gallery Features

- **Main Image**: Large display image (500px height on desktop)
- **Thumbnail Gallery**: Horizontal scrollable gallery of all images
- **Click to Update**: Click any thumbnail to update the main image
- **Responsive**: Adapts to mobile and desktop layouts

## Specifications Table

The specifications are automatically generated from the `vehicleData.specifications` object. Each key-value pair becomes a row in the table.

## Call-to-Action Buttons

Three buttons are included:
1. **Submit an Inquiry** - Primary white button
2. **Call Now** - Secondary outlined button  
3. **WhatsApp** - Green button for WhatsApp contact

## Responsive Design

- **Desktop**: Two-column layout (2/3 for images, 1/3 for specs)
- **Mobile**: Single-column stacked layout
- **Navigation**: Adapts to screen size

## File Naming Convention

Use the vehicle ID as the filename:
- `lexus-lx600.html`
- `toyota-tlc78.html`
- `mercedes-vclass.html`

## Integration with Main Site

- Uses the same navigation bar as other pages
- Maintains consistent styling and fonts
- Integrates with the existing vehicle database
- Links back to the main vehicles page with smart filtering

## Triggers for Car Pages

### 1. Vehicle Cards in Catalogue
- **Location**: `vehicles.html` page
- **Action**: Click "Explore" button on any vehicle card
- **Result**: Navigates to individual car page
- **Implementation**: Vehicle cards automatically link to `{vehicle-id}.html`

### 2. Mega Menu Navigation
- **Location**: Main navigation bar on `index.html`
- **Action**: Hover over "Vehicles" → Click specific vehicle name
- **Result**: Direct navigation to individual car page
- **Implementation**: Mega menu links updated with actual car page URLs

### 3. Smart Navigation Flow
```
Mega Menu → Car Page → Back to Category (with filter)
Vehicle Card → Car Page → Back to Category (with filter)
```

## Current Car Pages Available

- **`lexus-lx600.html`** - Armored SUV
- **`toyota-tlc78.html`** - Armored Pickup Trucks  
- **`toyota-tlc79.html`** - Armored Pickup Trucks
- **`tlc-79-moneybox.html`** - Cash in Transit (Toyota Land Cruiser 79 Money Box)

## Testing Your Page

1. Open the HTML file in your browser
2. Test the image gallery by clicking thumbnails
3. Verify the back navigation works correctly
4. Check that the specifications display properly
5. Test responsive design on different screen sizes

## Example Usage

See `lexus-lx600.html` and `toyota-tlc78.html` for complete working examples.

## Notes

- All images should be in the `assets/images/All Vehicles/` directory
- Image paths should be relative to the HTML file location
- The system automatically handles image loading and error states
- No additional CSS or JavaScript files needed beyond the existing site assets
