let selectCountry = prompt('Введите название страны:');
const ChinaPrise = 100;
const ChilePrise = 250;
const AustraliaPrise = 170;
const IndiaPrise = 80;
const JamaicaPrise = 120;


switch (selectCountry) {
    case 'Китай':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + ChinaPrise + ' кредитов');
      break;
  
    case 'Чили':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + ChilePrise + ' кредитов');
      break;
  
    case 'Австралия':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + AustraliaPrise + ' кредитов');
      break;
    case 'Индия':
        alert('Доставка в ' + selectCountry + ' будет стоить ' + IndiaPrise + ' кредитов');
        break;
    case 'Ямайка':
      alert('Доставка в ' + selectCountry + ' будет стоить ' + JamaicaPrise + ' кредитов');
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }