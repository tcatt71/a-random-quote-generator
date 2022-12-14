/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/** Array of qoute objects. */
const quotes = [
  { quote: "Whatever the mind of man can conceive and believe, it can achieve.", source: 'Napoleon Hill', citation: 'Think and Grow Rich', year: 1937, tag: '#goals' },
  { quote: "You may be disappointed if you fail, but you are doomed if you don't try.", source: 'Beverly Sills', tag: '#goals' },
  { quote: "I failed my way to success", source: 'Thomas Edison', tag: '#goals' },
  { quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", source: 'Thomas A. Edison', tag: '#goals' },
  { quote: "May you live all the days of your life.", source: 'Jonathan Swift', tag: '#insparation' }
];

/**
 * Returns a random quote object from the quotes array.
 * @returns {object} A random quote object.
 */
function getRandomQuote() {
  const randomIndexNumber = Math.floor(Math.random() * quotes.length)
  const randomQuoteObj = quotes[randomIndexNumber];
  return randomQuoteObj;
}

/** Changes the background color of the webpages body by means of a random hue. */
function changeBodyBackgroundColor() {
  const body = document.querySelector('body');
  const randomHue = Math.ceil(Math.random() * 360);

  body.style.backgroundColor = `hsl(${randomHue}, 54%, 49%)`;
}

/** Prints a random quote to the screen. */
function printQuote() {
  const quoteObj = getRandomQuote();

  const quote = quoteObj.quote;
  const source = quoteObj.source;
  const citation = quoteObj.citation;
  const year = quoteObj.year;
  const tag = quoteObj.tag;

  // Is it best practice to keep the resetTimer function within the printQuote function or make it global?
  function resetTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(printQuote, 10000);
  }

  let htmlString = `<p class="quote">${quote}</p><p class="source">${source}`;

  if (citation) {
    htmlString += `<span class="citation">${citation}</span>`;
  }

  if (year) {
    htmlString += `<span class="year">${year}</span>`
  }

  htmlString += `<span class="tag"><a href="#">${tag}</a><span></p>`;

  document.getElementById('quote-box').innerHTML = htmlString;
  changeBodyBackgroundColor();
  resetTimer();
}

// To display a new quote repeatedly after a certain amount of time after the page loads if the 'Show another quote' button has not been clicked.
let intervalID = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);