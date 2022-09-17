/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/** An Array of qoute objects. */
const quotes = [
  { quote: "Whatever the mind of man can conceive and believe, it can achieve.", source: 'Napoleon Hill', citation: 'Think and Grow Rich', year: 1937 },
  { quote: "You may be disappointed if you fail, but you are doomed if you don't try.", source: 'Beverly Sills' },
  { quote: "I failed my way to success", source: 'Thomas Edison' },
  { quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", source: 'Thomas A. Edison' },
  { quote: "May you live all the days of your life.", source: 'Jonathan Swift' }
];

/**
 * Returns a random quote object from the quotes array.
 * @returns {object} The random quote object.
 */
function getRandomQuote() {
  const randomIndexNumber = Math.floor(Math.random() * quotes.length)
  const randomQuoteObj = quotes[randomIndexNumber];
  return randomQuoteObj;
}

/** Prints the random quote to the screen. */
function printQuote() {
  const quoteObj = getRandomQuote();

  const quote = quoteObj.quote;
  const source = quoteObj.source;
  const citation = quoteObj.citation;
  const year = quoteObj.year;

  let htmlString = `<p class="quote">${quote}</p><p class="source">${source}`;

  if (citation) {
    htmlString += `<span class="citation">${citation}</span>`;
  }

  if (year) {
    htmlString += `<span class="year">${year}</span>`
  }

  htmlString += `</p>`;

  document.getElementById('quote-box').innerHTML = htmlString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);