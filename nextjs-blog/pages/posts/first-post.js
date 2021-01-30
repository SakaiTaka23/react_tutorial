import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../../Components/Layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home link tag</a>
        </Link>
        <br />
        <a href='/'>Back to home a tag</a>
      </h2>
    </Layout>
  );
};

export default FirstPost;
