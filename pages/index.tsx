// import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';

// import { PostType } from '../types/post';

// type IndexProps = {
//   posts: PostType[];
// }; { posts }: IndexProps

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <h1>Home</h1>
      <div className='homePara'>
        <div>
          <p style={{ fontSize: 20}} className="homeFirst">This is my website. 
          I may post random stuff here as my so called blogs. 
          Read it once just to criticise :).
          </p>
        </div>
        <div className='homeImg'>
          <Image src="/images/dp2.jpg" height={300} width={300}/>
        </div>
      </div>

      {/* <img src="public/images/dp.jpg"/> */}

      {/* {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))} */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
