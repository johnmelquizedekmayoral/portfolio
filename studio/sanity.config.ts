import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'John Melquizedek Mayoral Portfolio',

  projectId: 'j7w1zrr6',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
