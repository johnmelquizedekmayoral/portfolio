import {defineField, defineType} from 'sanity'

export const engineeringHighlight = defineType({
  name: 'engineeringHighlight',
  title: 'Engineering Highlight',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'yearLabel',
      title: 'Year / Period',
      type: 'string',
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'tools',
      title: 'Tools / Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'image',
      title: 'Image / Schematic',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
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