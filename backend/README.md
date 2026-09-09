# Backend (Django + DRF)

This is a minimal Django project exposing REST endpoints for Publications, Decided Cases, Advisory Opinions, Events, and Trainings.

Quick start:

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

API root will be at `http://127.0.0.1:8000/api/` and the frontend (Vite) runs by default at `http://localhost:5173`.

Static files (including the shared `static/css/styles.css`) are configured via `STATICFILES_DIRS` to serve from the repo `static/` folder.
