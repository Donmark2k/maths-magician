import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const quoteAPI = async () => {
    let arrayQuotes = [];
    try {
      const data = await axios.get('https://api.quotable.io/random');
      arrayQuotes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayQuotes.content);
      setAuthor(arrayQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <>
      <div className="quoteBox">{quote}</div>
      <p className="quoteAuthor">
        {author}
        {' '}
      </p>

      <button className="quoteBtn" onClick={quoteAPI}>GIMME QUOTES </button>
    </>
  );
};

export default Quote;
