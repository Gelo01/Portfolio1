# Portfolio (React + Laravel)

## Run locally (localhost)

Open **two terminals**:

### 1. Backend API (Laravel)

```bash
cd backend
php artisan serve
```

API: http://localhost:8000  
Portfolio data: http://localhost:8000/api/portfolio

### 2. Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

App: http://localhost:5173

The React app calls the API at `http://localhost:8000/api` (see `frontend/.env`).

## Download CV

1. Put your PDF at `backend/storage/app/public/cv/resume.pdf`
2. Optional: set `PORTFOLIO_CV_FILENAME=Your_Name_CV.pdf` in `backend/.env`
3. Click **Download CV** on the site, or open http://localhost:8000/api/cv/download

## Test contact form

Submit the form on http://localhost:5173 — messages are saved in `backend/database/database.sqlite`.
