// const age = 10;
// const totalPrice = 200.74;
// const userName = "Chelsy";
// const message = 'Welcome';
// const isOpen = true;
// const shouldConfirm = false;

// console.log('ціна', totalPrice);

// const type = typeof true;
// console.log(type);

// alert(userName);

// const shouldRenew = confirm('продовжити підписку?')
// console.log(shouldRenew);

// let quantity = prompt('Введіть кількість товарів');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);
// let elementWidth = '50px;'
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth', elementWidth);

// let elementWidth = '200.74px;'
// elementWidth = Number.parseFloat(elementWidth);
// console.log('elementWidth', elementWidth);

// let salary = 1300.16472;
// console.log(Number(salary.toFixed(2)));

// console.log(Number(5/0));

// const message = 'У цьому рядку 26 символівв.';
// console.log(message.length);

// console.log('gee' + 'dvjb');

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + lastName;
// console.log(fullName);
// const room = 716;
// const type = 'VIP';

// Довгий варіант (по старому)///////////////:

// const welcomeMsg = 'Гість ' + firstName + ' ' + lastName + ' заселяється в ' + type + ' номер ' + room;
// Короткий варіант (по новому):
// const welcomeMsg = `Гість ${firstName} ${lastName} заселяється у ${type} номер ${room}`;
// console.log(welcomeMsg);


// Нормалізація з методом toLowerCase()//////////////

// let brand = 'Samsung';
// brand = brand.toLowerCase();
// console.log(brand);
// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();
// console.log(brand);

// Пошук в строці з методом  includes()//////////:

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';
// const string1 = 'Привіт, це не спам'
// const string2 = 'Найьільший РОЗПРОДАЖ'
// const string3 = 'Рекламна кампанія #fatlivesmatter';
// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// Оператори порівняння//////////////:

// console.log(15 > 10);

// Оператор 'І' && (порівнює чи true чи false)///////////:

// console.log(5 && 6 && 7 && 'hello');

// Логичне 'або'(оператор ||)////////////////:

// console.log(5 || 6 || 7 || 'hello');

// Логічне НЕ (оператор !):
// console.log(!0);

// ЗАДАЧІ/////////////////////
// напиши скрипт, який перевіряє входження числа у відрізок між x1 і x2.

// const x1 = 10;
// const x2 = 30;
// let number = 15;

// console.log(`Число ${number} попадає у відрізок до ${x1}? `, number < x1);
// console.log(`Число ${number} попадає у відрізок після ${x2}? `, number > x2);

// const res = number > x1 && number < x2;
// console.log(`Число ${number} попадає у відрізок від ${x1} до ${x2}? `, res);

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false


// number > x1 && number < x2
// 15 > 10 && 15< 30
// true && true
// true

// number > x1 && number < x2
// 5 > 10 && 5 < 30
// false && true
// false

// const res = number < x1 || number > x2;
// console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2}? `, res);

// number < x1 || number > x2
// 150 < 10 || 150 > 30
// false || true
// true

// number < x1 || number > x2
// 25 < 10 || 25 > 30
// false || false
// false

// Напишіть скрипт, який перевіряє можливість відкрити чат з користувачем.
// Для цього користувач повинен бути:
// -другом
// - онлайн
// - без режиму не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можна відкрити чат? ', canOpenChat);

// Оператор розгалуження else...if/////////////

// const salary = 1500;
// if (salary <= 500) {
//   console.log('Рівень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Рівень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Рівень 3');
// } else {
//   console.log('Рівень 4');
// }

// ТЕРНАРНИЙ ОПЕРАТОР///////////////
// тільки для подвійної умови: або / або

// (const message = умова ? вираз1 : вираз2;)
// const message = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';

// const valueA = "5";
// const res = Number(valueA)
// console.log(res); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"


// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// ЗАНЯТТЯ №1////////////////////////////////////////////////////////////////////

/*
  Виведіть у консоль загальну кількість яблук та винограду та їх різницю
*/

// const number = 1;

// number = 5;

// let stringValue = `Andrii`;

// console.log(stringValue);

// const apples = 47;

// const grapes = 135;

// console.log(apples + grapes);

// console.log(apples - grapes);

/*
  Заміни вираз перевизначення комбінованим оператором +=
*/

// let students = 100;

// students = students + 50;

// students += 50;

// console.log(students);

/*
  Розбери пріоритет операторів в інструкції присвоєння
*/

// const result = 108 + (223 - 2) * 5;

// console.log(result);

/*
  Напиши скрипт, який виводить у консоль заокруглені значення value
  Використовуй методи Math.round(), Math.floor(), Math.ceil()
  Перевірте, що буде в консолі при значеннях 27.3 та 27.9
*/

// const value = -5.5;

// console.log(Math.round(value));

// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// console.log(Math.trunc(value));

/*
  Склади за допомогою шаблонних рядків речення: A has B bots in stock,
  де A та В - змінні вставлені в рядок
*/

// const companyName = "Cyberdyne Systems";

// const repairBots = 150;

// const defenceBots = 50;

// const result =
//   companyName + " has " + (repairBots + defenceBots) + " bots in stock";

// const result = `${companyName} has ${repairBots + defenceBots} bots in stock`;

// console.log(result);

/*
  Методи рядків та чейнінг
  Напиши скрипт, який розраховує індекс маси тіла людини
  Для цього потрібно розділити вагу в кілограмах на квадрат висоти у метрах
  Вага та висота зберігаються в змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання)
  Нецілі числа можуть бути задані у вигляді 24.7 або 24,7 тобто як роздільник дробної частини числа може бути кома
  Індекс маси тіла необхідно округлити до однієї цифри після коми
  */

// const weight = "88,3";
// const height = "1,98";

// const numericWeight = Number(weight.replace(",", "."));
// const numericHeight = Number(height.replace(",", "."));

// console.log(numericWeight);
// console.log(numericHeight);

// const bmi = Number((numericWeight / numericHeight ** 2).toFixed(1));

// console.log(bmi);

// console.log(bmi)

// console.log(true > true);

// console.log(false === "");

// КІНЕЦЬ ЗАНЯТТЯ №1////////////////////////////////////////////////////////////////////



// ФУНКЦІЯ//////////////////////////

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));

// ЗАДАЧА/////////////////////////////////////////////

// Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//  if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//    discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";

//   /// Change code above this line
//   return result;
// }
// Change code below this line

// Привязка інпутут і кнопки з html через js//////////////////////////

// const btnAdd = document.querySelector( 'button' );
// const valueInput = document.querySelector( 'input[data-vale]' )
// const outputEl = document.querySelector( '.js-output span' );
// console.log(outputEl);
// let total = 0;
// // btnAdd.textContent = 'hehehehehe';

// btnAdd.addEventListener('click', function () {
//   console.log('click hehehehe');
//   const value = Number(valueInput.value);
//   console.log(value);

//   total += value;
//   // console.log('total: ', total);
//   outputEl.textContent = total;

//   valueInput.value = '';
// });







