function fail() {
  document.getElementById("main").style.background = '#f45058;';
  document.getElementById("main").style.background = '-moz-linear-gradient(top,  #f45058 0%, #d11b24 41%, #75080f 100%)';
  document.getElementById("main").style.background = '-webkit-linear-gradient(top,  #f45058 0%,#d11b24 41%,#75080f 100%)';
  document.getElementById("main").style.background = 'linear-gradient(to bottom,  #f45058 0%,#d11b24 41%,#75080f 100%)';
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f45058+0,d11b24+41,75080f+100 */
// background: #f45058; /* Old browsers */
// background: -moz-linear-gradient(top,  #f45058 0%, #d11b24 41%, #75080f 100%); /* FF3.6-15 */
// background: -webkit-linear-gradient(top,  #f45058 0%,#d11b24 41%,#75080f 100%); /* Chrome10-25,Safari5.1-6 */
// background: linear-gradient(to bottom,  #f45058 0%,#d11b24 41%,#75080f 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f45058', endColorstr='#75080f',GradientType=0 ); /* IE6-9 */

}

function success() {
  document.getElementById("main").style.background = '#68f271';
  document.getElementById("main").style.background = '-moz-linear-gradient(top,  #68f271 0%, #13b21e 40%, #016008 100%)';
  document.getElementById("main").style.background = '-webkit-linear-gradient(top,  #68f271 0%,#13b21e 40%,#016008 100%)';
  document.getElementById("main").style.background = 'linear-gradient(to bottom,  #68f271 0%,#13b21e 40%,#016008 100%)';
  // document.getElementById("wrapBenefit").style.filter = 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#68f271', endColorstr='#016008',GradientType=0 )';
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#68f271+0,13b21e+40,016008+100 */
// background: #68f271; /* Old browsers */
// background: -moz-linear-gradient(top,  #68f271 0%, #13b21e 40%, #016008 100%); /* FF3.6-15 */
// background: -webkit-linear-gradient(top,  #68f271 0%,#13b21e 40%,#016008 100%); /* Chrome10-25,Safari5.1-6 */
// background: linear-gradient(to bottom,  #68f271 0%,#13b21e 40%,#016008 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#68f271', endColorstr='#016008',GradientType=0 ); /* IE6-9 */

}

function action() {
  calc();
  document.getElementById("wrapBenefit").style.display = 'block';
  document.getElementById("innerForm").style.display = 'none';
  document.getElementById("calcOffer").style.display = 'none';
  document.getElementById("calcOfferRepeat").style.display = 'block';
}

function returnStart() {
  document.getElementById("wrapBenefit").style.display = 'none';
  document.getElementById("innerForm").style.display = 'flex';
  document.getElementById("calcOffer").style.display = 'block';
  document.getElementById("calcOfferRepeat").style.display = 'none';

  document.getElementById("main").style.background = '#808080';
  document.getElementById("main").style.background = '-moz-linear-gradient(top,  #808080 0%, #666666 40%, #141414 100%)';
  document.getElementById("main").style.background = '-webkit-linear-gradient(top,  #808080 0%,#666666 40%,#141414 100%)';
  document.getElementById("main").style.background = 'linear-gradient(to bottom,  #808080 0%,#666666 40%,#141414 100%)';

}

