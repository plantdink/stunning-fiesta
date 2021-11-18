import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'

import Layout from '/components/Layout'

export default function Post({
    frontmatter: { title, createdAt, excerpt },
    content,
}) {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name='description' content={ excerpt } />
            </Head>

            <Layout>
                <h1>{ title }</h1>
                <p>{ createdAt }</p>
                <div dangerouslySetInnerHTML={{ __html: marked( content ) }}></div>
            </Layout>
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