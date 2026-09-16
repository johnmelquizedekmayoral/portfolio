'use client'

import {useEffect, useMemo, useState} from 'react'

type Asset = {
  _id?: string
  url?: string
  mimeType?: string
  originalFilename?: string
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

  pixelAvatar?: {
    asset?: Asset
  }

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

  backgroundMedia?: {
    asset?: Asset
  }

  backgroundMediaMobile?: {
    asset?: Asset
  }
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

type ProjectProof = {
  _key: string
  kind?: 'image' | 'video' | 'file' | 'link'
  title?: string
  caption?: string
  url?: string

  image?: {
    alt?: string
    asset?: Asset
  }

  video?: {
    asset?: Asset
  }

  file?: {
    asset?: Asset
  }
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
  proofs?: ProjectProof[]
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

const skillLabels: Record<string, string> = {
  core: '🧠 Core',
  programming: '💻 Programming',
  web: '🌐 Web',
  game: '🎮 Game Dev',
  engineering: '⚡ Engineering',
  ai: '🤖 AI / Automation',
  tools: '🧰 Tools',
}

const categoryOrder = [
  'programming',
  'game',
  'engineering',
  'web',
  'ai',
  'tools',
  'core',
]

const statusLabels: Record<string, string> = {
  inProgress: '⚔ ACTIVE',
  completed: '✅ COMPLETE',
  published: '🌎 PUBLISHED',
  archived: '📦 ARCHIVED',
}

const clickableClass =
  'cursor-pointer rounded-lg border-[3px] border-slate-900 bg-slate-200 px-4 py-2 font-semibold text-blue-700 underline decoration-2 underline-offset-2 shadow-[3px_3px_0_#0f172a] transition-all duration-150 hover:-translate-y-1 hover:scale-[1.02] hover:bg-slate-100 active:translate-y-0 active:scale-100'

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

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  useEffect(() => {
    if (!selectedProject) return

    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', closeWithEscape)

    return () => {
      document.body.style.overflow = original
      window.removeEventListener('keydown', closeWithEscape)
    }
  }, [selectedProject])

  const titles = profile?.professionalTitles ?? []

  const skillGroups = useMemo(() => {
    const groups = categoryOrder
      .map((category) => ({
        category,
        skills: skills.filter(
          (skill) => skill.category === category,
        ),
      }))
      .filter((group) => group.skills.length > 0)

    // Highest stat first
    return groups.sort(
      (a, b) => b.skills.length - a.skills.length,
    )
  }, [skills])

  const maxSkillCount = Math.max(
    ...skillGroups.map((group) => group.skills.length),
    1,
  )

  const publicProjects = projects.filter(
    (project) => project.visibility === 'public',
  )

  const limitedProjects = projects.filter(
    (project) => project.visibility === 'limited',
  )

  const archiveProjects = projects.filter(
    (project) => project.visibility === 'archive',
  )

  return (
    <>
      <GameBackground
        asset={settings?.backgroundMedia?.asset}
        mobileAsset={settings?.backgroundMediaMobile?.asset}
      />

      <main className="relative z-10 min-h-screen text-slate-900">
        {/* HERO */}
        <section className="mx-auto flex min-h-[92vh] w-full max-w-3xl flex-col items-center px-4 pb-7 pt-5 text-center sm:px-6">
          {/* COMPUTER SETUP */}
          <DesktopComputer
            photo={profile?.mainPhoto}
          />

          {/* Avatar */}
          <div className="-mt-10 flex h-36 w-36 items-end justify-center overflow-hidden border-[5px] border-slate-900 bg-yellow-300 shadow-[5px_5px_0_#0f172a] sm:h-40 sm:w-40">
            {profile?.pixelAvatar?.asset?.url ? (
              <img
                src={profile.pixelAvatar.asset.url}
                alt="Pixel RPG avatar"
                className="h-[96%] w-[96%] object-contain object-bottom"
                style={{
                  imageRendering: 'pixelated',
                }}
              />
            ) : (
              <PixelAvatarPlaceholder />
            )}
          </div>

          <p className="mt-5 font-mono text-sm font-black uppercase tracking-[0.25em] text-blue-700">
            🎮 Player One
          </p>

          {/* SAME COLOR: NAME + ECT */}
          <h1 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-5xl">
            {profile?.fullName ??
              'John Melquizedek Mayoral'}
            {profile?.credential
              ? `, ${profile.credential}`
              : ''}
          </h1>

          {titles.length > 0 && (
            <p className="mt-4 max-w-2xl text-base font-bold leading-7 text-slate-700 sm:text-lg">
              {titles.join(' • ')}
            </p>
          )}

          {/* Current Quest */}
          <div className="mt-6 w-full max-w-xl rounded-2xl border-[3px] border-slate-900 bg-yellow-300 px-5 py-4 shadow-[4px_4px_0_#0f172a]">
            <p className="font-mono text-xs font-black uppercase tracking-[0.2em]">
              🗺 Current Quest
            </p>

            <p className="mt-2 text-lg font-black sm:text-xl">
              {settings?.currentQuest ??
                'Build • Ship • Improve'}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-5 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            <MiniStat
              emoji="🕹"
              label="Years"
              value={`${timeline.length}`}
            />

            <MiniStat
              emoji="⚔️"
              label="Quests"
              value={`${projects.length}`}
            />

            <MiniStat
              emoji="✨"
              label="Skills"
              value={`${skills.length}`}
            />

            <MiniStat
              emoji="🏆"
              label="Awards"
              value={`${achievements.length}`}
            />
          </div>

          {/* Actions only */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {profile?.resume?.asset?.url && (
              <ActionLink
                href={profile.resume.asset.url}
                label="Resume"
                icon="⬇"
              />
            )}

            {profile?.githubUrl && (
              <ActionLink
                href={profile.githubUrl}
                label="GitHub"
                icon="↗"
              />
            )}

            <a
              href="#contact"
              className={clickableClass}
            >
              ↘ Contact
            </a>
          </div>
        </section>

        {/* PLAYER STATS */}
        {settings?.showSkills &&
          skillGroups.length > 0 && (
            <GameSection title="⭐ Player Stats">
              <div className="mx-auto max-w-xl space-y-4">
                {skillGroups.map((group) => {
                  const value = group.skills.length

                  const width = Math.max(
                    16,
                    (value / maxSkillCount) * 100,
                  )

                  return (
                    <div key={group.category}>
                      <div className="mb-2 flex items-end justify-between gap-3 text-left">
                        <span className="font-mono text-sm font-black uppercase tracking-wide">
                          {skillLabels[
                            group.category
                          ] ?? group.category}
                        </span>

                        <span className="font-mono text-sm font-black text-violet-700">
                          {value}
                        </span>
                      </div>

                      <div className="h-6 overflow-hidden rounded-full border-[3px] border-slate-900 bg-white">
                        <div
                          className="h-full bg-gradient-to-r from-lime-400 via-yellow-300 to-orange-400"
                          style={{
                            width: `${width}%`,
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </GameSection>
          )}

        {/* TIMELINE */}
        {settings?.showTimeline &&
          timeline.length > 0 && (
            <GameSection title="🧭 Journey Log">
              <div className="mx-auto max-w-xl">
                {timeline.map((item, index) => (
                  <TimelineRow
                    key={item._id}
                    item={item}
                    last={
                      index === timeline.length - 1
                    }
                  />
                ))}
              </div>
            </GameSection>
          )}

        {/* QUESTS */}
        {settings?.showProjects &&
          projects.length > 0 && (
            <GameSection title="⚔️ Quest Log">
              <div className="mx-auto max-w-xl space-y-4">
                {publicProjects.map((project) => (
                  <QuestCard
                    key={project._id}
                    project={project}
                    onOpen={() =>
                      setSelectedProject(project)
                    }
                  />
                ))}
              </div>

              {limitedProjects.length > 0 && (
                <CompactProjectGroup
                  emoji="🔒"
                  title="Restricted Missions"
                  projects={limitedProjects}
                  onOpen={setSelectedProject}
                />
              )}

              {archiveProjects.length > 0 && (
                <CompactProjectGroup
                  emoji="🗃️"
                  title="Legacy Archive"
                  projects={archiveProjects}
                  onOpen={setSelectedProject}
                />
              )}
            </GameSection>
          )}

        {/* SKILLS */}
        {settings?.showSkills &&
          skills.length > 0 && (
            <GameSection title="🎒 Skill Inventory">
              <div className="mx-auto max-w-xl space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-mono text-sm font-black uppercase tracking-[0.15em] text-violet-700">
                      {skillLabels[
                        group.category
                      ] ?? group.category}
                    </h3>

                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {group.skills.map(
                        (skill) => (
                          <span
                            key={skill._id}
                            className="rounded-lg border-2 border-slate-900 bg-white px-3 py-2 text-sm font-bold shadow-[2px_2px_0_#0f172a]"
                          >
                            {skill.name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GameSection>
          )}

        {/* EXPERIENCE */}
        {settings?.showExperience &&
          experiences.length > 0 && (
            <GameSection title="📖 Quest History">
              <div className="mx-auto max-w-xl space-y-4">
                {experiences.map((item) => (
                  <SimpleCard key={item._id}>
                    <p className="font-mono text-xs font-black uppercase tracking-widest text-blue-700">
                      🧩 {item.experienceType}
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      {item.role}
                    </h3>

                    {item.organization && (
                      <p className="mt-1 text-base font-semibold text-slate-500">
                        {item.organization}
                      </p>
                    )}

                    {item.summary && (
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {item.summary}
                      </p>
                    )}
                  </SimpleCard>
                ))}
              </div>
            </GameSection>
          )}

        {/* ENGINEERING */}
        {settings?.showEngineering &&
          engineering.length > 0 && (
            <GameSection title="⚡ Engineering Missions">
              <div className="mx-auto max-w-xl space-y-4">
                {engineering.map((item) => (
                  <SimpleCard key={item._id}>
                    <p className="font-mono text-sm font-black text-violet-600">
                      🗓 {item.yearLabel}
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      {item.title}
                    </h3>

                    {item.summary && (
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {item.summary}
                      </p>
                    )}
                  </SimpleCard>
                ))}
              </div>
            </GameSection>
          )}

        {/* ACHIEVEMENTS */}
        {settings?.showAchievements &&
          achievements.length > 0 && (
            <GameSection title="🏆 Achievements">
              <div className="mx-auto max-w-xl space-y-3">
                {achievements.map(
                  (achievement) => (
                    <div
                      key={achievement._id}
                      className="flex items-start gap-4 rounded-2xl border-[3px] border-slate-900 bg-yellow-100 p-4 text-left shadow-[3px_3px_0_#0f172a]"
                    >
                      <div className="text-4xl">
                        🏆
                      </div>

                      <div>
                        <h3 className="text-lg font-black">
                          {achievement.title}
                        </h3>

                        {achievement.yearLabel && (
                          <p className="mt-1 font-mono text-xs font-black text-violet-600">
                            {
                              achievement.yearLabel
                            }
                          </p>
                        )}

                        {achievement.description && (
                          <p className="mt-2 text-base leading-7 text-slate-600">
                            {
                              achievement.description
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </GameSection>
          )}

        {/* CONTACT */}
        <GameSection title="💬 Contact">
          <div
            id="contact"
            className="mx-auto max-w-xl rounded-[22px] border-[4px] border-slate-900 bg-violet-500 p-6 text-white shadow-[5px_5px_0_#0f172a]"
          >
            <p className="text-xl font-black">
              🎮 Ready Player Two?
            </p>

            {profile?.location && (
              <p className="mt-3 text-base font-semibold">
                📍 {profile.location}
              </p>
            )}

            <div className="mt-5 flex flex-col items-center gap-3">
              {profile?.email && (
                <ActionLink
                  href={`mailto:${profile.email}`}
                  label={profile.email}
                  icon="↗"
                  external={false}
                />
              )}

              {profile?.phone && (
                <ActionLink
                  href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
                  label={profile.phone}
                  icon="↗"
                  external={false}
                />
              )}

              {profile?.githubUrl && (
                <ActionLink
                  href={profile.githubUrl}
                  label="GitHub"
                  icon="↗"
                />
              )}

              {profile?.linkedinUrl && (
                <ActionLink
                  href={profile.linkedinUrl}
                  label="LinkedIn"
                  icon="↗"
                />
              )}
            </div>
          </div>
        </GameSection>

        <footer className="border-t border-sky-200/80 px-4 py-8 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
            🎮{' '}
            {profile?.fullName ??
              'John Melquizedek Mayoral'}
            {profile?.credential
              ? `, ${profile.credential}`
              : ''}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Next.js • Sanity • Vercel
          </p>
        </footer>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}
    </>
  )
}

/* ---------------- COMPUTER HERO ---------------- */

function DesktopComputer({
  photo,
}: {
  photo?: Profile['mainPhoto']
}) {
  return (
    <div className="relative w-full max-w-2xl pb-14">
      {/* Monitor */}
      <div className="relative mx-auto w-[92%] rounded-[18px] border-[6px] border-slate-900 bg-slate-700 p-3 shadow-[8px_8px_0_#0f172a] sm:w-[88%]">
        {/* Screen */}
        <div className="relative aspect-[16/9] overflow-hidden border-[4px] border-slate-950 bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-400">
          {photo?.asset?.url ? (
            <>
              <img
                src={photo.asset.url}
                alt={
                  photo.alt ??
                  'Main loading screen'
                }
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center p-5 text-white">
              <p className="text-5xl sm:text-7xl">
                🎮
              </p>

              <p className="mt-3 font-mono text-sm font-black uppercase tracking-[0.18em]">
                Loading Player...
              </p>

              <div className="mt-4 h-4 w-[65%] overflow-hidden border-2 border-white bg-slate-800">
                <div className="h-full w-[74%] animate-pulse bg-lime-400" />
              </div>
            </div>
          )}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-xs font-black uppercase tracking-wider text-white drop-shadow-md">
            🎮 Loading Character...
          </div>
        </div>

        {/* monitor light */}
        <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-lime-400" />
      </div>

      {/* Monitor stand */}
      <div className="mx-auto h-8 w-7 bg-slate-800" />
      <div className="mx-auto h-3 w-28 border-[3px] border-slate-900 bg-slate-500" />

      {/* Desk area */}
      <div className="relative mx-auto mt-3 h-12 w-[94%]">
        {/* CPU */}
        <div className="absolute bottom-0 left-[2%] h-24 w-14 rounded-md border-[4px] border-slate-900 bg-slate-700 shadow-[3px_3px_0_#0f172a] sm:h-28 sm:w-16">
          <div className="mx-auto mt-3 h-2 w-7 bg-slate-950" />
          <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-lime-400" />
          <div className="mx-auto mt-3 grid w-8 grid-cols-3 gap-1 opacity-50">
            {Array.from({length: 9}).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-1 w-1 bg-slate-950"
                />
              ),
            )}
          </div>
        </div>

        {/* Keyboard */}
        <div className="absolute bottom-0 left-1/2 h-8 w-[52%] -translate-x-1/2 skew-x-[-8deg] rounded-md border-[3px] border-slate-900 bg-slate-300 shadow-[3px_3px_0_#0f172a]">
          <div className="grid h-full grid-cols-8 gap-[2px] p-1">
            {Array.from({length: 24}).map(
              (_, index) => (
                <div
                  key={index}
                  className="rounded-sm bg-slate-600"
                />
              ),
            )}
          </div>
        </div>

        {/* Mouse */}
        <div className="absolute bottom-0 right-[8%] h-8 w-5 rounded-full border-[3px] border-slate-900 bg-slate-300 shadow-[2px_2px_0_#0f172a]">
          <div className="mx-auto mt-1 h-2 w-[2px] bg-slate-800" />
        </div>
      </div>
    </div>
  )
}

/* ---------------- BACKGROUND ---------------- */

function GameBackground({
  asset,
  mobileAsset,
}: {
  asset?: Asset
  mobileAsset?: Asset
}) {
  const desktopIsVideo =
    asset?.mimeType?.startsWith('video/')

  const mobileIsVideo =
    mobileAsset?.mimeType?.startsWith('video/')

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* DESKTOP BACKGROUND */}
      {asset?.url ? (
        desktopIsVideo ? (
          <video
            src={asset.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 hidden h-full w-full object-cover object-center sm:block"
          />
        ) : (
          <img
            src={asset.url}
            alt=""
            className="absolute inset-0 hidden h-full w-full object-cover object-center sm:block"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        )
      ) : (
        <div className="absolute inset-0 hidden bg-gradient-to-b from-sky-400 via-cyan-200 to-emerald-100 sm:block" />
      )}

      {/* MOBILE BACKGROUND */}
      {mobileAsset?.url ? (
        mobileIsVideo ? (
          <video
            src={mobileAsset.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
          />
        ) : (
          <img
            src={mobileAsset.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        )
      ) : asset?.url ? (
        desktopIsVideo ? (
          <video
            src={asset.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
          />
        ) : (
          <img
            src={asset.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        )
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-cyan-200 to-emerald-100 sm:hidden" />
      )}

      {/* Slight readability layer */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}

function PixelCloud() {
  return (
    <div className="grid grid-cols-6 gap-0 opacity-45">
      {[
        0, 0, 1, 1, 0, 0,
        0, 1, 1, 1, 1, 0,
        1, 1, 1, 1, 1, 1,
      ].map((filled, index) => (
        <div
          key={index}
          className={`h-4 w-4 sm:h-5 sm:w-5 ${
            filled
              ? 'bg-white'
              : 'bg-transparent'
          }`}
        />
      ))}
    </div>
  )
}

/* ---------------- AVATAR ---------------- */

function PixelAvatarPlaceholder() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-[96%] w-[96%]"
      shapeRendering="crispEdges"
      aria-label="Pixel RPG character placeholder"
      preserveAspectRatio="xMidYMax meet"
    >
      <rect width="16" height="16" fill="#fde047" />

      <rect
        x="4"
        y="14"
        width="8"
        height="1"
        fill="#a16207"
      />

      <rect
        x="5"
        y="2"
        width="6"
        height="1"
        fill="#172554"
      />

      <rect
        x="4"
        y="3"
        width="8"
        height="2"
        fill="#172554"
      />

      <rect
        x="5"
        y="5"
        width="6"
        height="4"
        fill="#fdba74"
      />

      <rect
        x="6"
        y="6"
        width="1"
        height="1"
        fill="#0f172a"
      />

      <rect
        x="9"
        y="6"
        width="1"
        height="1"
        fill="#0f172a"
      />

      <rect
        x="4"
        y="9"
        width="8"
        height="3"
        fill="#7c3aed"
      />

      <rect
        x="3"
        y="10"
        width="1"
        height="3"
        fill="#fdba74"
      />

      <rect
        x="12"
        y="10"
        width="1"
        height="3"
        fill="#fdba74"
      />

      <rect
        x="5"
        y="12"
        width="2"
        height="3"
        fill="#1e3a8a"
      />

      <rect
        x="9"
        y="12"
        width="2"
        height="3"
        fill="#1e3a8a"
      />

      <rect
        x="13"
        y="7"
        width="1"
        height="6"
        fill="#64748b"
      />

      <rect
        x="12"
        y="9"
        width="3"
        height="1"
        fill="#78350f"
      />
    </svg>
  )
}

/* ---------------- SECTIONS ---------------- */

function GameSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-slate-300/70 px-4 py-8 text-center sm:px-6 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-black uppercase sm:text-3xl">
          {title}
        </h2>

        <div className="mt-5">
          {children}
        </div>
      </div>
    </section>
  )
}

/* ---------------- STATS ---------------- */

function MiniStat({
  emoji,
  label,
  value,
}: {
  emoji: string
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border-[3px] border-slate-900 bg-white/90 p-3 shadow-[3px_3px_0_#0f172a]">
      <div className="text-xl">
        {emoji}
      </div>

      <p className="mt-1 font-mono text-xs font-black uppercase tracking-wide text-slate-600">
        {label}
      </p>

      <p className="mt-1 text-2xl font-black text-violet-600">
        {value}
      </p>
    </div>
  )
}

/* ---------------- TIMELINE ---------------- */

function TimelineRow({
  item,
  last,
}: {
  item: TimelineItem
  last: boolean
}) {
  return (
    <div className="relative flex gap-4 text-left">
      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[3px] border-slate-900 bg-yellow-300 text-base font-black">
          ⭐
        </div>

        {!last && (
          <div className="min-h-24 w-[3px] flex-1 bg-slate-400/60" />
        )}
      </div>

      <div className="pb-6">
        <p className="font-mono text-sm font-black uppercase tracking-wide text-violet-600">
          {item.yearLabel}
        </p>

        <h3 className="mt-1 text-xl font-black">
          {item.title}
        </h3>

        {item.role && (
          <p className="mt-1 text-base font-bold text-blue-600">
            🎯 {item.role}
          </p>
        )}

        {item.summary && (
          <p className="mt-2 text-base leading-7 text-slate-700">
            {item.summary}
          </p>
        )}

        {item.unlocked &&
          item.unlocked.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.unlocked.map((value) => (
                <SmallTag key={value}>
                  ✨ {value}
                </SmallTag>
              ))}
            </div>
          )}
      </div>
    </div>
  )
}

/* ---------------- QUESTS ---------------- */

function QuestCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  return (
    <article className="rounded-[18px] border-[3px] border-slate-900 bg-white/95 p-5 text-left shadow-[4px_4px_0_#0f172a]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-black uppercase tracking-wide text-blue-600">
            ⚔ Quest • {project.yearLabel}
          </p>

          <h3 className="mt-2 text-xl font-black">
            {project.title}
          </h3>
        </div>

        {project.status && (
          <span className="rounded-lg border-2 border-slate-900 bg-lime-300 px-2 py-1 font-mono text-xs font-black">
            {statusLabels[project.status] ??
              project.status}
          </span>
        )}
      </div>

      {project.shortDescription && (
        <p className="mt-3 text-base leading-7 text-slate-700">
          {project.shortDescription}
        </p>
      )}

      {project.technologies &&
        project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map(
              (technology) => (
                <SmallTag key={technology}>
                  {technology}
                </SmallTag>
              ),
            )}
          </div>
        )}

      <button
        type="button"
        onClick={onOpen}
        className={`mt-5 ${clickableClass}`}
      >
        ↗ Open Quest
      </button>
    </article>
  )
}

function CompactProjectGroup({
  emoji,
  title,
  projects,
  onOpen,
}: {
  emoji: string
  title: string
  projects: Project[]
  onOpen: (project: Project) => void
}) {
  return (
    <div className="mx-auto mt-7 max-w-xl">
      <p className="font-mono text-sm font-black uppercase tracking-wide text-slate-600">
        {emoji} {title}
      </p>

      <div className="mt-3 divide-y divide-slate-300 rounded-2xl border-[3px] border-slate-900 bg-white/90 px-5 shadow-[3px_3px_0_#0f172a]">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex items-center justify-between gap-4 py-4 text-left"
          >
            <div>
              <h3 className="font-black">
                {project.title}
              </h3>

              <p className="mt-1 font-mono text-xs font-bold text-violet-600">
                {project.yearLabel}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpen(project)}
              className={`${clickableClass} flex h-11 w-11 items-center justify-center px-0 py-0 text-lg no-underline`}
              aria-label={`Open ${project.title}`}
            >
              🔍
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------- MODAL ---------------- */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const proofs = project.proofs ?? []

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[22px] border-[4px] border-slate-900 bg-slate-200 p-5 text-slate-900 shadow-[8px_8px_0_#0f172a] sm:p-7"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <button
          type="button"
          onClick={onClose}
          className={`${clickableClass} sticky top-0 z-20 ml-auto flex h-10 w-10 items-center justify-center px-0 py-0 text-lg no-underline`}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="-mt-7 text-center">
          <p className="font-mono text-sm font-black uppercase tracking-wide text-violet-700">
            🎮 Quest Details
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
            {project.title}
          </h2>

          {project.yearLabel && (
            <p className="mt-2 font-mono text-sm font-black text-blue-700">
              🗓 {project.yearLabel}
            </p>
          )}
        </div>

        {project.shortDescription && (
          <p className="mt-6 text-center text-base leading-7 text-slate-700">
            {project.shortDescription}
          </p>
        )}

        {project.ndaNote && (
          <div className="mt-5 rounded-xl border-2 border-slate-900 bg-yellow-100 p-4 text-sm leading-6 text-slate-900">
            🔒 {project.ndaNote}
          </div>
        )}

        {project.technologies &&
          project.technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {project.technologies.map(
                (technology) => (
                  <SmallTag key={technology}>
                    🧩 {technology}
                  </SmallTag>
                ),
              )}
            </div>
          )}

        {(project.liveUrl ||
          project.githubUrl ||
          project.playStoreUrl) && (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {project.liveUrl && (
              <ActionLink
                href={project.liveUrl}
                label="Live"
                icon="↗"
              />
            )}

            {project.githubUrl && (
              <ActionLink
                href={project.githubUrl}
                label="Source"
                icon="↗"
              />
            )}

            {project.playStoreUrl && (
              <ActionLink
                href={project.playStoreUrl}
                label="Play Store"
                icon="↗"
              />
            )}
          </div>
        )}

        <div className="mt-7 border-t border-slate-400 pt-6">
          <h3 className="text-center text-xl font-black">
            📂 Proofs & Evidence
          </h3>

          {proofs.length === 0 ? (
            <p className="mt-4 text-center text-base text-slate-600">
              No public evidence has been added yet.
            </p>
          ) : (
            <div className="mt-5 space-y-5">
              {proofs.map((proof) => (
                <ProofCard
                  key={proof._key}
                  proof={proof}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProofCard({
  proof,
}: {
  proof: ProjectProof
}) {
  return (
    <div className="overflow-hidden rounded-xl border-[3px] border-slate-900 bg-white shadow-[3px_3px_0_#0f172a]">
      {proof.kind === 'image' &&
        proof.image?.asset?.url && (
          <img
            src={proof.image.asset.url}
            alt={
              proof.image.alt ??
              proof.title ??
              'Project proof'
            }
            className="max-h-[520px] w-full object-contain"
          />
        )}

      {proof.kind === 'video' &&
        proof.video?.asset?.url && (
          <video
            src={proof.video.asset.url}
            controls
            playsInline
            preload="metadata"
            className="max-h-[520px] w-full bg-black"
          />
        )}

      <div className="p-4">
        {proof.title && (
          <h4 className="text-lg font-black">
            {proof.kind === 'image' && '🖼 '}
            {proof.kind === 'video' && '🎞 '}
            {proof.kind === 'file' && '📁 '}
            {proof.kind === 'link' && '🔗 '}
            {proof.title}
          </h4>
        )}

        {proof.caption && (
          <p className="mt-2 text-base leading-7 text-slate-600">
            {proof.caption}
          </p>
        )}

        {proof.kind === 'file' &&
          proof.file?.asset?.url && (
            <div className="mt-3">
              <ActionLink
                href={proof.file.asset.url}
                label="Download / Open File"
                icon="⬇"
              />
            </div>
          )}

        {proof.kind === 'link' &&
          proof.url && (
            <div className="mt-3">
              <ActionLink
                href={proof.url}
                label="Open Link"
                icon="↗"
              />
            </div>
          )}
      </div>
    </div>
  )
}

/* ---------------- COMMON ---------------- */

function ActionLink({
  href,
  label,
  icon,
  external = true,
}: {
  href: string
  label: string
  icon: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={
        external
          ? 'noreferrer'
          : undefined
      }
      className={clickableClass}
    >
      {icon} {label}
    </a>
  )
}

function SimpleCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border-[3px] border-slate-900 bg-white/90 p-5 shadow-[3px_3px_0_#0f172a]">
      {children}
    </div>
  )
}

function SmallTag({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="rounded-md border-2 border-slate-900 bg-cyan-100 px-2 py-1 text-xs font-bold sm:text-sm">
      {children}
    </span>
  )
}