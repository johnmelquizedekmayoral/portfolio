"use client";

import { useState } from "react";

const timelineData = [
  {
    label: "2016",
    title: "First In-Depth Computer Exposure",
    role: "Explorer",
    summary:
      "Became deeply interested in computers through quiz bowls and early exposure to computer-related topics.",
    unlocked: [
      "Computer curiosity",
      "Foundational digital literacy",
      "Early technical interest",
    ],
  },
  {
    label: "2017",
    title: "First Programming & Animation Exposure",
    role: "Beginner Coder",
    summary:
      "Encountered .java files and animation work through .fla files. This was the first real exposure to building things digitally.",
    unlocked: [
      "Java exposure",
      "Animation exposure",
      "Creative-technical curiosity",
    ],
  },
  {
    label: "2018–2020",
    title: "Robotics, C, and Block-Based Programming",
    role: "Builder",
    summary:
      "Worked with robotics-related files such as .mblock and .ino, started learning C in 2019, and explored Scratch in 2020.",
    unlocked: [
      "Robotics basics",
      "Arduino-related work",
      "C programming",
      "Scratch / block-based logic",
    ],
  },
  {
    label: "2020–2022",
    title: "Game Development & Programming School",
    role: "Multi-Disciplinary Developer",
    summary:
      "Explored game development more seriously, started freelancing, published a game to the Play Store in 2021, and studied programming more deeply. Also learned PHP and other languages during this period.",
    unlocked: [
      "Game development",
      "Freelancing",
      "Play Store publishing",
      "PHP",
      "Expanded programming foundations",
    ],
  },
  {
    label: "2022–2026",
    title: "Engineering Years",
    role: "Engineering Specialist",
    summary:
      "Focused heavily on engineering-related work, academic training, and technical problem solving. More specific items can be added later from your resume.",
    unlocked: [
      "Engineering foundations",
      "Technical analysis",
      "Project development",
      "Problem solving",
    ],
  },
  {
    label: "NOW",
    title: "AI-Assisted Development & Portfolio Rebuild",
    role: "Current Class",
    summary:
      "Currently rebuilding a professional portfolio, organizing previous work, updating projects, and moving toward AI-assisted development, AI tools, and automation.",
    unlocked: [
      "AI-assisted development",
      "Web development",
      "Portfolio building",
      "Modern tooling",
    ],
  },
] as const;

const projectTabs = {
  featured: [
    {
      code: "P-01",
      name: "Developer Portfolio",
      year: "2026",
      status: "In Progress",
      description:
        "A retro-inspired personal portfolio built to present my journey from programming and game development to engineering and AI-assisted development.",
      stack: "Next.js • TypeScript • Tailwind • Git • GitHub",
    },
    {
      code: "P-02",
      name: "Play Store Game",
      year: "2021",
      status: "Published",
      description:
        "My first game uploaded to the Play Store. Publicly showable and important as proof of long-term development experience.",
      stack: "Game Development • Publishing • Mobile",
    },
    {
      code: "P-03",
      name: "Learning Modality System",
      year: "Recent",
      status: "Ongoing / Recent Work",
      description:
        "Debugging and feature implementation work on a website together with a classmate.",
      stack: "Web Development • Debugging • Feature Implementation • AI Tools",
    },
  ],
  nda: [
    {
      code: "NDA-01",
      name: "Thesis Game Development Projects",
      year: "2021+",
      status: "Restricted",
      description:
        "Contributed to multiple game development projects, mostly for thesis work of Computer Science and IT students. Public details are limited due to confidentiality.",
      stack: "Unity • Game Development • Client Work",
    },
    {
      code: "NDA-02",
      name: "Freelance Technical Contributions",
      year: "Various",
      status: "Restricted",
      description:
        "Selected paid or assisted work where only general contribution summaries can be shown.",
      stack: "Freelance • Development Support • Technical Problem Solving",
    },
  ],
  archive: [
    {
      code: "ARC-01",
      name: "Programming Archive",
      year: "Legacy",
      status: "To Organize",
      description:
        "Recovered older programming files across different languages including Java, C, PHP, and other early learning projects.",
      stack: "Java • C • PHP • Early Programming",
    },
    {
      code: "ARC-02",
      name: "Early Animation Archive",
      year: "Legacy",
      status: "To Organize",
      description:
        "Older animation-related work from early creative-technical exploration.",
      stack: "Animation • .fla • Creative Tools",
    },
    {
      code: "ARC-03",
      name: "Engineering Archive",
      year: "2022–2026",
      status: "Placeholder",
      description:
        "Engineering projects and schematics, including EasyEDA-related work. More details will be added from resume and files.",
      stack: "Engineering • Schematics • EasyEDA",
    },
  ],
} as const;

