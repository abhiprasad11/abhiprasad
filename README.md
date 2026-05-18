# Abhi's Motion Design Portfolio

This is a premium, single-page portfolio website built for a motion-first graphic designer and video editor. The core concept of the site is to showcase the transformation **"From Static to Motion,"** demonstrating how static designs evolve into dynamic, animated content. The visual style features a dark, premium, glassmorphism aesthetic with cinematic lighting and subtle, elegant animations.

**[▶︎ View Live Demo](https://your-deployment-url.vercel.app/)** <!-- Replace with your actual live URL after deployment -->

---

## Features

-   **Cinematic Preloader:** A custom loading animation featuring smooth staggered fade-ins to set a premium tone before the site loads.
-   **Interactive Ambient Background:** A cursor-reactive, multi-layered color gradient background built to create a living, breathing aesthetic behind the glass panels.
-   **"Static to Motion" Interaction:** A unique hover-to-play effect on portfolio video items. Thumbnails preview the motion, and videos only play seamlessly upon hovering.
-   **Dynamic Masonry Grid:** A visually engaging, perfectly aligned custom masonry layout that natively supports vertical Reels, mixed media types, and subtle glass spacers.
-   **Category Filtering:** Dynamic and animated category transitions using Anime.js for staggering the entry and exit of portfolio items without page reloads.
-   **Single-Page Architecture:** All content is gracefully handled on a single, seamlessly scrolling React page with fixed header navigation.
-   **Fully Responsive:** Specifically tailored to feel native on mobile devices while maintaining the premium dark aesthetic on large desktop frames.

## Tech Stack

This project was rebuilt using a modern, scalable frontend stack:

-   **[React 19](https://react.dev/):** Component-based UI library for creating the interactive layout.
-   **[Vite](https://vitejs.dev/):** A next-generation frontend build tool for extremely fast development and optimized production builds.
-   **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework used for all styling, layout, glassmorphism effects, and responsive design.
-   **[TypeScript](https://www.typescriptlang.org/):** A strongly typed superset of JavaScript for robust component structure and maintainable logic.
-   **[Anime.js](https://animejs.com/):** A lightweight and powerful JavaScript animation library used for complex DOM choreographies, staggered grid reveals, and precise transition timings.
-   **[Framer Motion](https://www.framer.com/motion/):** Leveraged for specific interactive spring animations and layout transitions.

## Project Structure

The codebase is organized to separate UI components from page layouts, making it highly scalable.

```text
abhishek/
├── index.html          # Main application entry point
├── README.md           # You are here!
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration rules
├── public/             # Static assets (images, videos, thumbnails)
└── src/
    ├── index.css       # Global styles, Tailwind directives, and utilities
    ├── main.tsx        # React DOM rendering root
    ├── App.tsx         # Main application shell and routing
    ├── components/     # Reusable UI components (Preloader, ProjectCard, VideoModal, etc.)
    └── pages/          # Full page layouts (Home, Portfolio, About)
```

## Getting Started

To run this project on your local machine, follow these steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio-project.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd portfolio-project
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start a local server, and you can view the website in your browser at `http://localhost:5173` (the port may vary). The server supports hot-reloading.

## Building for Production

When you are ready to deploy the website, create an optimized production build:

```bash
npm run build
```
This will compile all React components, minify assets, and place them in a new `dist` folder ready for deployment.

## Deployment

This Vite/React project builds to static files, making it perfect for hosting on services like Vercel or Netlify.

### Deploying with Vercel

1.  **Install the Vercel CLI:**
    ```bash
    npm install -g vercel
    ```

2.  **Deploy from the project root:**
    ```bash
    vercel --prod
    ```
    Follow the prompts. Ensure the publish directory points to the `./dist` folder.

---
*Created by [Kr Satyam](https://github.com/krsatyam11)*
