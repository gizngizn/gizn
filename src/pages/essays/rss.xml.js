import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { themeConfig } from '../../config';

export async function GET(context) {
  const { title, author, language } = themeConfig.site;

  const essays = await getCollection('essays', ({ data }) => !data.draft);

  const items = essays
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.created,
      description: post.data.description || '',
      link: `/essays/${post.slug}/`,
    }))
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${title} - Essays`,
    description: 'Essays feed',
    site: context.site,
    items,
    customData: `<language>${language}</language><author>${author}</author>`,
  });
}
