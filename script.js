


let count = 0;
console.log('start count=', count);
let ask1 = prompt('Який вид спорту вважається «королем спорту»?');
if (ask1 === 'Футбол' || ask1 === 'футбол') {
    console.log('Вірно');
    count++;
} else {
    console.log('Не правильно');
}

let ask2 = prompt('У якому виді спорту використовуються ракетка, сітка та волан?');
if (ask2 == 'Бадмінтон' || ask2 === 'бадмінтон'){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}




let ask3 = prompt('Скільки гравців у команді з футзалу?');
if (ask3 == '5' || ask3 === `п'ять` ){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}

let ask4 = prompt('Скільки гравців у бейсбольній команді?');
if (ask4 == '9' || ask4 === `дев'ять` || ask4 === `Дев'ять`){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}

let ask5 = prompt('Який вид спорту відомий як водний балет?');
if (ask5 == 'Синхронне плавання' || ask5 === 'синхронне плавання'){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}

let ask6 = prompt('Скільки весл використовується в байдарці?');
if (ask6 == 'Одне' || ask6 === 'одне'){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}

let ask7 = prompt('Який найстаріший  вид спорту?');
if (ask7 == 'Легка атлетика' || ask7 === 'легка атлетика'){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}

let ask8 = prompt('Яку спортивну гру винайшов Джеймс Нейсміт у 1891 році?');
if (ask8 == 'Баскетбол' || ask8 === 'баскетбол'){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}

let ask9 = prompt('Скільки гравців є в олімпійській команді з керлінгу?');
if (ask9 == '4' || ask9 === 'чотири' || ask9 === 'Чотири'){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}

let ask10 = prompt('Яка країна виграла чемпіонат світу по футболу 2018 року??');
if (ask10 == 'франція' || ask10 === 'Франція'){
    console.log('Вірно')
    count++
}
else{
    console.log('Не правильно')
}
console.log(count);

let monthNumber = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));

if (monthNumber >= 1 && monthNumber <= 12) {
  let season;
  if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    season = "зима";
  } else if (monthNumber >= 3 && monthNumber <= 5) {
    season = "весна";
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    season = "літо";
  } else {
    season = "осінь";
  }
  alert(`Це ${season}.`);
} else {
  alert("Номер місяця повинен бути від 1 до 12.");
}
