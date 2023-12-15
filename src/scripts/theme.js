let params = new URLSearchParams(window.location.search);
let quotes = '/widgets/quotes/embed/';
let darkMode = params.get('dark');

if (darkMode) {
  document.body.classList.add('bg-zinc-800');
  document.body.classList.add('text-white');
  document.body.classList.remove('bg-gray-50');
  document.body.classList.remove('text-black');
}

if (window.location.pathname == quotes && darkMode) {
  let quoteBtn = document.querySelector('#getquote');

  quoteBtn.classList.add('border-white');
  quoteBtn.classList.add('bg-zinc-900');
  quoteBtn.classList.add('hover:bg-gray-50');
  quoteBtn.classList.add('hover:text-black');
  quoteBtn.classList.remove('border-black');
  quoteBtn.classList.remove('bg-gray-50');
  quoteBtn.classList.remove('hover:bg-black');
  quoteBtn.classList.remove('hover:text-white');
}
