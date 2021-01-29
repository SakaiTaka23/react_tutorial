import Head from 'next/head';
import ArticleList from '../Components/ArticleList';

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>web dev</title>
        <meta name='key' />
      </Head>

      <h1>welcome to next</h1>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
