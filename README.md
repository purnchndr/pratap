# Pratap — Personal Portfolio

Personal portfolio of **Purnachandra Pratap Nishad**, Senior Software Engineer specializing in AI voice agents, chatbot systems, and scalable backend infrastructure.

Live site: [purnchndr.netlify.app](https://purnchndr.netlify.app)

## Tech Stack

- **React 18** + **Vite**
- **React Router v6** — client-side routing
- **CSS Modules** — scoped component styles
- **Inter** + **JetBrains Mono** — fonts via Google Fonts

## Features

- Animated hero with typewriter role switcher
- Count-up stats strip (500K+ users, 10K+ daily AI calls, 200x throughput, 4+ years)
- Scroll-triggered reveal animations via IntersectionObserver
- Dark / light mode with instant profile image swap (`profile.png` / `profile-dark.png`)
- Skills grid, project cards, and experience timeline
- Contact section — email, LinkedIn, GitHub

## Pages & Routes

| Route | Content |
|---|---|
| `/` | Homepage — hero, stats, skills, projects, experience, contact |
| `/aboutme` | About page |
| `/education` | Education timeline |
| `/projects` | Projects detail |
| `/contact` | Contact page |

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/img/          # profile.png, profile-dark.png
├── components/
│   ├── common/          # Icons, Button
│   ├── darkmode/        # DarkMode toggle
│   ├── Header/          # Fixed nav with scroll progress bar
│   ├── Footer/          # Footer with social links
│   ├── Intro/           # Intro card (used on About page)
│   ├── skills/          # Skills component
│   └── projectsAndExperience/
├── pages/
│   ├── HomePage/        # Main single-page portfolio
│   ├── AboutMe/
│   ├── Education/
│   ├── Projects/
│   └── Contact/
└── index.css            # Global CSS variables (light + dark theme)
```

## Contact

- Email: pratap.careers@gmail.com
- LinkedIn: [linkedin.com/in/purnchndr](https://www.linkedin.com/in/purnchndr/)
- GitHub: [github.com/purnchndr](https://www.github.com/purnchndr/)
