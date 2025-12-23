import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { themeConfig } from '../config';

export async function GET(context) {
  const { title, description, author, language } = themeConfig.site;
  return rss({
    title,
    description,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>${language}</language><author>${author}</author>`,
  });
}