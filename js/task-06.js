let number_user;
let total;
while (number_user !== null) {
  number_user = prompt('Введите пожалуйста число');
  if (number_user !== null) {
    total = total + Number(number_user);
  } else if (number_user === null && Number.isNaN(total) !== false) {
    console.log('Общая сумма чисел равна ' + total);
  } else {
    console.log('Отменено пользователем');
  }
}
