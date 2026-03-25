============================================================
  Omoruyi Oredia – Portfolio Website
  React (Frontend) + Node.js / Express (Backend)
============================================================

QUICK START (3 steps):
-----------------------
  1. npm run install:all    <- installs all dependencies
  2. npm run build          <- builds the React app (skip if dist/ is included)
  3. npm start              <- starts the server at http://localhost:3001

Open your browser and go to:  http://localhost:3001


FOLDER STRUCTURE:
-----------------
  frontend/       React + Vite source code
    src/            components, pages, styles
    public/         static assets (photos, resume, cover letter)
    dist/           pre-built website (ready to serve)

  backend/        Node.js + Express server
    server.js       serves the built frontend + handles /api/contact

  package.json    root scripts (npm start, npm run build, etc.)


SCRIPTS:
--------
  npm run install:all   Install frontend + backend dependencies
  npm run build         Rebuild the React frontend
  npm start             Start the Express server (production)


CONTACT FORM API:
-----------------
  POST /api/contact
  Body: { name, email, subject, message }
  When submitted, the message is logged to the server console.


TECHNOLOGIES USED:
------------------
  Frontend:   React 18, TypeScript, Vite, TailwindCSS, Framer Motion
  Backend:    Node.js, Express, CORS
  Icons:      Lucide React, React Icons

============================================================
