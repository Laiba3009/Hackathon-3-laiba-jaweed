'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Import environment variables
import { apiVersion, dataset, projectId } from './src/app/sanity/env';

// Import schema
import { schema } from './src/app/sanity/schemaTypes';

// Import custom structure (if needed)
import { structure } from './src/app/sanity/structure';

export default defineConfig({
  basePath: '/studio', // Base path for the Studio
  projectId, // Project ID from environment variables
  dataset, // Dataset from environment variables
  schema, // Schema definitions
  plugins: [
    structureTool({ structure }), // Custom structure (if defined)
    visionTool({ defaultApiVersion: apiVersion }), // GROQ query tool
  ],
});
