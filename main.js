import './style.css';

let res = document.querySelector('#result');
let button = document.querySelector('#exercise');
let input = document.querySelector('#in_data');

button.addEventListener('click', () => test());

function test() {
  res.innerHTML = 'asdf';
}
