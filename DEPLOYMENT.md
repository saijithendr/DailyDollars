# Static Deployment Guide

Your **What-If Financial Modeler** is now configured as a pure static application - no backend server needed!

## 🚀 How to Deploy as Static Site

### Option 1: Using Replit Static Deployment

1. **Go to the Deployments tab** in your Replit project
2. **Select "Static" deployment** type
3. **Configure the deployment**:
   - **Build command**: `./build-static.sh`
   - **Public directory**: `dist`
4. **Click Deploy**

Your app will be live at your Replit deployment URL!

### Option 2: Deploy to Other Platforms

The built static files are in the `dist/` folder after running `./build-static.sh`. You can deploy these to:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Point to `dist` as output directory
- **GitHub Pages**: Push `dist` folder contents
- **Any static host**: Upload the `dist` folder contents

## 📦 Build Process

The `build-static.sh` script:
1. Runs `npm run build` to build the React app
2. Copies static files from `dist/public/` to `dist/` root
3. Creates a deployable static site

## 🔧 Development

To run the app locally in development mode:

```bash
npm run dev
```

This starts Vite dev server with hot reload at http://localhost:5000

## ✅ What's Included

Your static build includes:
- ✅ Fully client-side React application
- ✅ All calculations done in the browser
- ✅ No backend server required
- ✅ SEO-friendly meta tags
- ✅ Responsive design
- ✅ Production-optimized assets

## 💡 Why Static?

This app is perfect for static deployment because:
- All financial calculations happen client-side
- No user data storage needed
- No API calls to external services
- Fast, secure, and scales infinitely
- Zero backend costs!
