import Image from 'next/image'

import { getAllAuthors, getAuthorBySlug } from './authors'

export default function Author({ author }) {
    return (
        <div className='author'>
            <h1>{ author.name }</h1>

            <Image alt={ author.name } src={ author.profilePictureUrl } height="120" width="120" />
        </div>
    )
}

export function getStaticProps({ params }) {
    const author = getAuthorBySlug( params.slug )
    return {
        props: {
            author: {
                ...author,
            },
        },
    }
}

export function getStaticPaths() {
    return {
        fallback: false,
        paths: getAllAuthors().map( author => ({
            params: {
                slug: author.slug,
            },
        })),
    }
}