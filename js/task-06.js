let number_user;
let total = 0;
while (number_user !== null)
 {
    number_user = prompt ('Введите пожалуйста число');
    if (number_user !== null)
    {
        total = (total + parseInt(number_user));
    }
    else if ((number_user === null) && (total>0))
    {
        alert('Общая сумма чисел равна ' + total);
    }
    else {
        alert("Введено не число");
    }
 }
