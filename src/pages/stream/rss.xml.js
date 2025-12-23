import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { themeConfig } from '../../config';

export async function GET(context) {
  const { title, author, language } = themeConfig.site;

  const stream = await getCollection('stream');

  const items = stream
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/stream/${post.slug}/`,
    }))
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${title} - Stream`,
    description: 'Stream feed',
    site: context.site,
    items,
    customData: `<language>${language}</language><author>${author}</author>`,
  });
}
