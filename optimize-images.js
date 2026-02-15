/**
 * Image Optimization Script
 * Converts large PNG/JPG images to optimized WebP format
 * Run with: node optimize-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToOptimize = [
  // Source images in assets
  { input: 'src/assets/hero-rebellion.png', output: 'public/hero-rebellion.webp', quality: 85 },
  { input: 'src/assets/hero-rebellion2.png', output: 'public/hero-rebellion2.webp', quality: 85 },
  { input: 'src/assets/hero-friends.jpg', output: 'public/hero-friends.webp', quality: 85 },

  // Public folder images - MOBILE OPTIMIZED
  { input: 'public/footer-bg.jpg', output: 'public/footer-bg.webp', quality: 50 }, // Aggressive compression for mobile
  { input: 'public/footer-bg.jpg', output: 'public/footer-bg-mobile.webp', quality: 45, maxWidth: 1200 }, // Mobile version
  { input: 'public/newspaper-bg.png', output: 'public/newspaper-bg.webp', quality: 80 },
  { input: 'public/revolution-hero.png', output: 'public/revolution-hero.webp', quality: 85 },
];

async function optimizeImage(inputPath, outputPath, quality = 80, maxWidth = null) {
  const fullInputPath = path.join(__dirname, inputPath);
  const fullOutputPath = path.join(__dirname, outputPath);

  if (!fs.existsSync(fullInputPath)) {
    console.log(`⚠️  Skipping ${inputPath} - file not found`);
    return;
  }

  const stats = fs.statSync(fullInputPath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`🔄 Optimizing ${inputPath} (${sizeMB}MB)...`);

  try {
    let pipeline = sharp(fullInputPath);

    // Resize if maxWidth specified (for mobile versions)
    if (maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    await pipeline
      .webp({ quality, effort: 6 })
      .toFile(fullOutputPath);

    const newStats = fs.statSync(fullOutputPath);
    const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
    const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);

    console.log(`✅ ${outputPath} created (${newSizeMB}MB) - ${savings}% smaller\n`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  for (const image of imagesToOptimize) {
    await optimizeImage(image.input, image.output, image.quality, image.maxWidth);
  }

  console.log('✨ Image optimization complete!');
  console.log('\n📊 Next steps:');
  console.log('1. Update your components to use .webp extensions');
  console.log('2. Test the page load speed');
  console.log('3. Consider using Cloudinary CDN for even better performance');
}

main().catch(console.error);