type ProjectTabKey = keyof typeof projectTabs;

const skillGroups = [
  {
    title: "Core Build",
    items: [
      "Problem Solving",
      "AI-Assisted Development",
      "Technical Adaptability",
      "Self-Directed Learning",
    ],
  },
  {
    title: "Programming",
    items: [
      "Java",
      "C",
      "PHP",
      "JavaScript",
      "TypeScript",
      "C#",
      "Scratch",
    ],
  },
  {
    title: "Web",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Debugging",
      "Feature Implementation",
    ],
  },
  {
    title: "Game Development",
    items: [
      "Unity",
      "Gameplay Scripting",
      "Publishing",
      "Freelancing",
      "Rapid Iteration",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Electronics",
      "Technical Analysis",
      "Circuit / System Thinking",
      "EasyEDA",
      "Robotics Exposure",
    ],
  },
  {
    title: "AI Direction",
    items: [
      "Prompting",
      "AI Tool Use",
      "AI Workflow Thinking",
      "Automation Direction",
    ],
  },
];

const engineeringHighlights = [
  "Engineering details from resume will be inserted here later.",
  "Project highlights, technical tools, and hardware-related work can be added once provided.",
  "This section is intentionally placed now so the structure is already complete.",
];

const achievements = [
  "Electronics Engineering Graduate",
  "Magna Cum Laude",
  "ECT",
  "Published first Play Store game in 2021",
  "Additional awards / achievements to be added from resume",
];

