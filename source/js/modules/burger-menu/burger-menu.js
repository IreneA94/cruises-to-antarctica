let header = document.querySelector('.header__navigation');
let toggle = document.querySelector('.header__navigation-toggle');
let links = document.querySelectorAll('.header__navigation-link');

header.classList.remove('header__navigation--nojs');

let nav = function () {
  toggle.addEventListener('click', function () {
    if (header.classList.contains('header__navigation--closed')) {
      header.classList.remove('header__navigation--closed');
      header.classList.add('header__navigation--opened');
    } else {
      header.classList.add('header__navigation--closed');
      header.classList.remove('header__navigation--opened');
    }
  });
};

let navLink = function () {
  for (let link of links) {
    link.addEventListener('click', function () {
      if (header.classList.contains('header__navigation--opened')) {
        header.classList.remove('header__navigation--opened');
        header.classList.add('header__navigation--closed');
      }
    });
  }
};

export {nav, navLink};
