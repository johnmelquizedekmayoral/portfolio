import {defineField, defineType} from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',

  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'credential',
      title: 'Credential',
      type: 'string',
      description: 'Example: ECT',
    }),

    defineField({
      name: 'professionalTitles',
      title: 'Professional Titles',
      type: 'array',
      of: [{type: 'string'}],
      description:
        'Example: Electronics Engineering Graduate, AI-Assisted Developer, Game Developer',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),

    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'mainPhoto',
      title: 'Main Hero Photo',
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
      ],
    }),

    defineField({
      name: 'sidePhotos',
      title: 'Additional Hero Versions',
      description:
        'The three alternate versions of you shown beside the main hero image.',
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
              name: 'attire',
              title: 'Attire / Version',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),

    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),

    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),

    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
    }),

    defineField({
      name: 'pixelAvatar',
      title: 'Pixel / RPG Avatar',
      type: 'file',
      description:
        'Upload a PNG, WebP, or animated GIF. Used as the RPG character on the homepage.',
    }),
  ],

  preview: {
    select: {
      title: 'fullName',
      subtitle: 'credential',
      media: 'mainPhoto',
    },
  },
})

