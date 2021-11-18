import fs from 'fs'
import path from 'path'

export function getAllAuthors() {
    const authorsDirectory = path.join( process.cwd(), '_site-authors')
    const filenames = fs.readdirSync( authorsDirectory )

    return filenames.map( filename => {
        const file = fs.readFileSync( path.join( process.cwd(), '_site-authors', filename), 'utf8')

        //get data for all authors
        const data = JSON.parse( file )

        //get slug from filename
        const slug = filename.replace( /\.json/, '')

        //return combined slug & build the permalink
        return {
            ...data,
            permalink: `/authors/${ slug }`,
            profilePictureUrl: `/${ slug }.jpg`,
            slug,
        }
    })
}

export function getAuthorBySlug( slug ) {
    const file = fs.readFileSync( path.join( process.cwd(), '_site-authors', `${ slug }.json`), 'utf8')

    const data = JSON.parse( file )

    return {
        ...data,
        permalink: `/authors/${ slug }`,
        profilePictureUrl: `/${ slug }.jpg`,
        slug,
    }
}