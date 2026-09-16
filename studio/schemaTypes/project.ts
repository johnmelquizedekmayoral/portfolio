import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'yearLabel',
      title: 'Year / Period',
      type: 'string',
    }),

    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'AI / Automation', value: 'ai'},
          {title: 'Web Development', value: 'web'},
          {title: 'Game Development', value: 'game'},
          {title: 'Engineering', value: 'engineering'},
          {title: 'Programming', value: 'programming'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'visibility',
      title: 'Visibility',
      type: 'string',
      options: {
        list: [
          {title: 'Public / Featured Work', value: 'public'},
          {title: 'Limited / NDA', value: 'limited'},
          {title: 'Archive', value: 'archive'},
        ],
        layout: 'radio',
      },
      initialValue: 'public',
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'In Progress', value: 'inProgress'},
          {title: 'Completed', value: 'completed'},
          {title: 'Published', value: 'published'},
          {title: 'Archived', value: 'archived'},
        ],
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies / Tools',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'liveUrl',
      title: 'Live Project URL',
      type: 'url',
    }),

    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),

    defineField({
      name: 'playStoreUrl',
      title: 'Play Store URL',
      type: 'url',
    }),

    defineField({
      name: 'ndaNote',
      title: 'NDA / Confidentiality Note',
      type: 'text',
      rows: 3,
      hidden: ({document}) => document?.visibility !== 'limited',
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
      media: 'images.0',
    },
  },
})