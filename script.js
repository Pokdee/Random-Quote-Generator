const api = "https://api.quotable.io/quotes/random";
const qText = document.querySelector(".quote-text");
const qAuthor = document.querySelector(".quote-author");

console.log(qText, qAuthor);
const getQuote = async function () {
  const res = await fetch(api);
  const data = await res.json();
  let quote = {};
  quote.author = data[0].authorSlug;
  quote.content = data[0].content;
  console.log(quote);
  qText.textContent = quote.content;
  qAuthor.textContent = quote.author;
};

getQuote();
