import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

const books = [
  {
    id:1,
    img: 'https://m.media-amazon.com/images/I/71wudfMLJML._AC_UL320_.jpg',
    title: 'React.js & Next.js超入門',
    author: '掌田津耶乃',
  },
  {
    id:2,
    img: 'https://m.media-amazon.com/images/I/71-wOEcxOKL._AC_UL320_.jpg',
    title: 'React開発 現場の教科書',
    author: '石橋 啓太 ',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
