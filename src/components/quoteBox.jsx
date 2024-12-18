import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/quoteBox.css";

const QuoteBox = ({ quote, author, buttons }) => {
    const quoteRef = useRef(null);
    const authorRef = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
      );
      gsap.fromTo(
        authorRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' }
      );
    }, [quote, author]);
  
    return (
      <div id="quote-box">
        <div className="quote-text" ref={quoteRef}>
          <span id="text">{quote}</span>
        </div>
        <div className="quote-author" ref={authorRef}>
          <span id="author">{`— ${author}`}</span>
        </div>
        <div className="buttonContainer">{buttons}</div>
      </div>
    );
  };
  
  export default QuoteBox;
