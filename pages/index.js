import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Post from '../components/Post'

export default function Posts({ posts }) {
  return (
    <>
      <div className='posts'>
        { posts.map(( post, index ) => (
        <Post post={ post } key={ index } />
        ))}
      </div>
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

<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', 'Oswald'
  }

  *{
    box-sizing: border-box;
  }
`}</style>