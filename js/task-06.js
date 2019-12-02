let number_user = 0;
let total = 0;
if (number_user !== null) {
  do {
    if (number_user !== null)
    {  
        number_user = prompt('Введите пожалуйста число');
        total = total + parseInt(number_user);
    }
  } while (number_user !== null);
  alert('Общая сумма чисел равна ' + total);
} else {
  alert('Отменено пользователем');
}
