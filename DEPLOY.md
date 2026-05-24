# Portfolio Deployment Guide

## Architecture
- **Frontend (React)** → Vercel (free)
- **Backend (Laravel API)** → Railway (free tier)

---

## Step 1 — Deploy Laravel Backend to Railway

1. Go to [railway.app](https://railway.app) and sign up / log in with GitHub
2. Click **New Project → Deploy from GitHub repo**
3. Push the `backend` folder to a GitHub repo first (or use the whole project)
4. Select the repo → Railway auto-detects PHP/Laravel
5. Add these **Environment Variables** in Railway dashboard:

```
APP_KEY=base64:A66MD0gCveOfP6SLk4/Sydabh2j+/xbtd7g0XqzILTw=
APP_ENV=production
APP_DEBUG=false
DB_CONNECTION=sqlite
PORTFOLIO_NAME=Angelo Soliven
PORTFOLIO_CONTACT_EMAIL=gelo.soliven01@gmail.com
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=gelo.soliven01@gmail.com
MAIL_PASSWORD=ipamaytfwipprnxq
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=gelo.soliven01@gmail.com
```

6. After deploy, Railway gives you a URL like `https://your-app.railway.app`
7. Run migrations via Railway shell: `php artisan migrate --force`

---

## Step 2 — Deploy React Frontend to Vercel

### Option A: Vercel CLI (after installing)
```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```
When prompted:
- Framework: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

### Option B: Vercel Dashboard (easier)
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Set **Root Directory** to `frontend`
4. Framework: **Vite**
5. Add **Environment Variable**:
   - `VITE_API_URL` = `https://your-app.railway.app/api`
6. Click **Deploy**

---

## Step 3 — Connect Frontend to Backend

After both are deployed:
1. Copy your Railway backend URL
2. In Vercel dashboard → Project Settings → Environment Variables
3. Set `VITE_API_URL` = `https://your-railway-url.railway.app/api`
4. Redeploy frontend (Vercel → Deployments → Redeploy)

Also update Railway `FRONTEND_URL` env var to your Vercel URL for CORS.

---

## Local Development (unchanged)
```bash
cd backend && php artisan serve      # http://localhost:8000
cd frontend && npm run dev           # http://localhost:5173
```
