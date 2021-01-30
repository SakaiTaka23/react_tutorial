import Link from 'next/link';
import React from 'react';

const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home link tag</a>
        </Link>
        <br />
        <a href='/'>Back to home a tag</a>
      </h2>
    </>
  );
};

export default FirstPost;
