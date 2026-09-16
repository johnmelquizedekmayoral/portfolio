import {defineField, defineType} from 'sanity'

export const timelineEntry = defineType({
  name: 'timelineEntry',
  title: 'Timeline Entry',
  type: 'document',

  fields: [
    defineField({
      name: 'yearLabel',
      title: 'Year / Period',
      type: 'string',
      description: 'Example: 2020–2022',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Character Class / Role',
      type: 'string',
      description: 'Example: Builder, Game Developer, Engineering Student',
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'unlocked',
      title: 'Skills / Abilities Unlocked',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'image',
      title: 'Era Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'yearLabel',
      media: 'image',
    },
  },
})