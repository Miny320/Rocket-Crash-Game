#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Rocket Crash Game Deployment Helper\n');

// Check if we're in the right directory
if (!fs.existsSync('crash-game-frontend') || !fs.existsSync('crash-game-bakcend')) {
  console.error('❌ Please run this script from the project root directory');
  process.exit(1);
}

console.log('📋 Pre-deployment checklist:');
console.log('   1. ✅ Frontend configured for Vercel');
console.log('   2. ✅ Backend configured for Railway/Render');
console.log('   3. ⏳ Environment variables setup needed\n');

console.log('🔧 Required Environment Variables:');
console.log('\nFrontend (Vercel):');
console.log('   BACK_URL - Your backend URL (set after backend deployment)');

console.log('\nBackend (Railway/Render):');
console.log('   MONGO_URI - Your MongoDB Atlas connection string');
console.log('   NODE_ENV - production');

console.log('\n📚 Next Steps:');
console.log('1. Deploy backend first using Railway or Render');
console.log('2. Copy the backend URL');
console.log('3. Deploy frontend to Vercel with BACK_URL environment variable');
console.log('4. Update CORS settings in backend if needed');

console.log('\n🌐 Deployment Commands:');
console.log('\nFor Railway backend:');
console.log('   cd crash-game-bakcend');
console.log('   railway login');
console.log('   railway init');
console.log('   railway up');

console.log('\nFor Vercel frontend:');
console.log('   cd crash-game-frontend');
console.log('   vercel --prod');

console.log('\n📖 For detailed instructions, see VERCEL_DEPLOYMENT.md');

// Check if TypeScript compiles for frontend
console.log('\n🔍 Checking frontend build...');
try {
  process.chdir('crash-game-frontend');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Frontend builds successfully!');
} catch (error) {
  console.log('⚠️  Frontend build issues detected. Fix before deployment.');
}

console.log('\n✨ Deployment helper complete!');
