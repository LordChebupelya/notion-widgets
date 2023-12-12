let btn = document.querySelector('#getquote');
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');

async function newQuote(elem, elem2) {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  if (res.ok) {
    elem.textContent = data.content;
    elem2.textContent = data.author;
  } else {
    elem.textContent =
      "An error has occured. Check the browser's console for more information.";
  }
}

btn.addEventListener('click', () => newQuote(quote, author));
document.onload = newQuote(quote, author);
