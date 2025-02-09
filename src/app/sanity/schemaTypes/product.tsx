import { Product } from '@/app/types/product';
import { client } from '../lib/client';

export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      description: 'The name of the product.',
      validation: (Rule: any) => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'A unique URL-friendly identifier for the product.',
      options: {
        source: (doc: Product) =>
          `${doc.category ? doc.category.toLowerCase() + '-' : ''}${doc.productName
            .toLowerCase()
            .replace(/\s+/g, '-')}`,
        maxLength: 96,
      },
      validation: (Rule: any) =>
        Rule.required().custom(async (slug: { current: string }) => {
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
      description: 'The category of the product (e.g., electronics, clothing).',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the product in USD.',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
      description: 'The number of items available in stock.',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      description: 'Available colors for the product.',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'The current status of the product.',
      options: {
        list: [
          { title: 'In Stock', value: 'in stock' },
          { title: 'Out of Stock', value: 'out of stock' },
          { title: 'Discontinued', value: 'discontinued' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The main image of the product.',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the product.',
      validation: (Rule: any) => Rule.required().min(10).max(500),
    },
  ],
};
