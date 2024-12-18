import React from "react";
import QuoteBox from "./components/quoteBox";
import Button from "./components/button";
import LinkButton from "./components/linkButton";
import './styles/App.css';

import './API/quotesApi';

import useRandomQuote from './hooks/useRandomQuote';  

function App() {
  const { quote, author, getRandomQuote } = useRandomQuote();
  const tweetText = `${quote} - ${author}  #quotes`;

  const btns = (
    <>
      <Button id="new-quote" innerText="New quote" onClick={getRandomQuote} />
      <LinkButton
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`}
        id="tweet-quote"
        title="Tweet this quote!"
        icon="fa fa-twitter"
      />
    </>
  );

  return (
    <div className="App">
      <div className="wrapper">
        <QuoteBox quote={quote} author={author} buttons={btns} />
      </div>
    </div>
  );
}

export default App;



