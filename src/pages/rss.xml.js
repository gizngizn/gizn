import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { themeConfig } from '../config';

export async function GET(context) {
  const { title, description, author, language } = themeConfig.site;

  const essays = await getCollection('essays', ({ data }) => !data.draft);
  const stream = await getCollection('stream');

  const items = [
    ...essays.map((post) => ({
      title: post.data.title,
      pubDate: post.data.created,
      description: post.data.description || '',
      link: `/essays/${post.slug}/`,
    })),
    ...stream.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/stream/${post.slug}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title,
    description,
    site: context.site,
    items,
    customData: `<language>${language}</language><author>${author}</author>`,
  });
}
