import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'template',
  title: 'Website Templates',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Template Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preview',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Restaurant', value: 'Restaurant' },
          { title: 'Salon & Spa', value: 'Salon & Spa' },
          { title: 'E-commerce', value: 'E-commerce' },
          { title: 'Professional Services', value: 'Professional Services' },
          { title: 'Portfolio', value: 'Portfolio' },
          { title: 'Landing Page', value: 'Landing Page' },
          { title: 'Bakery & Cafe', value: 'Bakery & Cafe' },
          { title: 'Health & Wellness', value: 'Health & Wellness' },
          { title: 'Other (Custom)', value: 'Custom' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customCategory',
      title: 'Custom Category Name',
      type: 'string',
      description: 'Only fill this if you selected "Other (Custom)" above',
      hidden: ({ parent }) => parent?.category !== 'Custom',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for searching and filtering (e.g., modern, elegant, minimal)',
    }),
    defineField({
      name: 'popular',
      title: 'Popular Template',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'preview',
    },
  },
})
