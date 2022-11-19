let navbar = document.querySelector('.mobile-menu');
let menu = document.querySelector('#menu-icon');

function MenuItem (){
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

menu.addEventListener('click', MenuItem);
