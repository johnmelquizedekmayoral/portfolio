import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'currentQuest',
      title: 'Current Quest',
      type: 'string',
      description: 'Example: Building AI Automation Systems',
    }),

    defineField({
      name: 'availabilityStatus',
      title: 'Availability Status',
      type: 'string',
      description: 'Example: Available for remote opportunities',
    }),

    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Retro RPG', value: 'retro'},
          {title: 'Minimal', value: 'minimal'},
          {title: 'Terminal', value: 'terminal'},
          {title: 'Engineering HUD', value: 'engineering'},
        ],
      },
      initialValue: 'retro',
    }),

    defineField({
      name: 'showTimeline',
      title: 'Show Timeline',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'showProjects',
      title: 'Show Projects',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'showSkills',
      title: 'Show Skills',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'showEngineering',
      title: 'Show Engineering',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'showAchievements',
      title: 'Show Achievements',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'showExperience',
      title: 'Show Experience',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'sectionOrder',
      title: 'Section Order',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Timeline', value: 'timeline'},
              {title: 'Projects', value: 'projects'},
              {title: 'Experience', value: 'experience'},
              {title: 'Skills', value: 'skills'},
              {title: 'Engineering', value: 'engineering'},
              {title: 'Achievements', value: 'achievements'},
            ],
          },
        },
      ],
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})