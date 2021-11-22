import Image from 'next/image'
import Link from 'next/link'

import { getAllAuthors } from './authors'
import { getAllPosts } from '../blog/posts'

export default function Authors({ authors }) {
    return (
        <>
            <div className='authors'>
                <h1>Authors</h1>

                { authors.map( author => (
                <div key={ author.slug }>
                    <h2>
                    <Link href={ author.permalink }>
                        <a>{ author.name }</a>
                    </Link>
                    </h2>
                </div>
                ))}
            </div>
        </>
    )
}

export function getStaticProps() {
    return {
        props: {
            authors: getAllAuthors().map( author => ({
                ...author,
                posts: getAllPosts().filter( post => post.author === author.slug ),
            })),
        }
    }
}