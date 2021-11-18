import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllPosts() {
    const postsDirectory = path.join( process.cwd(), 'posts')
    const filenames = fs.readdirSync( postsDirectory )

    return filenames.map( filename => {
        const file = fs.readFileSync( path.join( process.cwd(), 'posts', filename), 'utf8')

        // get frontmatter
        const { data } = matter( file )

        // get slug from filename
        const slug = filename.replace( /\.md$/, '')

        //return combined frontmatter and slu, build permalink
        return {
            ...data,
            permalink: `/posts/${ slug }`,
            slug,
        }
    })
}

export function getPostBySlug( slug ) {
    const file = fs.readFileSync( path.join( process.cwd(), 'posts', `${ slug }.md`), 'utf8')

    const {
        content,
        data,
    } = matter( file )

    const body = remark().use( html ).processSync( content ).toString()

    return {
        ...data,
        body,
        slug,
    }
}