'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let yourmoney;

const number_Droids = prompt('Введите пожалуйста количество дронов');

if (number_Droids === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * parseInt(number_Droids);
  if (credits < totalPrice) {
    console.log('Недостаточно средств на счету!');
  } else {
    yourmoney = credits - totalPrice;
    console.log(`Вы купили ${number_Droids} дроидов, на счету осталось ${yourmoney} кредитов.`);
  }
}
