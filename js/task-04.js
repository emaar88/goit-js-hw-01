const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let yourmoney;


const number_Droids = prompt ('Введите пожалуйста количество дронов');

if (number_Droids === null)
{
    alert('Отменено пользователем!');
}
else
{
    totalPrice = (pricePerDroid*parseInt(number_Droids));
}

if (credits<totalPrice) 
{
    alert('Недостаточно средств на счету!');
}
else{
    yourmoney = (credits - totalPrice);
    alert('Вы купили ' + number_Droids + ' дроидов, на счету осталось ' + yourmoney + ' кредитов.');
}