export default function Home() {
  const [activeEra, setActiveEra] = useState(5);
  const [activeProjectTab, setActiveProjectTab] =
    useState<ProjectTabKey>("featured");

  const currentEra = timelineData[activeEra];
  const currentProjects = projectTabs[activeProjectTab];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 border-b-4 border-zinc-800 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <p className="font-mono text-lg font-bold uppercase tracking-widest">
              JMM.EXE
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Player Profile
            </p>
          </div>

          <div className="hidden gap-5 text-sm text-zinc-400 md:flex">
            <a href="#overview" className="hover:text-white">
              Overview
            </a>
            <a href="#timeline" className="hover:text-white">
              Timeline
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
            <a
              href="https://github.com/johnmelquizedekmayoral"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / Overview */}
      <section
        id="overview"
        className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-16"
      >
        <div className="space-y-6">
          <div className="inline-block border-2 border-zinc-700 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
            Current Quest: Build, Ship, Improve
          </div>

          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
              Character Select
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-tight sm:text-6xl">
              John Melquizedek
              <br />
              Mayoral, ECT
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              Electronics Engineering Graduate | AI-Assisted Developer | Game
              Developer
            </p>
          </div>

          <p className="max-w-3xl leading-8 text-zinc-400">
            I build across disciplines: programming, game development,
            engineering, and modern AI-assisted development. My work history is
            not a straight line—it is a long progression of technical skills
            built over time, now focused toward software, AI tools, and
            automation.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="border-4 border-zinc-800 bg-zinc-900 p-4 shadow-[6px_6px_0px_#18181b]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Base
              </p>
              <p className="mt-2 text-sm">Cebu, Philippines</p>
            </div>

            <div className="border-4 border-zinc-800 bg-zinc-900 p-4 shadow-[6px_6px_0px_#18181b]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Main Class
              </p>
              <p className="mt-2 text-sm">AI-Assisted Developer</p>
            </div>

            <div className="border-4 border-zinc-800 bg-zinc-900 p-4 shadow-[6px_6px_0px_#18181b]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Side Class
              </p>
              <p className="mt-2 text-sm">Game Developer</p>
            </div>

            <div className="border-4 border-zinc-800 bg-zinc-900 p-4 shadow-[6px_6px_0px_#18181b]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Status
              </p>
              <p className="mt-2 text-sm">Portfolio rebuilding in progress</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="border-4 border-white bg-white px-5 py-3 font-mono text-sm uppercase tracking-widest text-black transition hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="https://github.com/johnmelquizedekmayoral"
              target="_blank"
              rel="noreferrer"
              className="border-4 border-zinc-700 px-5 py-3 font-mono text-sm uppercase tracking-widest text-zinc-200 transition hover:border-zinc-400 hover:-translate-y-0.5"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="border-4 border-zinc-700 px-5 py-3 font-mono text-sm uppercase tracking-widest text-zinc-200 transition hover:border-zinc-400 hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>

          <div className="border-t-4 border-zinc-800 pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Progression Path
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Programming → Game Development → Engineering → AI-Assisted
              Development → AI Tools & Automation
            </p>
          </div>
        </div>

        {/* Hero Artwork Placeholder */}
        <div className="space-y-4">
          <div className="border-4 border-zinc-800 bg-zinc-900 p-4 shadow-[6px_6px_0px_#18181b]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Key Art Placeholder
            </p>

            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="flex aspect-[4/5] items-center justify-center border-4 border-zinc-700 bg-zinc-950 text-center text-sm uppercase tracking-[0.2em] text-zinc-500">
                Main fierce but professional photo placeholder
              </div>

              <div className="grid gap-4">
                <div className="flex aspect-[4/3] items-center justify-center border-4 border-zinc-700 bg-zinc-950 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Right-facing version 01
                  <br />
                  Different attire
                </div>
                <div className="flex aspect-[4/3] items-center justify-center border-4 border-zinc-700 bg-zinc-950 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Right-facing version 02
                  <br />
                  Different attire
                </div>
                <div className="flex aspect-[4/3] items-center justify-center border-4 border-zinc-700 bg-zinc-950 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Right-facing version 03
                  <br />
                  Different attire
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-zinc-500">
              Intended look: dramatic layered character lineup with a
              game-poster feel, but still professional and readable.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="timeline"
        className="border-t-4 border-zinc-800 bg-zinc-925 px-4 py-14 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            01 / Timeline
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Character Progression
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
            This section shows the long path behind my current work. Visitors
            scroll the page, then switch eras only if they want more detail.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {timelineData.map((era, index) => (
              <button
                key={era.label}
                onClick={() => setActiveEra(index)}
                className={`border-4 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] transition ${
                  activeEra === index
                    ? "border-white bg-white text-black"
                    : "border-zinc-700 text-zinc-300 hover:border-zinc-400"
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-4 border-zinc-800 bg-zinc-900 p-6 shadow-[6px_6px_0px_#18181b]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Active Class
              </p>
              <h3 className="mt-3 text-2xl font-bold uppercase">
                {currentEra.role}
              </h3>

              <div className="mt-6 flex aspect-square items-center justify-center border-4 border-zinc-700 bg-zinc-950 text-center text-sm uppercase tracking-[0.2em] text-zinc-500">
                Era photo / pixel avatar
                <br />
                placeholder
              </div>
            </div>

            <div className="border-4 border-zinc-800 bg-zinc-900 p-6 shadow-[6px_6px_0px_#18181b]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Era Data
              </p>
              <h3 className="mt-3 text-2xl font-bold">{currentEra.title}</h3>
              <p className="mt-5 leading-8 text-zinc-400">
                {currentEra.summary}
              </p>

              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Unlocked
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {currentEra.unlocked.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-zinc-700 px-3 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t-4 border-zinc-800 px-4 py-14 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            02 / Projects
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Mission Board
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
            Important things are visible immediately. Deep details can be added
            later in case-study pages or modal panels.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {(["featured", "nda", "archive"] as ProjectTabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveProjectTab(tab)}
                className={`border-4 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] transition ${
                  activeProjectTab === tab
                    ? "border-white bg-white text-black"
                    : "border-zinc-700 text-zinc-300 hover:border-zinc-400"
                }`}
              >
                {tab === "featured"
                  ? "Featured"
                  : tab === "nda"
                  ? "Under NDA"
                  : "Archive"}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {currentProjects.map((project) => (
              <div
                key={project.code}
                className="border-4 border-zinc-800 bg-zinc-900 p-6 shadow-[6px_6px_0px_#18181b]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                      {project.code}
                    </p>
                    <h3 className="mt-3 text-xl font-bold uppercase">
                      {project.name}
                    </h3>
                  </div>

                  <div className="border-2 border-zinc-700 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    {project.status}
                  </div>
                </div>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {project.year}
                </p>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 border-t-2 border-zinc-800 pt-4">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Stack / Focus
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">{project.stack}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t-4 border-zinc-800 bg-zinc-925 px-4 py-14 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            03 / Skill Tree
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Current Build
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
            No fake percentage bars. Skills are grouped by function so visitors
            can understand what I actually work with.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="border-4 border-zinc-800 bg-zinc-900 p-6 shadow-[6px_6px_0px_#18181b]"
              >
                <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-zinc-300">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-zinc-700 px-3 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Highlights */}
      <section className="border-t-4 border-zinc-800 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            04 / Engineering Highlights
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Systems & Technical Foundations
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {engineeringHighlights.map((item) => (
              <div
                key={item}
                className="border-4 border-zinc-800 bg-zinc-900 p-6 text-sm leading-7 text-zinc-400 shadow-[6px_6px_0px_#18181b]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-t-4 border-zinc-800 bg-zinc-925 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            05 / Achievements
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Unlocked Milestones
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="border-4 border-zinc-800 bg-zinc-900 p-6 shadow-[6px_6px_0px_#18181b]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Achievement
                </p>
                <p className="mt-3 text-lg font-semibold">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t-4 border-zinc-800 px-4 py-14 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            06 / Contact
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Ready to Connect
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="border-4 border-zinc-800 bg-zinc-900 p-6 shadow-[6px_6px_0px_#18181b]">
              <p className="text-sm leading-8 text-zinc-400">
                If you want to discuss development work, AI-assisted workflows,
                game-related experience, or technical projects, feel free to
                reach out.
              </p>
            </div>

            <div className="border-4 border-zinc-800 bg-zinc-900 p-6 shadow-[6px_6px_0px_#18181b]">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Email
                  </p>
                  <a
                    href="mailto:johnmelquizedekmayoral@gmail.com"
                    className="mt-1 block text-zinc-200 hover:text-white"
                  >
                    johnmelquizedekmayoral@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Phone
                  </p>
                  <p className="mt-1 text-zinc-200">(+63) 910 575 9466</p>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/johnmelquizedekmayoral"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-zinc-200 hover:text-white"
                  >
                    github.com/johnmelquizedekmayoral
                  </a>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Location
                  </p>
                  <p className="mt-1 text-zinc-200">Cebu, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-zinc-800 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>John Melquizedek Mayoral, ECT</span>
          <span>Built with Next.js • Designed as a game-inspired profile</span>
        </div>
      </footer>
    </main>
  );
}