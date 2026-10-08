import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.speedboatcruisealleppey.com';
  
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamically generate blog post URLs
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
  let blogRoutes: MetadataRoute.Sitemap = [];
  
  try {
    if (fs.existsSync(blogDir)) {
      const entries = fs.readdirSync(blogDir, { withFileTypes: true });
      blogRoutes = entries
        .filter(entry => entry.isDirectory() && entry.name !== '[slug]')
        .map(entry => ({
          url: `${baseUrl}/blog/${entry.name}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.9,
        }));
    }
  } catch (error) {
    console.error('Failed to generate dynamic sitemap for blog posts:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
