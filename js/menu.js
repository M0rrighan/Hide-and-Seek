const body = document.getElementsByTagName('body')[0];
const menu = document.querySelector('header nav ul.menu');
const openMenuBtn = document.querySelector('.openMenuBtn');
const closeMenuBtn = document.querySelector('.closeMenuBtn');

function showMenu () {
  menu.classList.add('opened');
  closeMenuBtn.style.display = 'block';
}

function hideMenu () {
  menu.classList.remove('opened');
  closeMenuBtn.style.display = 'none';
}

openMenuBtn.addEventListener('click', showMenu);
closeMenuBtn.addEventListener('click', hideMenu);
