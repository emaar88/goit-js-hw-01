let number_user;
let total = 0;

do {
  number_user = prompt('введите пожалуйста число');
  if (number_user !== null && Number.isNaN(number_user) !== true) {
    total = total + Number.parseInt(number_user);
  } else if (number_user === null && Number.isNaN(number_user) !== true) {
    console.log('Общая сумма чисел равна ' + total);
  }
} while (number_user !== null);
