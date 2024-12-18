// src/hooks/useRandomQuote.js
import { useEffect, useState } from "react";
import { fetchQuotes } from "../API/quotesApi";

const useRandomQuote = () => {
  const [quote, setQuote] = useState(''); 
  const [author, setAuthor] = useState(''); 

  const getRandomQuote = () => {
    fetchQuotes().then(data => {
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      const randomQuote = data.quotes[randomIndex];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);  

  return { quote, author, getRandomQuote }; 
};

export default useRandomQuote;
