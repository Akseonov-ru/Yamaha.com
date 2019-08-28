"use strict";

// Для табов
$(function () {
   $('#myTab li:last-child a').tab('show');
});

// START - корзина
function toggleCart() {
   const btnCart = document.getElementById('header-search'),
      modalCart = document.querySelector('.search'),
      btnClose = document.querySelector('.header-close');

   // При нажатие на иконку карзина появится модальное окно "Карзина"
   btnCart.addEventListener('click', () => {
      modalCart.style.display = 'flex';
      // modalCart.style.cssText = "display: flex; fonr-size: 30px;" // - Если нужно написать много стилей
      document.body.style.overflow = 'hidden';
      document.html.style.overflow = 'hidden';
   });

   // При нажатие на крестик, то модальное окно "Карзина" скроется
   btnClose.addEventListener('click', () => {
      modalCart.style.display = 'none';
      document.body.style.overflow = '';
   });
}

// END - корзина

toggleCart();







// const buttonOpenSearch = document.querySelector('.header .header-search'),
//    modalSearch = document.querySelector('.search'),
//    buttonCloseSearch = document.querySelector('.search .header-close');

// buttonOpenSearch.addEventListener('click', () => {
//    modalSearch.style.display = 'flex';
//    document.body.style.overflow = 'hidden';
// });

// // При нажатие на крестик, то модальное окно "Карзина" скроется
// buttonCloseSearch.addEventListener('click', () => {
//    modalSearch.style.display = 'none';
//    document.body.style.overflow = '';
// });
