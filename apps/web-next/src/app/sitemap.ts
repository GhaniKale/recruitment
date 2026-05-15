import { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://akuursauyunan.web.id';

  const supabase = await createClient();
  const { data: jobs } = await supabase.from('jobs').select('id, updated_at, status').eq('status', 'open');

  const jobEntries: MetadataRoute.Sitemap = (jobs || []).map((job) => ({
    url: `${baseUrl}/jobs/${job.id}`,
    lastModified: job.updated_at ? new Date(job.updated_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cara-melamar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biaya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  return [...staticEntries, ...jobEntries];
}
