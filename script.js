const api = "https://api.quotable.io/quotes/random";
const qText = document.querySelector(".quote-text");
const qAuthor = document.querySelector(".quote-author");
const btnNext = document.querySelector(".btn-new");
const loader = document.querySelector(".loader");

const getQuote = async function () {
  const res = await fetch(api);
  const data = await res.json();
  loader.classList.add("hide");
  let quote = {};
  quote.author = data[0].authorSlug;
  quote.content = data[0].content;
  qText.textContent = quote.content;
  qAuthor.textContent = quote.author;
};

getQuote();

btnNext.addEventListener("click", () => {
  loader.classList.remove("hide");
  getQuote();
});
