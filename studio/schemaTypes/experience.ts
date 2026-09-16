import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',

  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'organization',
      title: 'Organization / Client',
      type: 'string',
    }),

    defineField({
      name: 'experienceType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Employment', value: 'employment'},
          {title: 'Freelance', value: 'freelance'},
          {title: 'Academic', value: 'academic'},
          {title: 'Personal Project', value: 'personal'},
          {title: 'Volunteer', value: 'volunteer'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),

    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),

    defineField({
      name: 'present',
      title: 'Currently Active',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies / Tools',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'confidential',
      title: 'Confidential / NDA',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'role',
      subtitle: 'organization',
    },
  },
})