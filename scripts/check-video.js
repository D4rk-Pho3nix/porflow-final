const fs = require('fs');
const path = require('path');

// Define paths
const publicDir = path.join(process.cwd(), 'public');
const videoDir = path.join(publicDir, 'assets', 'videos');
const videoPath = path.join(videoDir, 'sample.mp4');

// Check if directories exist, create if they don't
if (!fs.existsSync(videoDir)) {
  console.log('Creating video directory...');
  fs.mkdirSync(videoDir, { recursive: true });
}

// Check if video exists
if (!fs.existsSync(videoPath)) {
  console.error('Video not found at:', videoPath);
  
  // Suggest full system path location
  console.log('\nTo fix, copy your video to this location:');
  console.log(videoPath);
  console.log('\nOr run this command (replace with your actual video path):');
  console.log(`cp /path/to/your/video.mp4 ${videoPath}`);
  
  // Create a placeholder video or image
  console.log('\nCreating a placeholder for now...');
  
  // Create placeholder directory if needed
  const placeholderDir = path.join(publicDir, 'assets', 'placeholders');
  if (!fs.existsSync(placeholderDir)) {
    fs.mkdirSync(placeholderDir, { recursive: true });
  }
  
  // Write a simple text file explaining the missing video
  fs.writeFileSync(
    path.join(placeholderDir, 'video-placeholder.txt'),
    'Video placeholder - replace with actual video file'
  );
} else {
  console.log('Video file exists at:', videoPath);
  console.log('Size:', (fs.statSync(videoPath).size / 1024 / 1024).toFixed(2), 'MB');
} 