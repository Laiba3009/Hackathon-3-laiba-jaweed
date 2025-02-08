'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Correct the import paths for environment variables
import { apiVersion, dataset, projectId } from './src/app/sanity/env' // Adjusted to point to `src/sanity/env`
import {schema  } from './src/app/sanity/schemaTypes' // Adjusted to point to `src/sanity/schemaTypes`

// You should define your custom structure for the Sanity Studio
import { structure } from './src/app/sanity/structure' // Ensure you have a structure file if needed

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }), // Ensure structure is defined and passed correctly
    // Vision is for querying with GROQ from inside the Studio
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
