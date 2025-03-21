const fs = require('fs');
const path = require('path');

// Define the image paths to check
const imagePaths = [
  '/assets/images/reviewer1.jpg',
  '/assets/images/reviewer2.jpg',
  '/assets/images/reviewer3.jpg',
  '/assets/images/reviewer4.jpg',
  '/assets/images/reviewer5.jpg',
  '/assets/images/reviewer6.jpg',
];

// Map them to the actual file system paths
const publicPath = path.join(process.cwd(), 'public');
const imageFilePaths = imagePaths.map(p => path.join(publicPath, p));

// Check each image
imageFilePaths.forEach((filePath, index) => {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ Image ${index + 1} exists: ${filePath} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.error(`❌ Image ${index + 1} MISSING: ${filePath}`);
    
    // Suggest possible alternatives
    const dir = path.dirname(filePath);
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      const similarFiles = files.filter(f => f.includes(`reviewer${index + 1}`));
      if (similarFiles.length > 0) {
        console.log(`   Did you mean one of these? ${similarFiles.join(', ')}`);
      }
    }
  }
}); 