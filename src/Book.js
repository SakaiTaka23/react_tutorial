import React from 'react';

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  const clickHandelr = () => {
    alert('you clicked the button');
  };
  const complexExample = () => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt='' />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandelr}>
        click this
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        click this too
      </button>
    </article>
  );
};

export default Book;
