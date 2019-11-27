let number_user;
let total;

while (number_user !== null)
{
    number_user = prompt ('Введите пожалуйста число');
    total = (total + parseInt(number_user));
}
alert('Общая сумма чисел равна ' + total);