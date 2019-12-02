const ADMIN_PASSWORD = 'sergiy123';
let message = prompt('Введите пожалуйста пароль:');

if (message === null) {
  console.log('Отменено пользователем!');
} else {
  if (message === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!');
  }
  if (message !== ADMIN_PASSWORD) {
    console.log('Доступ запрещен, неверный пароль!');
    console.log('ваш пароль был ' + ADMIN_PASSWORD);
  }
}
