import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '../components/Layout'
import Post from '../components/Post'

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Developing software with a blunt instrument</title>
        <meta name='description' content='A personal blog project, powered by Next.js' />
      </Head>

      <Layout>
        <div className='posts'>
          { posts.map(( post, index ) => (
            <Post post={ post } key={ index } />
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync( path.join( 'posts' ));
  const sortOrder = ( a, z ) => {
    return new Date( z.frontmatter.createdAt ) - new Date( a.frontmatter.createdAt )
  }

  const posts = files.map(( filename ) => {
    const slug = filename.replace( /\.md$/, '');
    const markdown = fs.readFileSync(
      path.join( 'posts', filename ), 'utf8'
    );

    const { data: frontmatter } = matter( markdown );
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort( sortOrder ),
    },
  };
}