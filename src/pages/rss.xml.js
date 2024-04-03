import rss, { pagesGlobToRssItems } from '@astrojs/rss'

const GET = async (context) => {
  return rss({
    title: 'Asto Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  })
}

export default GET
