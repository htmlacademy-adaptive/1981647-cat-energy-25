let navMain = document.querySelector('.main-nav');
let mainHeader = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-nav__toggle');

mainHeader.classList.remove('main-header--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});