import Image from 'next/image'
import Link from 'next/link'

import { getAllAuthors, getAuthorBySlug } from './authors'

export default function Authors({ authors }) {
    return (
        <div className='authors'>
            <h1>Authors</h1>

            { authors.map( author => (
                <div key={ author.slug }>
                    <h2>
                        <Link href={ author.permalink }>
                            <a>{ author.name }</a>
                        </Link>
                    </h2>

                    <Image alt={ author.name } src={ author.profilePictureUrl } height="40" width="40" />

                    <Link href={ author.permalink }>
                        <a>Go to profile →</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export function getStaticProps() {
    return {
        props: {
            authors: getAllAuthors(),
        },
    }
}