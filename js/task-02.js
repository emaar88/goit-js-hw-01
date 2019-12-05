'use strict';
const total = prompt('Введите количество товаров на складе');
const ordered = prompt('Введите количество единиц товара в заказе');

  if (total < ordered) {
    console.log(`"На складе недостаточно товаров!"`);
  } else {
    console.log(`"Заказ оформлен, с вами свяжется менеджер"`);
  }