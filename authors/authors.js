import Head from 'next/head'
import Link from 'next/link'

export function getAllAuthors() {
    const authorsDirectory = path.join( process.cwd(), '_authors')
    const filenames = fs.readdirSync(authorsDirectory)

    return filenames.map( filename => {
        const file = fs.readFileSync( path.join( process.cwd(), '_authors', filename), 'utf8')

        //get data for each author
        const data = JSON.parse( file )

        //get slug from filename
        const slug = filename.replace( /\.json/, '')

        //return combined slug and frontmatter & build the permalink
        return {
            ...data,
            slug,
            permalink: `/authors/${ slug }`,
            profilePictureUrl: `${ slug }.jpg`,
        }
    })
}

export function getAuthorBySlug( slug ) {
    const file = fs.readFileSync( path.join( process.cwd(), '_authors', `${ slug }.json`), 'utf8')

    const data = JSON.parse( file )

    return {
        ...data,
        permalink: `/authors/${ slug }`,
        profilePictureUrl: `/${ slug }.jpg`,
        slug,
    }
}