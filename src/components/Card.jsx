import React from 'react';
import Author from './Author';
import Button from './Button';
import Content from './QuoteBox';
import '../css/Card.css';

const Card = ({content, author, cb, color}) => {
  
  return (
    <div className='Card'>
        <Content content={content} color={color}/>
        <Author author={author} color={color}/>
        <Button cb={cb} color={color}/>
    </div>
  );
}

export default Card