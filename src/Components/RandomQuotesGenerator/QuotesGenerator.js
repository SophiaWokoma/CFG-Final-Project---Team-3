import React, { useState, useEffect } from "react";
import "./QuotesGenerator.css";
import { GetDate } from "../Date/GetDate";
import * as MiIcons from "react-icons/md";
import { getQuotesFromApi } from "./api";

const QuotesGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    getQuote();
  }, []);

  // function to fetch the quotes from the api , using Math floor to get a random number which generates a random index which we can use to get random quote from the array in api
  // quote in the api, also performs error handling, if api is unavailable.

  const getQuote = () => {
    getQuotesFromApi()
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch((e) => setError(true));
  };

  // function that calls the getQuote function
  const handleClick = () => {
    getQuote();
  };

  // function that creates new instance of SpeechSynthesisUtterance and then passes in the random quote generated from the getQuote() function
  // to the  utterance object , then we pass this utterance instance as a parameter to the speak method
  const speak = () => {
    let utterance = new SpeechSynthesisUtterance(quote);

    speechSynthesis.speak(utterance);
  };

  // function that copies the quote to the system's clipboard
  const copy = () => {
    navigator.clipboard.writeText(quote);
  };
  // function that loads twitter into a new browser window with a tweet pre-polutated with the random quote that was generated
  const twitter = () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote}`;
    window.open(tweetUrl, "_blank");
  };

  return error ? (
    <div className="quote-error">
      <p>
        This feature is currently unavailable, we are working on sorting this
        out soon. Hold tight!
      </p>
    </div>
  ) : (
    <div data-testid="custom-element" id="quote-box-wrapper">
      <div id="quote-box">
        <div id="quote-content">
          <GetDate />

          <div id="quote-text">{quote}</div>
          <div id="quote-author">{author}</div>
        </div>
        <div className="quote-buttons">
          <div className="quote-features">
            <ul>
              <li onClick={speak}>
                <MiIcons.MdVolumeUp />
              </li>
              <li onClick={copy}>
                <MiIcons.MdFileCopy />
              </li>
              <li onClick={twitter}>
                <MiIcons.MdShare />
              </li>
            </ul>
            <button onClick={handleClick} className="quote-button">
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesGenerator;
