const fs = require('fs');
const path = require('path');

// Files and folders to exclude from build
const excludeFiles = [
    'node_modules',
    '.git',
    'dist',
    'build.js',
    'package.json',
    'package-lock.json',
    'CAR-PAGES-README.md',
    'DEPLOYMENT-CHECKLIST.md',
    'QUICK-DEPLOY-GUIDE.md',
    'car-template.html',
    '._index.html',
    '.DS_Store'
];

// Function to check if file should be excluded
function shouldExclude(filePath) {
    const fileName = path.basename(filePath);
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Check if file is in exclude list
    if (excludeFiles.includes(fileName)) {
        return true;
    }
    
    // Check if file starts with ._ (macOS system files)
    if (fileName.startsWith('._')) {
        return true;
    }
    
    // Check if file is .DS_Store
    if (fileName === '.DS_Store') {
        return true;
    }
    
    return false;
}

// Function to copy directory recursively
function copyDirectory(src, dest) {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        // Skip excluded files
        if (shouldExclude(srcPath)) {
            console.log(`Skipping: ${srcPath}`);
            continue;
        }
        
        if (entry.isDirectory()) {
            // Recursively copy subdirectories
            copyDirectory(srcPath, destPath);
        } else {
            // Copy file
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied: ${srcPath} -> ${destPath}`);
        }
    }
}

// Main build function
function build() {
    console.log('🚀 Starting build process...\n');
    
    const distDir = path.join(process.cwd(), 'dist');
    
    // Clean dist directory if it exists
    if (fs.existsSync(distDir)) {
        console.log('Cleaning dist directory...');
        fs.rmSync(distDir, { recursive: true, force: true });
    }
    
    // Create dist directory
    fs.mkdirSync(distDir, { recursive: true });
    console.log('Created dist directory\n');
    
    // Copy all files and folders
    const rootDir = process.cwd();
    const entries = fs.readdirSync(rootDir, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(rootDir, entry.name);
        const destPath = path.join(distDir, entry.name);
        
        // Skip excluded files and dist directory itself
        if (shouldExclude(srcPath) || entry.name === 'dist') {
            continue;
        }
        
        if (entry.isDirectory()) {
            console.log(`Copying directory: ${entry.name}`);
            copyDirectory(srcPath, destPath);
        } else {
            console.log(`Copying file: ${entry.name}`);
            fs.copyFileSync(srcPath, destPath);
        }
    }
    
    console.log('\n✅ Build complete! Files copied to dist/');
    console.log(`📦 Total size: ${getDirectorySize(distDir)}`);
}

// Function to calculate directory size
function getDirectorySize(dirPath) {
    let totalSize = 0;
    
    function calculateSize(currentPath) {
        const stats = fs.statSync(currentPath);
        
        if (stats.isDirectory()) {
            const entries = fs.readdirSync(currentPath);
            entries.forEach(entry => {
                calculateSize(path.join(currentPath, entry));
            });
        } else {
            totalSize += stats.size;
        }
    }
    
    calculateSize(dirPath);
    
    // Convert to human readable format
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = totalSize;
    let unitIndex = 0;
    
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }
    
    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

// Run build
build();

