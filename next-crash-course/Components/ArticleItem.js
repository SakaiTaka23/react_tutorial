import Link from 'next/link';
import React from 'react';

const ArticleItem = ({ article }) => {
  return (
    <Link href='/article/[:id]' as={`/article/${article.id}`}>
      <a>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
