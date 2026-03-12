# Pinnamaneni Portfolio Website (React)

A React + Vite portfolio site ready to deploy on Vercel.

## 1) Run locally

```bash
cd portfolio-website
npm install
npm run dev
```

Open `http://localhost:5173`.

## 2) Update profile content

Edit:

- `src/data/profile.ts` for headline, intro, experience, featured work, and contact links.
- `index.html` for meta description and title.

## 3) Deploy to Vercel

### Option A: Vercel dashboard

1. Push this project to GitHub.
2. In Vercel, click **Add New Project**.
3. Import the repo.
4. Set **Root Directory** to `portfolio-website`.
5. Framework preset: **Vite**.
6. Click **Deploy**.

### Option B: Vercel CLI

```bash
npm i -g vercel
cd portfolio-website
vercel
```

For production:

```bash
vercel --prod
```

## Notes

- `mailto:you@example.com` is a placeholder in `src/data/profile.ts`.
- This is a single-page React portfolio with responsive layout and CSS animations.
