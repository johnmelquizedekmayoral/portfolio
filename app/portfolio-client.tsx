'use client'

import {useMemo, useState} from 'react'

type Asset = {
  _id?: string
  url?: string
  originalFilename?: string
}

type ProfileImage = {
  _key?: string
  alt?: string
  attire?: string
  asset?: Asset
}

type Profile = {
  fullName?: string
  credential?: string
  professionalTitles?: string[]
  location?: string
  email?: string
  phone?: string
  heroTagline?: string
  bio?: string
  githubUrl?: string
  linkedinUrl?: string

  mainPhoto?: {
    alt?: string
    asset?: Asset
  }

  sidePhotos?: ProfileImage[]

  resume?: {
    asset?: Asset
  }
}

type Settings = {
  currentQuest?: string
  availabilityStatus?: string
  theme?: string

  showTimeline?: boolean
  showProjects?: boolean
  showSkills?: boolean
  showEngineering?: boolean
  showAchievements?: boolean
  showExperience?: boolean

  sectionOrder?: string[]
}

type TimelineItem = {
  _id: string
  yearLabel?: string
  title?: string
  role?: string
  summary?: string
  unlocked?: string[]
  sortOrder?: number
}

type Project = {
  _id: string
  title?: string
  slug?: string
  yearLabel?: string
  projectType?: string
  visibility?: 'public' | 'limited' | 'archive'
  status?: string
  featured?: boolean
  shortDescription?: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
  playStoreUrl?: string
  ndaNote?: string
  sortOrder?: number
}

type Skill = {
  _id: string
  name?: string
  category?: string
  experienceLevel?: string
  evidence?: string
  sortOrder?: number
}

type Achievement = {
  _id: string
  title?: string
  issuer?: string
  yearLabel?: string
  description?: string
  url?: string
  sortOrder?: number
}

type Experience = {
  _id: string
  role?: string
  organization?: string
  experienceType?: string
  startDate?: string
  endDate?: string
  present?: boolean
  summary?: string
  highlights?: string[]
  technologies?: string[]
  confidential?: boolean
  sortOrder?: number
}

type EngineeringHighlight = {
  _id: string
  title?: string
  yearLabel?: string
  summary?: string
  tools?: string[]
  sortOrder?: number
}

export type PortfolioData = {
  profile?: Profile
  settings?: Settings
  timeline?: TimelineItem[]
  projects?: Project[]
  skills?: Skill[]
  achievements?: Achievement[]
  experience?: Experience[]
  engineering?: EngineeringHighlight[]
}

const skillCategoryLabels: Record<string, string> = {
  core: 'Core Build',
  programming: 'Programming',
  web: 'Web Development',
  game: 'Game Development',
  engineering: 'Engineering',
  ai: 'AI / Automation',
  tools: 'Tools',
}

const projectStatusLabels: Record<string, string> = {
  inProgress: 'In Progress',
  completed: 'Completed',
  published: 'Published',
  archived: 'Archived',
}

