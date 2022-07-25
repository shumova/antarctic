import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // menu

  const elMainNav = document.querySelector('[data-menu]');
  const elMainNavToggle = document.querySelector('.menu__button');
  const elBody = document.querySelector('body');

  elMainNav.classList.remove('has-no-js');
  elMainNav.classList.add('is-closed');

  elMainNavToggle.addEventListener('click', () => {
    if (elMainNav.classList.contains('is-closed')) {
      elMainNav.classList.remove('is-closed');
      elMainNav.classList.add('is-opened');
      elBody.style.overflow = 'hidden';
    } else {
      elMainNav.classList.add('is-closed');
      elMainNav.classList.remove('is-opened');
      elBody.style.overflow = 'auto';
    }

    if (elMainNavToggle.getAttribute('aria-expanded') === 'false') {
      elMainNavToggle.setAttribute('aria-expanded', 'true');
    } else {
      elMainNavToggle.setAttribute('aria-expanded', 'false');
    }

    if (elMainNavToggle.getAttribute('aria-label') === 'Открыть меню') {
      elMainNavToggle.setAttribute('aria-label', 'Закрыть меню');
    } else {
      elMainNavToggle.setAttribute('aria-label', 'Открыть меню');
    }
  });

  document.addEventListener('click', (event) => {
    if (elMainNav.classList.contains('is-opened') && !elMainNav.contains(event.target)) {
      elMainNav.classList.add('is-closed');
      elMainNav.classList.remove('is-opened');
      elBody.style.overflow = 'auto';
    }
  });

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
