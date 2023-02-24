import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const quoteAPI = async () => {
    let arrayQuotes = [];

    const data = await axios.get('https://api.quotable.io/random');
    arrayQuotes = data.data;
    setQuote(arrayQuotes.content);
    setAuthor(arrayQuotes.author);
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="quoteContainer">
      <div className="quoteBox">{quote}</div>
      <p className="quoteAuthor">
        {' '}
        by-
        {author}
      </p>

      <button type="button" className="quoteBtn" onClick={quoteAPI}>SEE QUOTES </button>
    </div>
  );
};

export default Quote;
