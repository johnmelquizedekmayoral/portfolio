import {defineQuery} from 'next-sanity'

export const PORTFOLIO_QUERY = defineQuery(`
{
  "profile": *[_id == "profile"][0]{
    fullName,
    credential,
    professionalTitles,
    location,
    email,
    phone,
    heroTagline,
    bio,
    githubUrl,
    linkedinUrl,

    mainPhoto{
      alt,
      asset->{
        _id,
        url
      }
    },

    pixelAvatar{
      asset->{
        _id,
        url,
        mimeType,
        originalFilename
      }
    },

    resume{
      asset->{
        _id,
        url,
        originalFilename
      }
    }
  },

  "settings": *[_id == "siteSettings"][0]{
    currentQuest,
    availabilityStatus,
    theme,
    showTimeline,
    showProjects,
    showSkills,
    showEngineering,
    showAchievements,
    showExperience,
    sectionOrder,
    seoTitle,
    seoDescription,

    backgroundMedia{
      asset->{
        _id,
        url,
        mimeType,
        originalFilename
      }
    }
  },

  "timeline": *[_type == "timelineEntry"]
    | order(sortOrder desc){
      _id,
      yearLabel,
      title,
      role,
      summary,
      unlocked,
      sortOrder
    },

  "projects": *[_type == "project"]
    | order(sortOrder asc){
      _id,
      title,
      "slug": slug.current,
      yearLabel,
      projectType,
      visibility,
      status,
      featured,
      shortDescription,
      technologies,
      liveUrl,
      githubUrl,
      playStoreUrl,
      ndaNote,
      sortOrder,

      proofs[]{
        _key,
        kind,
        title,
        caption,
        url,

        image{
          alt,
          asset->{
            _id,
            url
          }
        },

        video{
          asset->{
            _id,
            url,
            mimeType,
            originalFilename
          }
        },

        file{
          asset->{
            _id,
            url,
            mimeType,
            originalFilename
          }
        }
      }
    },

  "skills": *[_type == "skill"]
    | order(sortOrder asc){
      _id,
      name,
      category,
      experienceLevel,
      evidence,
      sortOrder
    },

  "achievements": *[_type == "achievement"]
    | order(sortOrder asc){
      _id,
      title,
      issuer,
      yearLabel,
      description,
      url,
      sortOrder
    },

  "experience": *[_type == "experience"]
    | order(sortOrder asc){
      _id,
      role,
      organization,
      experienceType,
      startDate,
      endDate,
      present,
      summary,
      highlights,
      technologies,
      confidential,
      sortOrder
    },

  "engineering": *[_type == "engineeringHighlight"]
    | order(sortOrder asc){
      _id,
      title,
      yearLabel,
      summary,
      tools,
      sortOrder
    }
}
`)

export const SEO_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    seoTitle,
    seoDescription
  }
`)