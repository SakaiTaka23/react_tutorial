import React from 'react';
import ReactDom from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image/>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => {
  return (
    <img
      src='https://m.media-amazon.com/images/I/71wudfMLJML._AC_UL320_.jpg'
      alt=''
    />
  );
};

const Title = () =>
{
  return <h1>React.js & Next.js超入門</h1>;
};

const Author = () =>
{
  return <h4>掌田津耶乃</h4>;
}

ReactDom.render(<BookList />, document.getElementById('root'));
