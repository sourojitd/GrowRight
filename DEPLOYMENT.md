# GrowRight — Deployment Guide

## Hybrid Setup: Hostinger (Frontend) + Railway (Backend)

```
┌─────────────────────────┐       ┌───────────────────────────────┐
│  Hostinger Shared Host  │       │  Railway (Free Tier)          │
│                         │       │                               │
│  yourdomain.com         │  API  │  growright-api.up.railway.app │
│  ┌───────────────────┐  │ ───── │  ┌─────────┐                 │
│  │  Static React SPA │  │ calls │  │ Node.js │                 │
│  │  (HTML/CSS/JS)    │──┼───────┼─▶│ Express │                 │
│  └───────────────────┘  │       │  └────┬────┘                 │
│                         │       │       │                       │
│  Uploaded via FTP /     │       │  ┌────┴────┐  ┌───────────┐  │
│  File Manager           │       │  │Postgres │  │   Redis   │  │
│                         │       │  │  (free) │  │  (free)   │  │
└─────────────────────────┘       │  └─────────┘  └───────────┘  │
                                  └───────────────────────────────┘
```

**Cost: $0/month** (Railway free tier = $5 credit/month, more than enough)

---

## Part A — Deploy Backend on Railway

### Step 1 — Create a Railway Account

1. Go to [railway.app](https://railway.app) and sign up with GitHub
2. You get **$5 free credit per month** (no credit card required)

### Step 2 — Push Code to GitHub

If your project isn't on GitHub yet:

```bash
cd c:\Users\souro\Documents\Projects\GrowRight

# Initialize git if needed
git init
git add -A
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/GrowRight.git
git branch -M main
git push -u origin main
```

### Step 3 — Create PostgreSQL on Railway

1. Go to [railway.app/dashboard](https://railway.app/dashboard)
2. Click **"New Project"** → **"Provision PostgreSQL"**
3. Once created, click on the PostgreSQL service → **"Variables"** tab
4. Copy the `DATABASE_URL` — it looks like:
   ```
   postgresql://postgres:XXXXX@roundhouse.proxy.rlwy.net:12345/railway
   ```
5. **Save this URL** — you'll need it in Step 5

### Step 4 — Create Redis on Railway

1. In the same project, click **"+ New"** → **"Database"** → **"Add Redis"**
2. Click on the Redis service → **"Variables"** tab
3. Copy the `REDIS_URL` — it looks like:
   ```
   redis://default:XXXXX@roundhouse.proxy.rlwy.net:54321
   ```
4. **Save this URL**

### Step 5 — Deploy the Server on Railway

1. In the same project, click **"+ New"** → **"GitHub Repo"**
2. Select your `GrowRight` repository
3. Railway will detect the repo — now configure it:

**Settings tab:**
- **Root Directory**: `server`
- **Build Command**: `npm ci && npx prisma generate && npm run build`
- **Start Command**: `npx prisma migrate deploy && node dist/server.js`

**Variables tab — Add ALL of these:**

| Variable | Value |
|---|---|
| `NODE_ENV` | `production` |
| `PORT` | `4000` |
| `CLIENT_URL` | `https://yourdomain.com` (your Hostinger domain) |
| `API_VERSION` | `v1` |
| `DATABASE_URL` | (paste from Step 3) |
| `REDIS_URL` | (paste from Step 4) |
| `JWT_ACCESS_SECRET` | (generate: run `openssl rand -hex 32` locally) |
| `JWT_REFRESH_SECRET` | (generate: run another `openssl rand -hex 32`) |
| `JWT_ACCESS_EXPIRES_IN` | `15m` |
| `JWT_REFRESH_EXPIRES_IN` | `7d` |
| `BCRYPT_ROUNDS` | `12` |
| `RATE_LIMIT_WINDOW_MS` | `900000` |
| `RATE_LIMIT_MAX_REQUESTS` | `100` |
| `LOG_LEVEL` | `info` |
| `LOG_FORMAT` | `json` |
| `AI_PROVIDER` | `none` |
| `ENABLE_AI_ROADMAP` | `false` |
| `ENABLE_SUBSCRIPTION_BILLING` | `false` |

To generate JWT secrets on Windows (PowerShell):
```powershell
# Option 1: Using node
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: Using openssl (if installed)
openssl rand -hex 32
```

4. Click **"Deploy"** — Railway will build and start your server
5. Once deployed, go to **Settings** → **Networking** → **"Generate Domain"**
6. You'll get a URL like: `growright-api-production.up.railway.app`

### Step 6 — Seed the Database

In Railway, go to your server service → **"Settings"** tab → **"Run one-off command"**:

```
npx prisma db seed
```

Or use the Railway CLI:
```bash
npm install -g @railway/cli
railway login
railway link  # select your project
railway run npx prisma db seed
```

### Step 7 — Verify the Backend

Open your browser and go to:
```
https://growright-api-production.up.railway.app/health
```

You should see:
```json
{
  "status": "ok",
  "timestamp": "2026-02-26T...",
  "version": "0.1.0",
  "environment": "production"
}
```

---

## Part B — Deploy Frontend on Hostinger

### Step 8 — Build the Frontend Locally

Open your terminal:

```bash
cd c:\Users\souro\Documents\Projects\GrowRight\client

# Set the API URL to your Railway backend and build
# Replace the URL with YOUR Railway server URL from Step 5
$env:VITE_API_URL="https://growright-api-production.up.railway.app/api/v1"
npm run build
```

This creates a `dist/` folder with static files:
```
dist/
├── index.html
├── assets/
│   ├── index-XXXXX.css
│   ├── index-XXXXX.js
│   ├── vendor-XXXXX.js
│   ├── motion-XXXXX.js
│   └── charts-XXXXX.js
```

### Step 9 — Upload to Hostinger

**Option A — Using Hostinger File Manager (easiest):**

1. Log in to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Go to **Files** → **File Manager**
3. Navigate to `public_html/`
4. **Delete** everything inside `public_html/` (the default Hostinger placeholder files)
5. Click **Upload** → select ALL files from your local `client/dist/` folder
6. Make sure `index.html` is directly inside `public_html/` (not in a subfolder)

Your file structure should be:
```
public_html/
├── index.html
├── assets/
│   ├── index-XXXXX.css
│   ├── index-XXXXX.js
│   ├── vendor-XXXXX.js
│   ├── motion-XXXXX.js
│   └── charts-XXXXX.js
```

**Option B — Using FTP (FileZilla):**

1. In Hostinger hPanel → **Files** → **FTP Accounts**
2. Note the FTP hostname, username, and password
3. Open FileZilla, connect with those credentials
4. Navigate to `public_html/` on the remote side
5. Upload everything from `client/dist/` into `public_html/`

### Step 10 — Configure .htaccess for SPA Routing

React Router uses client-side routing, so all routes need to return `index.html`.
Hostinger uses Apache, so create a `.htaccess` file.

1. In File Manager, inside `public_html/`, create a new file called `.htaccess`
2. Paste this content:

```apache
RewriteEngine On
RewriteBase /

# If the requested file or directory exists, serve it directly
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Otherwise, redirect everything to index.html (SPA fallback)
RewriteRule ^ index.html [QSA,L]

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css
  AddOutputFilterByType DEFLATE application/javascript application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Cache static assets for 1 year
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Step 11 — Enable SSL on Hostinger

1. In hPanel → **Security** → **SSL**
2. Enable **Free SSL** (Hostinger provides it automatically for your domain)
3. Wait a few minutes for it to activate
4. Make sure **Force HTTPS** is turned on

---

## Step 12 — Update Railway CORS

Now that your frontend is live, update the `CLIENT_URL` in Railway:

1. Go to Railway dashboard → your server service → **Variables**
2. Set `CLIENT_URL` to your **exact** Hostinger domain:
   ```
   https://yourdomain.com
   ```
   (no trailing slash!)
3. Railway will auto-redeploy

---

## Step 13 — Verify Everything

1. Open `https://yourdomain.com` — you should see the login page
2. Log in with: `parent@demo.com` / `Parent@123456`
3. Check that the dashboard loads with data
4. Navigate between pages — verify smooth animations

**If login fails or you get network errors:**
- Open browser DevTools (F12) → Network tab
- Check that API calls go to your Railway URL
- Check the Console for CORS errors (means `CLIENT_URL` is wrong in Railway)

---

## Updating the App

### Frontend (after code changes):

```bash
# Rebuild locally
cd c:\Users\souro\Documents\Projects\GrowRight\client
$env:VITE_API_URL="https://growright-api-production.up.railway.app/api/v1"
npm run build

# Re-upload dist/ to Hostinger via File Manager or FTP
```

### Backend (after code changes):

```bash
# Just push to GitHub — Railway auto-deploys
cd c:\Users\souro\Documents\Projects\GrowRight
git add -A
git commit -m "Update backend"
git push origin main
```

Railway watches your GitHub repo and **automatically redeploys** on push.

### Database schema changes:

Railway auto-runs `npx prisma migrate deploy` on each deploy (it's in the start command).

---

## Cost Summary

| Service | Plan | Cost |
|---|---|---|
| Hostinger | Shared hosting (you already have this) | ~$3/month |
| Railway | Free tier ($5 credit/month) | **$0** |
| PostgreSQL | Railway addon (included in free tier) | **$0** |
| Redis | Railway addon (included in free tier) | **$0** |
| SSL | Free on both Hostinger and Railway | **$0** |
| **Total** | | **~$3/month** (just Hostinger) |

Railway free tier limits: ~500 hours of uptime/month + $5 compute. This is plenty for a personal/small app. If you exceed it, Railway charges ~$5-10/month (pay-as-you-go).

---

## Troubleshooting

| Problem | Fix |
|---|---|
| **Blank page on Hostinger** | Check that `index.html` is in `public_html/` root, not a subfolder |
| **404 on page refresh** | `.htaccess` file is missing or not working. Check it's in `public_html/` |
| **API calls fail / CORS error** | Check `CLIENT_URL` in Railway matches your exact domain (including https://) |
| **Login works but data doesn't load** | Check `VITE_API_URL` was set correctly during build |
| **Railway deploy fails** | Check Railway logs. Common: missing env variables or build errors |
| **Database connection error** | Check `DATABASE_URL` in Railway variables matches the Postgres service |
| **"502 Bad Gateway" from Railway** | Server crashed — check Railway logs for the error |
| **Slow API responses** | Normal on free tier (cold starts). Upgrades to $5/mo removes this |

## Useful Railway CLI Commands

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# View logs
railway logs

# Run one-off commands (e.g., seed)
railway run npx prisma db seed

# Open Railway dashboard
railway open
```
