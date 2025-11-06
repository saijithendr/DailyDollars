#!/bin/bash
# Build script for static deployment

echo "Building application..."
npm run build

echo "Preparing static files..."
# Copy contents of dist/public to dist root for static deployment
cp -r dist/public/* dist/

echo "Static build complete! Files are in dist/"
ls -la dist/
