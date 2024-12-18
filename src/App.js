import React from "react";
import QuoteBox from "./components/quoteBox";
import QuoteButtons from "./components/quoteButtons";
import './styles/App.css';

import './API/quotesApi';

import useRandomQuote from './hooks/useRandomQuote';  

function App() {
  const { quote, author, tweetText, getRandomQuote } = useRandomQuote();

  return (
    <div className="App">
      <div className="wrapper">
        <QuoteBox 
          quote={quote} 
          author={author} 
          buttons={
            <QuoteButtons getRandomQuote={getRandomQuote} tweetText={tweetText} />
          } 
        />
      </div>
    </div>
  );
}

export default App;



