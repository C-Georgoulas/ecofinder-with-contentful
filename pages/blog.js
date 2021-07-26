import { createClient } from 'contentful'
import BlogList from "../components/BlogList";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({content_type: 'post'})

    return { 
        props: {
            posts: res.items
        }
    }

}


export default function Posts({posts}) {
    console.log(posts)
    return (
        <div>
      <BlogList posts={posts} />
        </div>
    )
}