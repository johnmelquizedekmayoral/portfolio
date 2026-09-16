import {defineField, defineType} from 'sanity'

export const achievement = defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Achievement',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'issuer',
      title: 'Issuer / Organization',
      type: 'string',
    }),

    defineField({
      name: 'yearLabel',
      title: 'Year / Date',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'image',
      title: 'Certificate / Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'url',
      title: 'Verification / Related URL',
      type: 'url',
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