import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
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

const Title = () => {
  return <h1>React.js & Next.js超入門</h1>;
};

const Author = () => {
  return (
    <h4 style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem' }}>
      掌田津耶乃
    </h4>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
