import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Skill',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'AI / Automation', value: 'ai'},
          {title: 'Programming', value: 'programming'},
          {title: 'Web Development', value: 'web'},
          {title: 'Game Development', value: 'game'},
          {title: 'Engineering', value: 'engineering'},
          {title: 'Tools', value: 'tools'},
          {title: 'Core / General', value: 'core'},
        ],
      },
    }),

    defineField({
      name: 'experienceLevel',
      title: 'Experience Status',
      type: 'string',
      options: {
        list: [
          {title: 'Experienced', value: 'experienced'},
          {title: 'Working Knowledge', value: 'working'},
          {title: 'Currently Developing', value: 'developing'},
        ],
      },
    }),

    defineField({
      name: 'evidence',
      title: 'Evidence / Notes',
      type: 'text',
      rows: 3,
      description:
        'Optional internal/public explanation of where this skill was used.',
    }),

    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})