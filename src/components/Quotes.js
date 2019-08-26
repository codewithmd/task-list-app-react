import React from "react";

const Quotes = props => {
  const quote = props.getQuotes();
  return (
    <div className="mt-5">
      <blockquote className="blockquote quote">
        <p className="mb-0">{quote.text}</p>
        <footer className="blockquote-footer">
          <cite title="Source Title">{quote.from}</cite>
        </footer>
      </blockquote>
    </div>
  );
};

export default Quotes;