function calc() {

  //сегодняшний день
  var todayDate = new Date();
  var todayYear = todayDate.getFullYear();
  var todayMonth = todayDate.getMonth();
  var todayDay = todayDate.getDate();

  //дата взятия кредита
  var startDebtDate = new Date(document.getElementById("startDebtDate").value);
  var startDebtYear = startDebtDate.getFullYear();
  var startDebtMonth = startDebtDate.getMonth();
  var startDebtDay = startDebtDate.getDate();

  // считаем количество месяцев между датами не включая первый и последний
  var debtDate = new Date(document.getElementById("debtDate").value); //Remember, months are 0 based in JS
  var offerDate = new Date(document.getElementById("offerDate").value);
  var debtYear = debtDate.getFullYear();
  var offerYear = offerDate.getFullYear();
  var debtMonth = debtDate.getMonth();
  var offerMonth = offerDate.getMonth();
  var debtDay = debtDate.getDate();
  var offerDay = offerDate.getDate();
  if (debtMonth === 0) { //Have to take into account
    debtMonth++;
    offerMonth++;
  }
  var numberOfMonthsDebt = (debtYear - startDebtYear) * 12 + (debtMonth - startDebtMonth) - 1; //для включения первого и последнего +1 вместо -1
  var numberOfMonthsOffer = (offerYear - todayYear) * 12 + (offerMonth - todayMonth) - 1; //для включения первого и последнего +1 вместо -1

  // считаем количество дней в месяце
  var todayMonthNumber = todayMonth + 1;
  var todayYearNumber = todayYear;
  var numberDaysTodayMonth = new Date(todayYearNumber, todayMonthNumber, 0).getDate();

  var startDebtMonthNumber = startDebtMonth + 1;
  var startDebtYearNumber = startDebtYear;
  var numberDaysStartDebtMonth = new Date(startDebtYearNumber, startDebtMonthNumber, 0).getDate();

  var debtMonthNumber = debtMonth + 1;
  var debtYearNumber = debtYear;
  var numberDaysDebtMonth = new Date(debtYearNumber, debtMonthNumber, 0).getDate();

  var offerMonthNumber = offerMonth + 1;
  var offerYearNumber = offerYear;
  var numberDaysOfferMonth = new Date(offerYearNumber, offerMonthNumber, 0).getDate();

  //вычисляем дробное значение дня месяца
  var fractionTodayDay = 1 - (todayDay / numberDaysTodayMonth);
  var fractionStartDebtDay = 1 - (startDebtDay / numberDaysStartDebtMonth);
  var fractionDebtDay = debtDay / numberDaysDebtMonth;
  var fractionOfferDay = offerDay / numberDaysOfferMonth;

  //считаем количество платёжных периодов
  var numberPaymentPeriodDebt = numberOfMonthsDebt + fractionDebtDay + fractionStartDebtDay;
  var numberPaymentPeriodOffer = numberOfMonthsOffer + fractionTodayDay + fractionOfferDay;

  //сумма ежемесячных выплат
  var sumDebt = document.getElementById("sumDebt").value;
  var sumOffer = document.getElementById("sumOffer").value;

  var percentDebt = document.getElementById("percentDebt").value;
  var percentOffer = document.getElementById("percentOffer").value;

  var aDebt = percentDebt / 12 * 0.01; //годовая процентная ставка/12*0.01
  var bDebt = sumDebt * aDebt; //сумма предоставляемого Кредита/остатка Задолженности по Кредиту * a
  var cDebt = 1 + aDebt;
  var dDebt = cDebt ** -numberPaymentPeriodDebt;
  var fDebt = 1 - dDebt;

  var monthDebtPayment = bDebt / fDebt; //ежемесячный платёж по долгу

  var aOffer = percentOffer / 12 * 0.01; //годовая процентная ставка/12*0.01
  var bOffer = sumOffer * aOffer; //сумма предоставляемого Кредита/остатка Задолженности по Кредиту * a
  var cOffer = 1 + aOffer;
  var dOffer = cOffer ** -numberPaymentPeriodOffer;
  var fOffer = 1 - dOffer;

  var monthOfferPayment = bOffer / fOffer; //ежемесячный платёж по предложению  

  //Общая сумма выплат
  var totalPaymentsDebt = monthDebtPayment * numberPaymentPeriodDebt; //Общая сумма выплат по долгу
  var totalPaymentsOffer = monthOfferPayment * numberPaymentPeriodOffer; //Общая сумма выплат по предложению

  //Выгода
  var benefit = totalPaymentsDebt - totalPaymentsOffer;

  if (benefit > 1000) {
    document.getElementById("benefit").innerHTML = benefit;
    document.getElementById("phrase").innerHTML = 'Это имеет смысл';
    success();
  } else if (benefit > 0 & benefit < 1000) {
    document.getElementById("benefit").innerHTML = benefit;
    document.getElementById("phrase").innerHTML = 'Это бессмысленно';
  } else if (benefit = 'NaN') {
    document.getElementById("benefit").innerHTML = 'Либо данные отсутствуют, либо введены не верно';
    document.getElementById("phrase").innerHTML = 'Это бессмысленно';
  } else if (benefit = 0) {
    document.getElementById("benefit").innerHTML = 0;
    document.getElementById("phrase").innerHTML = 'Это бессмысленно';
  } else {
    document.getElementById("benefit").innerHTML = benefit;
    document.getElementById("phrase").innerHTML = 'Вы в убытке';
    fail()
  }
}

document.getElementById("calcOffer").onclick = action;
document.getElementById("calcOfferRepeat").onclick = returnStart;