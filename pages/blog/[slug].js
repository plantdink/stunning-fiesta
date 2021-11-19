import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default function Post({
    frontmatter: { title, createdAt },
    content,
}) {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ createdAt }</p>
            <div dangerouslySetInnerHTML={{ __html: marked( content ) }}></div>
        </>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync( path.join( 'posts' ));
    const paths = files.map(( filename ) => ({
        params: {
            slug: filename.replace(/\.md$/, ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const markdown = fs.readFileSync( path.join( 'posts', slug + '.md'), 'utf8');
    const { data: frontmatter, content } = matter( markdown );
    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    };
}