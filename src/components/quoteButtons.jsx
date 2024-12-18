import React from 'react';
import Button from './button';
import LinkButton from './linkButton'

const QuoteButtons = ({ getRandomQuote, tweetText }) => {
  return (
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
};

export default QuoteButtons;
