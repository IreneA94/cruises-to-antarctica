let header = document.querySelector('[data-navigation-status="header-navigation"]');
let toggle = document.querySelector('[data-toggle-status="header-navigation-toggle"]');
let links = document.querySelectorAll('[data-link-status="header-navigation-link"]');
let body = document.querySelector('body');

let initNav = function () {
  if (header && toggle && links) {
    header.classList.remove('nojs');

    let toggleMenu = function () {
      let isOpened = header.classList.contains('is-opened');
      header.classList.toggle('is-opened');
      header.classList.toggle('is-closed');
      body.style.overflow = isOpened ? 'visible' : 'hidden';
    };

    toggle.addEventListener('click', function () {
      toggleMenu();
    });

    for (let link of links) {
      link.addEventListener('click', function () {
        toggleMenu();
      });
    }
  }
};

export {initNav};
