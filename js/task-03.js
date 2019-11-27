const ADMIN_PASSWORD = 'sergiy123';
let message = prompt('Введите пожалуйста пароль:');

if (message === null)
{
    alert('Отменено пользователем!');
}
else
{
    if (message===ADMIN_PASSWORD) {
        alert('Добро пожаловать!');
    }
    if (message!==ADMIN_PASSWORD)
    {
        alert('Доступ запрещен, неверный пароль!');
    }
}
alert('ваш пароль был ' + ADMIN_PASSWORD);