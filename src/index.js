import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/71wudfMLJML._AC_UL320_.jpg',
  title: 'React.js & Next.js超入門',
  author: '掌田津耶乃',
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71-wOEcxOKL._AC_UL320_.jpg',
  title: 'React開発 現場の教科書',
  author: '石橋 啓太 ',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>reactに関する本</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}

const Book = ({img,title,author,children}) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
