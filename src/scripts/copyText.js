let btn = document.querySelector('#copyUrl');
let text = document.querySelector('#embedUrl').textContent;

let btn2 = document.querySelector('#copyUrl2');
let text2 = document.querySelector('#embedUrl2').textContent;

function copyText(value, elem) {
  navigator.clipboard.writeText(value);
  elem.classList.add('text-green-500');
  elem.querySelector('i').classList.add('ti-check');
  elem.querySelector('i').classList.remove('ti-copy');
  setTimeout(() => {
    elem.classList.remove('text-green-500');
    elem.querySelector('i').classList.add('ti-copy');
    elem.querySelector('i').classList.remove('ti-check');
  }, 2000);
}

btn.addEventListener('click', () => copyText(text, btn));
btn2.addEventListener('click', () => copyText(text2, btn2));
