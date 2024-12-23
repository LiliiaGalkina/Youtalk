let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');


burger.addEventListener('click', func);

function func() {
   burger.classList.toggle('header__burger_active');
	menu.classList.toggle('header__menu-list_active');
}