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
Redesign the portfolio, deploy it publicly, and make the site content editable without changing code.

Completed:
- Redesigned the portfolio into a retro game / RPG-style interface
- Added character-style sections for profile, timeline, projects, skills, achievements, engineering, and contact
- Added placeholders and support for multiple profile images
- Deployed the portfolio publicly using Vercel
- Connected GitHub repository to Vercel for automatic deployments
- Created a Sanity CMS project
- Created a standalone Sanity Studio
- Added structured CMS schemas for:
- Profile
- Timeline
- Projects
- Experience
- Skills
- Achievements
- Engineering Highlights
- Site Settings
- Configured Profile and Site Settings as singleton documents
- Added editable profile information, photos, resume, contact information, and social links
- Migrated existing timeline data into Sanity
- Migrated project data into Sanity
- Migrated skills into Sanity
- Migrated achievements into Sanity
- Connected the Next.js frontend to the Sanity dataset
- Created a GROQ query that retrieves all portfolio content
- Created and tested a temporary CMS test page
- Verified that Sanity successfully returns:
- Profile data
- Images
- Timeline entries
- Projects
- Skills
- Achievements
- Converted the homepage structure so portfolio content can come from Sanity instead of hardcoded arrays
- Added CMS-controlled section visibility and ordering
- Configured editable SEO title and description
- Fixed nested Git repository issue inside the Studio folder
- Fixed Sanity schema import resolution issue
- Fixed Vercel build configuration by excluding the standalone Sanity Studio from the Next.js TypeScript build

Technologies encountered:
- Vercel
- Sanity CMS
- Sanity Studio
- GROQ
- Next.js server components
- React client components
- TypeScript
- Tailwind CSS
- Git
- GitHub
- Content Management Systems
- Structured content
- CDN / caching
- Deployment pipelines

What I learned:
I learned how to separate website content from website design. Instead of storing portfolio information directly inside React components, the content can be stored in a CMS and fetched by the frontend.
I learned that this allows the visual layout to be redesigned in the future without recreating all of the portfolio information.
I also learned how GitHub and Vercel work together: pushing a commit to the main branch automatically triggers a new Vercel deployment.
I encountered and fixed several real development issues, including nested Git repositories, TypeScript module resolution, separate dependency environments, and failed production builds.
Most importantly, I learned how a modern website can be divided into separate systems:

Sanity → manages content
Next.js → renders the website
GitHub → stores the source code
Vercel → hosts and deploys the website

The portfolio is now designed so normal content updates such as adding projects, skills, achievements, photos, experience, or changing profile information can be done through Sanity instead of editing code.

//finished//

Next:

- Verify the final production deployment
- Finalize portfolio content
- Organize and upload older programming, game development, and engineering projects
- Move on to the next AI / automation portfolio project