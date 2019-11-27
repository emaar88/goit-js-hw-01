let selectCountry = prompt('Введите название страны:');
const ChinaPrise = 100;
const ChilePrise = 250;
const AustraliaPrise = 170;
const IndiaPrise = 80;
const JamaicaPrise = 120;

selectCountry = selectCountry.toLowerCase();
switch (selectCountry) {
    case 'китай':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + ChinaPrise + ' кредитов');
      break;
    case 'чили':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + ChilePrise + ' кредитов');
      break;
    case 'австралия':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + AustraliaPrise + ' кредитов');
      break;
    case 'индия':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + IndiaPrise + ' кредитов');
      break;
    case 'ямайка':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + JamaicaPrise + ' кредитов');
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }