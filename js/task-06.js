let number_user = 0;
let total = 0;

do{
    number_user = prompt ('Введите пожалуйста число');
    if (number_user !== null)
    {
        total = (total + parseInt(number_user));
    }
    else
    {
        alert("Отменено пользователем");
        break;
    }
}
while (number_user !== null);
alert('Общая сумма чисел равна ' + total);