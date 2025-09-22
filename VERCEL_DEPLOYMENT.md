# Vercel Deployment Guide for Rocket Crash Game

This guide will help you deploy the Rocket Crash Game project to Vercel.

## Project Structure

The project consists of two main parts:
- **Frontend**: React/Vite application (`crash-game-frontend/`)  
- **Backend**: Node.js/Express API with Socket.IO (`crash-game-bakcend/`)

## Prerequisites

1. [Vercel Account](https://vercel.com)
2. [MongoDB Atlas](https://www.mongodb.com/atlas) (for production database)
3. Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Frontend Deployment

#### Step 1: Prepare the Frontend
The frontend is already configured for Vercel deployment with:
- `vercel.json` configuration file
- Proper build commands in `package.json`
- Environment variable support

#### Step 2: Deploy Frontend to Vercel
1. Push your code to a Git repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Set the root directory to `crash-game-frontend`
6. Configure environment variables:
   - `BACK_URL`: Your backend URL (will be set after backend deployment)

### 2. Backend Deployment

#### Step 1: Prepare Backend for Vercel
The backend needs to be adapted for Vercel's serverless environment.

#### Step 2: Create API Routes
Create the following file structure in your backend:

```
crash-game-bakcend/
├── api/
│   └── index.js          # Main serverless function
├── vercel.json           # Vercel configuration
└── package.json
```

#### Step 3: Backend Environment Variables
Set these environment variables in Vercel:
- `MONGO_URI`: Your MongoDB connection string
- `NODE_ENV`: production
- `PORT`: 4000 (optional)

#### Step 4: Deploy Backend
1. Create a separate Vercel project for the backend
2. Set root directory to `crash-game-bakcend`
3. Deploy the backend first

### 3. Update Frontend Environment

After backend deployment:
1. Copy the backend URL from Vercel
2. Update the frontend's `BACK_URL` environment variable
3. Redeploy the frontend

## Environment Variables

### Frontend Environment Variables
- `BACK_URL`: Backend API URL (e.g., `https://your-backend.vercel.app`)

### Backend Environment Variables
- `MONGO_URI`: MongoDB connection string
- `NODE_ENV`: production

## Important: Socket.IO Limitations on Vercel

⚠️ **Critical Note**: This project uses Socket.IO extensively for real-time gaming features (crash game, coinflip, mine game, live chat). Vercel's serverless functions **do not support persistent WebSocket connections** required by Socket.IO.

### Recommended Deployment Strategy

1. **Frontend**: Deploy on Vercel (works perfectly)
2. **Backend**: Deploy on a platform that supports persistent connections:
   - **Railway** (recommended - easy deployment, good pricing)
   - **Render** (free tier available)
   - **Heroku** (paid plans only)
   - **DigitalOcean App Platform**

### Alternative: Vercel Frontend + Railway Backend

1. Deploy frontend to Vercel
2. Deploy backend to Railway:
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   railway init
   railway up
   ```
3. Set `BACK_URL` in Vercel frontend environment to Railway backend URL

## Notes

1. **Database**: Use MongoDB Atlas or another cloud database provider

2. **CORS**: Make sure CORS is properly configured for your frontend domain

3. **Real-time Features**: The games rely heavily on Socket.IO for:
   - Live crash game multipliers
   - Real-time betting
   - Live chat
   - Coinflip results
   - Mine game interactions

## Alternative Hosting Options

If you encounter issues with Socket.IO on Vercel, consider these alternatives for the backend:
- [Railway](https://railway.app)
- [Render](https://render.com)
- [Heroku](https://heroku.com)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

These platforms support full Node.js applications with WebSocket connections.

## Local Development vs Production

- **Local**: Uses `http://localhost:4000` as backend URL
- **Production**: Uses the `BACK_URL` environment variable

## Troubleshooting

1. **Build Errors**: Check TypeScript errors and fix before deployment
2. **Environment Variables**: Ensure all required variables are set
3. **CORS Issues**: Update CORS configuration in backend for your frontend domain
4. **Socket.IO Issues**: Consider alternative hosting for backend if WebSockets don't work properly
