export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold">
          John Mayoral
        </span>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a
            href="https://github.com/johnmelquizedekmayoral"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col justify-center px-6 py-32">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Developer • AI Tools • Automation
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-7xl">
          I build software and explore ways to automate work with AI.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Electronics Engineering graduate with programming experience since
          2020, currently specializing in AI-assisted development, automation,
          and modern web technologies.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black"
          >
            View Projects
          </a>

          <a
            href="https://github.com/johnmelquizedekmayoral"
            target="_blank"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium hover:border-zinc-400"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-zinc-800 px-6 py-24"
      >
        <p className="mb-4 text-sm text-zinc-500">01 / ABOUT</p>

        <h2 className="text-3xl font-semibold">Building through projects.</h2>

        <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
          My background combines electronics engineering, programming, and
          hands-on AI-assisted development. I have worked on game development,
          website debugging and feature implementation, and I am now expanding
          into AI automation, APIs, and full-stack development.
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-zinc-800 px-6 py-24"
      >
        <p className="mb-4 text-sm text-zinc-500">02 / PROJECTS</p>

        <h2 className="mb-10 text-3xl font-semibold">Selected work</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 p-6">
            <p className="text-sm text-zinc-500">PROJECT 01</p>
            <h3 className="mt-3 text-xl font-semibold">
              Developer Portfolio
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Designed, developed, version-controlled, and deployed my personal
              developer portfolio.
            </p>
            <p className="mt-6 text-sm text-zinc-500">
              Next.js • TypeScript • Tailwind • Git
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <p className="text-sm text-zinc-500">PROJECT 02</p>
            <h3 className="mt-3 text-xl font-semibold">Unity Development</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Development and improvement work on a Unity-based game using
              AI-assisted programming and debugging.
            </p>
            <p className="mt-6 text-sm text-zinc-500">
              Unity • C# • AI-Assisted Development
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-6">
            <p className="text-sm text-zinc-500">PROJECT 03</p>
            <h3 className="mt-3 text-xl font-semibold">
              Web Development & Debugging
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Debugged an existing website and implemented additional features
              through AI-assisted development.
            </p>
            <p className="mt-6 text-sm text-zinc-500">
              Web Development • Debugging • AI Tools
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-6xl border-t border-zinc-800 px-6 py-24"
      >
        <p className="mb-4 text-sm text-zinc-500">03 / SKILLS</p>

        <h2 className="mb-8 text-3xl font-semibold">Current toolkit</h2>

        <div className="flex max-w-3xl flex-wrap gap-3">
          {[
            "AI Tools",
            "Git",
            "GitHub",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "Unity",
            "C#",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-6xl justify-between border-t border-zinc-800 px-6 py-10 text-sm text-zinc-500">
        <span>John Melquizedek Mayoral</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}