'use strict';
let selectCountry = prompt('Введите название страны:');
const ChinaPrise = 100;
const ChilePrise = 250;
const AustraliaPrise = 170;
const IndiaPrise = 80;
const JamaicaPrise = 120;

if (selectCountry === null) {
  console.log('Отменено пользователем');
} else {
  selectCountry = selectCountry.toLowerCase();
  switch (selectCountry) {
    case 'китай':
      console.log('Доставка в Китай будет стоить ' + ChinaPrise + ' кредитов');
      break;
    case 'чили':
      console.log('Доставка в Чили будет стоить ' + ChilePrise + ' кредитов');
      break;
    case 'австралия':
      console.log(
        'Доставка в Австралию будет стоить ' + AustraliaPrise + ' кредитов',
      );
      break;
    case 'индия':
      console.log('Доставка в Индию будет стоить ' + IndiaPrise + ' кредитов');
      break;
    case 'ямайка':
      console.log(
        'Доставка в Ямайку будет стоить ' + JamaicaPrise + ' кредитов',
      );
      break;
    default:
      console.log('В вашей стране доставка не доступна');
  }
}
