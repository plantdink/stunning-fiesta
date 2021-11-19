import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className='post-teaser'>
            <h1>{ post.frontmatter.title }</h1>
            <p>{ post.frontmatter.createdAt }</p>
            <p>{ post.frontmatter.excerpt }</p>
            <Link href={ `/blog/${ post.slug }` }>
                <a>Read more...</a>
            </Link>            
            <hr />
        </div>
    )
}