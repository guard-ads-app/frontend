# ADS APP Frontend

This is the **frontend** for **ADS APP**, a platform to publish and search ads with **semantic search** powered by [Qdrant](https://qdrant.tech/).  
It is built with **React + TypeScript (TSX)** and [Vite](https://vitejs.dev/), which provides fast development builds.  
TypeScript helps catch errors at development time, making the codebase safer and easier to maintain.

---

## Features

- **Ad Listing** — View the latest ads fetched from the backend.
- **Semantic Search** — Filter ads by meaning, not just keywords, thanks to Qdrant vector search.
- **Ad Publishing** — Post a new ad by entering:
  - Title
  - Description
  - Image URL  
  The backend automatically classifies the ad into a category using an n8n-powered classification API.
- **TypeScript Support** — Ensures type safety and reduces runtime errors during development.

---

## Prerequisites

- Node.js v18 or later
- Backend service of ADS APP running

## Installation & Run

```bash
npm install
npm run dev
```
The app will start on http://localhost:5173 (default Vite port).

---
## Project Structure
```
src/
  components/
    AdList.tsx       # Lists ads
    PublishForm.tsx  # Form for add ads
    SearchBar.tsx    # Search input component
  pages/
    SearchPage.tsx   # Home page with search functionality
    PublishPage.tsx  # Page for creating new ads
  App.tsx            # Main app router
  main.tsx           # React entry point
```
---
## How It Works
### Search Flow
1. On initial load, the app requests the **latest 10 ads** from the backend
2. When the user enters text into the search bar:
    - A request is sent to the backend’s /ads/search endpoint.
    - The backend converts the search text into a vector via an embeddings API.
    - The backend queries Qdrant for semantically similar ads and returns the results.
### Publish Flow
1. User fills in **title**, **description**, and **image URL** in the Publish form.
2. The request is sent to the backend’s ```/ads``` endpoint.
3. Backend:
    - Moderates and classifies the ad (via **n8n** API).
    - Generates an embedding vector for semantic search.
    - Stores the ad in PostgreSQL and Qdrant.
4. On success, the ad appears in the listings.
---
### Example Pages
- **Search Page**
    - Displays results in a simple card list format.
    - Shows "No ads found" when no matches exist.

- **Publish Page**
    - Simple form to post new ads.
    - Backend determines the category automatically.
---
### Notes
- This frontend does not display Qdrant scores or similarity metrics — only the title, description, and category.
- The category is determined entirely by the backend using AI classification.