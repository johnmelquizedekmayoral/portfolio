# Portfolio Development Log

## September 15, 2026

Goal:
Create my first developer portfolio.

Completed:
- Created GitHub account
- Installed VS Code
- Installed Node.js
- Installed Git
- Created Next.js project
- Successfully ran website locally
- Make first Git commit
- Create public portfolio repository on GitHub
- Connect local project to GitHub
- Push project to GitHub
- Built initial homepage

Technologies encountered:
- Git
- GitHub
- Node.js
- npm
- Next.js
- React
- TypeScript
- Tailwind CSS

What I learned:
I learned the basic difference between Git and GitHub and how a Next.js development server works. I also learned how Git tracks local project changes and how GitHub stores the repository online.

//finished//

Next:
Redo the homepage.

## September 16, 2026

Goal:
Deploy my portfolio publicly, convert it into an editable CMS-driven website, and redesign it around my game-development identity.

Completed:
- Redesigned the original portfolio into a game-inspired personal website
- Changed the visual direction from a conventional developer portfolio to a bright RPG / retro-game interface
- Made the layout mobile-first and primarily single-column for easier scrolling and reading
- Created a game-style player profile with character information, current quest, statistics, skill inventory, achievements, and quest logs
- Created an 8-bit RPG character placeholder for my future pixel character
- Designed the hero section as a retro desktop-computer loading screen with monitor, CPU, keyboard, and mouse
- Added support for a future custom poster / loading-screen image
- Created a fixed game-style background that remains stationary while the page scrolls
- Added support for custom background images, GIFs, and browser-compatible videos
- Increased text readability and simplified section spacing
- Converted the timeline into a vertically scrolling journey log
- Changed the timeline to reverse chronological order
- Redesigned projects as RPG-style quests
- Added expandable floating project panels for additional project information
- Added project proof / evidence support for:
- Images and screenshots
- Animated GIFs
- Videos
- Files and documents
- External links
- Added clearer link and download indicators to interactive elements
- Standardized clickable elements so links and buttons are easier to identify
- Added hover / cursor feedback to interactive controls
- Created GitHub repository integration and continued version control using Git
- Deployed the portfolio publicly using Vercel
- Connected GitHub to Vercel for automatic production deployments
- Created a Sanity CMS project
- Created and deployed a standalone Sanity Studio
- Created structured Sanity schemas for:
- Profile
- Timeline
- Projects
- Experience
- Skills
- Achievements
- Engineering Highlights
- Site Settings
- Added editable profile information, contact details, résumé, social links, images, avatar, and site settings
- Added editable media fields for game background and project evidence
- Migrated existing timeline entries into Sanity
- Migrated existing projects into Sanity
- Migrated existing skills into Sanity
- Migrated existing achievements into Sanity
- Connected the Next.js frontend to the Sanity Content Lake using GROQ
- Created and verified a CMS test page before connecting the production homepage
- Converted the production homepage from hardcoded content to Sanity-driven content
- Added CMS-controlled section visibility and ordering
- Added editable SEO title and description
- Configured the public Sanity dataset so the website can read published content while editing remains restricted to authenticated users
- Fixed a nested Git repository issue caused by the standalone Sanity Studio
- Fixed TypeScript / Sanity schema import resolution issues
- Fixed a Vercel production build failure caused by the Next.js TypeScript configuration compiling the separate Sanity Studio
- Separated the Next.js website build from the Sanity Studio build
- Established a workflow where normal portfolio updates no longer require editing React code

Technologies encountered:
- Git
- GitHub
- Vercel
- Sanity CMS
- Sanity Studio
- Sanity Content Lake
- GROQ
- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js
- npm
- HTML media elements
- Responsive web design
- CMS schema design
- Structured content
- CDN / caching
- Production build pipelines
- Automatic deployment

What I learned:
I learned how a modern website can separate its content, frontend, source code, and hosting into independent systems.

Sanity stores and manages the portfolio content.

Next.js and React determine how that content is displayed.

Git and GitHub store and track the source code.

Vercel builds and hosts the public website.

I learned why structured content is important. My projects, timeline, skills, achievements, contact information, images, and other portfolio data are no longer tied directly to one visual layout. This means I can redesign the frontend later without recreating all of my content.

I also learned how to create CMS schemas, query content using GROQ, render CMS data in Next.js, handle uploaded files and media, create interactive React components, and troubleshoot real production deployment problems.

I encountered and fixed issues involving nested Git repositories, TypeScript module resolution, separate dependency environments, Sanity schemas, Vercel builds, and frontend/CMS integration.

Most importantly, normal portfolio maintenance can now be performed through Sanity Studio. Adding projects, screenshots, videos, skills, achievements, résumé updates, contact information, or other content should no longer require manually editing the source code.

//finished//

Next:
- Populate the portfolio with final photos, pixel artwork, project evidence, and complete résumé information
- Organize and archive older programming, game-development, robotics, and engineering work
- Begin Portfolio Project #2 focused on AI tools / automation