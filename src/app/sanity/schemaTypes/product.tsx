// Import Sanity client (if not already imported)
import Product from '@/app/types/page';
import { client } from '../lib/client';

// Define the product schema
export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc: Product) => `${doc.category ? doc.category.toLowerCase() + '-' : ''}${doc.productName.toLowerCase().replace(/\s+/g, '-')}`, // Combining category and product name
        maxLength: 96,
      },
      validation: (Rule: any) =>
        Rule.required().custom(async (slug: { current: string }) => {
          // The slug is an object, so we need to access 'slug.current'
          const existing = await client.fetch(
            `*[_type == "product" && slug.current == $slug][0]`,
            { slug: slug.current }
          );
          if (existing) {
            return 'Slug already in use';
          }
          return true;
        }),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
