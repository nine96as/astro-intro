import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

const GET = async (context) => {
  const posts = await getCollection('posts')

  return rss({
    title: 'Asto Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}

export default GET