export default function PortfolioClient({
  data,
}: {
  data: PortfolioData
}) {
  const profile = data.profile
  const settings = data.settings

  const timeline = data.timeline ?? []
  const projects = data.projects ?? []
  const skills = data.skills ?? []
  const achievements = data.achievements ?? []
  const experiences = data.experience ?? []
  const engineering = data.engineering ?? []

  const [activeEra, setActiveEra] = useState(
    Math.max(timeline.length - 1, 0),
  )

  const [projectFilter, setProjectFilter] =
    useState<'public' | 'limited' | 'archive'>('public')

  const activeTimeline = timeline[activeEra]

  const filteredProjects = projects.filter(
    (project) => project.visibility === projectFilter,
  )

  const groupedSkills = useMemo(() => {
    const groups: Record<string, Skill[]> = {}

    for (const skill of skills) {
      const category = skill.category ?? 'core'

      if (!groups[category]) {
        groups[category] = []
      }

      groups[category].push(skill)
    }

    return groups
  }, [skills])

  const titles = profile?.professionalTitles ?? []

  const sectionOrder =
    settings?.sectionOrder?.length
      ? settings.sectionOrder
      : [
          'timeline',
          'projects',
          'experience',
          'skills',
          'engineering',
          'achievements',
        ]

  const renderSection = (section: string) => {
    switch (section) {
      case 'timeline':
        if (!settings?.showTimeline || timeline.length === 0) {
          return null
        }

        return (
          <TimelineSection
            key="timeline"
            timeline={timeline}
            activeEra={activeEra}
            setActiveEra={setActiveEra}
            activeTimeline={activeTimeline}
          />
        )

      case 'projects':
        if (!settings?.showProjects || projects.length === 0) {
          return null
        }

        return (
          <ProjectsSection
            key="projects"
            projects={filteredProjects}
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
          />
        )

      case 'experience':
        if (!settings?.showExperience || experiences.length === 0) {
          return null
        }

        return (
          <ExperienceSection
            key="experience"
            experiences={experiences}
          />
        )

      case 'skills':
        if (!settings?.showSkills || skills.length === 0) {
          return null
        }

        return (
          <SkillsSection
            key="skills"
            groupedSkills={groupedSkills}
          />
        )

      case 'engineering':
        if (!settings?.showEngineering || engineering.length === 0) {
          return null
        }

        return (
          <EngineeringSection
            key="engineering"
            engineering={engineering}
          />
        )

      case 'achievements':
        if (
          !settings?.showAchievements ||
          achievements.length === 0
        ) {
          return null
        }

        return (
          <AchievementsSection
            key="achievements"
            achievements={achievements}
          />
        )

      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
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

            {settings?.showProjects && projects.length > 0 && (
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            )}

            {settings?.showSkills && skills.length > 0 && (
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            )}

            <a href="#contact" className="hover:text-white">
              Contact
            </a>

            {profile?.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="overview"
        className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20"
      >
        <div className="flex flex-col justify-center">
          <div className="inline-block self-start border-2 border-zinc-700 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
            Current Quest:{' '}
            {settings?.currentQuest ?? 'Build, Ship, Improve'}
          </div>

          <p className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            Character Select
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase leading-tight sm:text-6xl">
            {profile?.fullName ?? 'John Melquizedek Mayoral'}
            {profile?.credential && (
              <>
                <span className="text-zinc-500">, </span>
                {profile.credential}
              </>
            )}
          </h1>

          {titles.length > 0 && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              {titles.join(' | ')}
            </p>
          )}

          {profile?.heroTagline && (
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
              {profile.heroTagline}
            </p>
          )}

          {profile?.bio && (
            <p className="mt-5 max-w-3xl leading-8 text-zinc-500">
              {profile.bio}
            </p>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <StatCard
              label="Base"
              value={profile?.location ?? 'Cebu, Philippines'}
            />

            <StatCard
              label="Current Status"
              value={
                settings?.availabilityStatus ??
                'Building and improving'
              }
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {projects.length > 0 && (
              <a
                href="#projects"
                className="border-4 border-white bg-white px-5 py-3 font-mono text-sm uppercase tracking-widest text-black transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
            )}

            {profile?.resume?.asset?.url && (
              <a
                href={profile.resume.asset.url}
                target="_blank"
                rel="noreferrer"
                className="border-4 border-zinc-700 px-5 py-3 font-mono text-sm uppercase tracking-widest transition hover:border-zinc-400"
              >
                Resume
              </a>
            )}

            <a
              href="#contact"
              className="border-4 border-zinc-700 px-5 py-3 font-mono text-sm uppercase tracking-widest transition hover:border-zinc-400"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Character artwork */}
        <HeroArtwork profile={profile} />
      </section>

      {/* CMS-controlled section order */}
      {sectionOrder.map(renderSection)}

      {/* Contact */}
      <section
        id="contact"
        className="border-t-4 border-zinc-800 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="CONTACT"
            title="Ready to Connect"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Panel>
              <p className="leading-8 text-zinc-400">
                For development work, AI-assisted workflows,
                technical collaboration, or related opportunities,
                use any of the channels listed here.
              </p>
            </Panel>

            <Panel>
              <div className="space-y-5">
                {profile?.email && (
                  <ContactItem
                    label="Email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                  />
                )}

                {profile?.phone && (
                  <ContactItem
                    label="Phone"
                    value={profile.phone}
                    href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
                  />
                )}

                {profile?.githubUrl && (
                  <ContactItem
                    label="GitHub"
                    value="GitHub Profile"
                    href={profile.githubUrl}
                  />
                )}

                {profile?.linkedinUrl && (
                  <ContactItem
                    label="LinkedIn"
                    value="LinkedIn Profile"
                    href={profile.linkedinUrl}
                  />
                )}

                {profile?.location && (
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Location
                    </p>

                    <p className="mt-1 text-zinc-200">
                      {profile.location}
                    </p>
                  </div>
                )}
              </div>
            </Panel>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-zinc-800 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:flex-row sm:justify-between">
          <span>
            {profile?.fullName ?? 'John Melquizedek Mayoral'}
            {profile?.credential
              ? `, ${profile.credential}`
              : ''}
          </span>

          <span>
            Next.js • Sanity • Vercel
          </span>
        </div>
      </footer>
    </main>
  )
}

function HeroArtwork({
  profile,
}: {
  profile?: Profile
}) {
  const main = profile?.mainPhoto
  const side = profile?.sidePhotos ?? []

  return (
    <div className="relative min-h-[560px] overflow-hidden border-4 border-zinc-800 bg-zinc-900 p-4 shadow-[8px_8px_0px_#18181b]">
      <div className="absolute left-4 top-4 z-20 border-2 border-zinc-700 bg-zinc-950/90 px-3 py-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
        Character Lineup
      </div>

      {main?.asset?.url ? (
        <img
          src={main.asset.url}
          alt={main.alt ?? 'Main portrait'}
          className="absolute bottom-0 left-0 z-10 h-[88%] w-[68%] object-cover object-top"
        />
      ) : (
        <div className="absolute bottom-4 left-4 flex h-[82%] w-[62%] items-center justify-center border-4 border-zinc-700 bg-zinc-950 text-center text-sm uppercase tracking-widest text-zinc-600">
          Main portrait
        </div>
      )}

      <div className="absolute bottom-5 right-4 z-20 flex w-[43%] flex-col gap-3">
        {side.slice(0, 3).map((photo, index) => (
          <div
            key={photo._key ?? index}
            className="overflow-hidden border-4 border-zinc-700 bg-zinc-950 shadow-[4px_4px_0px_#18181b]"
          >
            {photo.asset?.url ? (
              <img
                src={photo.asset.url}
                alt={photo.alt ?? `Character version ${index + 1}`}
                className="aspect-[2/1] w-full object-cover object-top"
              />
            ) : (
              <div className="flex aspect-[2/1] items-center justify-center text-xs text-zinc-600">
                Character {index + 1}
              </div>
            )}

            {photo.attire && (
              <div className="border-t-2 border-zinc-800 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {photo.attire}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function TimelineSection({
  timeline,
  activeEra,
  setActiveEra,
  activeTimeline,
}: {
  timeline: TimelineItem[]
  activeEra: number
  setActiveEra: (index: number) => void
  activeTimeline?: TimelineItem
}) {
  return (
    <section
      id="timeline"
      className="border-t-4 border-zinc-800 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 / TIMELINE"
          title="Character Progression"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {timeline.map((item, index) => (
            <button
              key={item._id}
              onClick={() => setActiveEra(index)}
              className={`border-4 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] ${
                activeEra === index
                  ? 'border-white bg-white text-black'
                  : 'border-zinc-700 text-zinc-300 hover:border-zinc-400'
              }`}
            >
              {item.yearLabel}
            </button>
          ))}
        </div>

        {activeTimeline && (
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <Panel>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Active Class
              </p>

              <h3 className="mt-3 text-2xl font-bold uppercase">
                {activeTimeline.role}
              </h3>

              <p className="mt-3 text-zinc-500">
                {activeTimeline.yearLabel}
              </p>
            </Panel>

            <Panel>
              <h3 className="text-2xl font-bold">
                {activeTimeline.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {activeTimeline.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {activeTimeline.unlocked?.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Panel>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectsSection({
  projects,
  projectFilter,
  setProjectFilter,
}: {
  projects: Project[]
  projectFilter: 'public' | 'limited' | 'archive'
  setProjectFilter: (
    value: 'public' | 'limited' | 'archive',
  ) => void
}) {
  return (
    <section
      id="projects"
      className="border-t-4 border-zinc-800 bg-zinc-900/30 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 / PROJECTS"
          title="Mission Board"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            ['public', 'Featured / Public'],
            ['limited', 'Limited / NDA'],
            ['archive', 'Archive'],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() =>
                setProjectFilter(
                  value as 'public' | 'limited' | 'archive',
                )
              }
              className={`border-4 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] ${
                projectFilter === value
                  ? 'border-white bg-white text-black'
                  : 'border-zinc-700 text-zinc-300 hover:border-zinc-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Panel key={project._id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {project.yearLabel}
                  </p>

                  <h3 className="mt-3 text-xl font-bold uppercase">
                    {project.title}
                  </h3>
                </div>

                {project.status && (
                  <span className="border-2 border-zinc-700 px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-400">
                    {projectStatusLabels[project.status] ??
                      project.status}
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                {project.shortDescription}
              </p>

              {project.ndaNote && (
                <p className="mt-4 border-l-2 border-zinc-700 pl-4 text-xs leading-6 text-zinc-500">
                  {project.ndaNote}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies?.map((technology) => (
                  <Tag key={technology}>
                    {technology}
                  </Tag>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <ProjectLink
                    href={project.liveUrl}
                    label="Live"
                  />
                )}

                {project.githubUrl && (
                  <ProjectLink
                    href={project.githubUrl}
                    label="Source"
                  />
                )}

                {project.playStoreUrl && (
                  <ProjectLink
                    href={project.playStoreUrl}
                    label="Play Store"
                  />
                )}
              </div>
            </Panel>
          ))}

          {projects.length === 0 && (
            <p className="text-zinc-500">
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function SkillsSection({
  groupedSkills,
}: {
  groupedSkills: Record<string, Skill[]>
}) {
  return (
    <section
      id="skills"
      className="border-t-4 border-zinc-800 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SKILL TREE"
          title="Current Build"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(groupedSkills).map(
            ([category, items]) => (
              <Panel key={category}>
                <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-300">
                  {skillCategoryLabels[category] ?? category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <Tag key={skill._id}>
                      {skill.name ?? 'Skill'}
                    </Tag>
                  ))}
                </div>
              </Panel>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection({
  experiences,
}: {
  experiences: Experience[]
}) {
  return (
    <section className="border-t-4 border-zinc-800 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Quest Log"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <Panel key={experience._id}>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                {experience.experienceType}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {experience.role}
              </h3>

              {experience.organization && (
                <p className="mt-1 text-zinc-500">
                  {experience.organization}
                </p>
              )}

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {experience.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies?.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  )
}

function EngineeringSection({
  engineering,
}: {
  engineering: EngineeringHighlight[]
}) {
  return (
    <section className="border-t-4 border-zinc-800 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="ENGINEERING"
          title="Systems & Technical Foundations"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {engineering.map((item) => (
            <Panel key={item._id}>
              <p className="font-mono text-xs text-zinc-500">
                {item.yearLabel}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tools?.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementsSection({
  achievements,
}: {
  achievements: Achievement[]
}) {
  return (
    <section className="border-t-4 border-zinc-800 bg-zinc-900/30 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="ACHIEVEMENTS"
          title="Unlocked Milestones"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement) => (
            <Panel key={achievement._id}>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Achievement Unlocked
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {achievement.title}
              </h3>

              {achievement.yearLabel && (
                <p className="mt-2 text-sm text-zinc-500">
                  {achievement.yearLabel}
                </p>
              )}

              {achievement.description && (
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {achievement.description}
                </p>
              )}

              {achievement.url && (
                <a
                  href={achievement.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block font-mono text-xs uppercase tracking-widest text-zinc-300 underline"
                >
                  View
                </a>
              )}
            </Panel>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <>
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
        {title}
      </h2>
    </>
  )
}

function Panel({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="border-4 border-zinc-800 bg-zinc-900 p-6 shadow-[6px_6px_0px_#18181b]">
      {children}
    </div>
  )
}

function StatCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <Panel>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-sm text-zinc-200">
        {value}
      </p>
    </Panel>
  )
}

function Tag({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="border-2 border-zinc-700 px-3 py-2 text-xs text-zinc-300">
      {children}
    </span>
  )
}

function ProjectLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="border-2 border-zinc-700 px-3 py-2 font-mono text-xs uppercase tracking-widest hover:border-zinc-400"
    >
      {label}
    </a>
  )
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href: string
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>

      <a
        href={href}
        target={
          href.startsWith('http') ? '_blank' : undefined
        }
        rel={
          href.startsWith('http')
            ? 'noreferrer'
            : undefined
        }
        className="mt-1 block text-zinc-200 hover:text-white"
      >
        {value}
      </a>
    </div>
  )
}