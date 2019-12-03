'use strict';
let input;
let total = 0;
const message = 'Общая сумма чисел равна: ';

do {
  input = prompt('введите пожалуйста число');
  total = total + Number(input);
} while (number_user !== null);
alert(`${message}  ${total}`);
