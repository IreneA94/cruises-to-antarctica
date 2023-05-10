let header = document.querySelector('[data-navigation-status="header-navigation"]');
let toggle = document.querySelector('[data-toggle-status="header-navigation-toggle"]');
let links = document.querySelectorAll('[data-link-status="header-navigation-link"]');
let body = document.querySelector('body');

header.classList.remove('nojs');

let nav = function () {

  let navBurger = function () {
    toggle.addEventListener('click', function () {
      if (header.classList.contains('is-closed')) {
        header.classList.remove('is-closed');
        header.classList.add('is-opened');
        body.style.overflow = 'hidden';
      } else {
        header.classList.add('is-closed');
        header.classList.remove('is-opened');
        body.style.overflow = 'visible';
      }
    });
  };

  let navLink = function () {
    for (let link of links) {
      link.addEventListener('click', function () {
        if (header.classList.contains('is-opened')) {
          header.classList.remove('is-opened');
          header.classList.add('is-closed');
          body.style.overflow = 'visible';
        }
      });
    }
  };

  navBurger();
  navLink();
};

export {nav};
