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


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }





// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// let result = getExtremeElements([1, 2, 3, 4, 5]);
// console.table(result);





// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

//   message = message.split(' ').length * pricePerWord;
  
 //   console.log(message);

// }
// calculateEngravingPrice("JavaScript is in my blood", 10)
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));




// function slugify(title) {
//   // Change code below this line

//   title = title.split(' ').join('-');
  
//   console.log(title.toLowerCase());
//   // Change code above this line
// }
// slugify("Arrays for begginers");




// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).length < maxLength ?  firstArray.concat(secondArray) : firstArray.concat(secondArray).slice(0, maxLength);
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));



// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }



// const target = 10;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);




// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }




// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const value of order) {
//     total += value;
// }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));






// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i];
//   console.log(total);
// }

//  }
// calculateTotalPrice([12, 85, 37, 4]);





// function findLongestWord(string) {
  
//   string = string.split(' ');
//   let maxWord = string[0];

//   for (const word of string) {
   
//       if (word.length > maxWord.length) {
//           maxWord = word;
//     }
//   }
//   return maxWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));





// function filterArray(numbers, value) {
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//     newArray.push(number);
//     }
//   }

// return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));




// function getCommonElements(array1, array2) {
//   // Change code below this line
// const arrayCommonElements = [];
//   for (const item of array1) {
//     if (array2.includes(item)) {
//    arrayCommonElements.push(item);
//     }
//   }
// return arrayCommonElements;

//  // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));



// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const arrayEvenNumbers = [];
// for (let i = start; i <= end; i += 1){
    
//   if (i % 2 === 0) {arrayEvenNumbers.push(i);}
//   }
// return  arrayEvenNumbers;
//     // Change code above this line
//   }
// console.log(getEvenNumbers(6, 12));




// function includes(array, value) {

//   for (let item of array) {
//     if (item === value) {
//       return true;
//    }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// const lastTag = apartment.tags[apartment.tags.length-1];

// console.log(lastTag)






// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const property in object) {
 
//     if (object.hasOwnProperty(property)) {
//       propCount +=1;
//     }
//   }

//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   console.log(key);
//   values.push(apartment[key]);
// }
 
// console.log(values)




// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   console.log(keys);
// propCount = keys.length;

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const salary of values) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));




// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   // console.log(color);
//   hexColors.push(color.hex);
//   console.log(hexColors);

//   rgbColors.push(color.rgb);
//   console.log(rgbColors);

// }


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

// for (const product of products) {

//   if (productName === product.name ) {
//     return product.price;
//   }
// }
// return  null;
// }

// console.log(getProductPrice("Radar"));


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {

//   const allPropValues = [];

//   for (const product of products) {
//       if (propName === "name") {
//         allPropValues.push(product.name);
//     } else if (propName === "price") {
//         allPropValues.push(product.price);
//     } else if (propName === "quantity") {
//         allPropValues.push(product.quantity);
//     }
// }
// return allPropValues;
// }

// console.log(getAllPropValues("quantity"));


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return {  completed, category, priority, ...data };
//   // Change code above this line
// }

// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }))


// // Change code below this line
// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > num) {
//       total += arg;
//     }
    
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const bookIndex = this.books.indexOf(oldName);
//     console.log(bookIndex)
//     this.books.splice(bookIndex, 1, newName);
  
//     console.log(this.books);
//     // Change code above this line
//   }
// };
// console.log(bookShelf.updateBook("The last kingdom", "Dune"))

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//    for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },


  
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {this.potions.splice(this.potions.indexOf(potion), 1);}
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//          potion.name = newName;
//       }}
   
//   },
//   // Change code above this line
// };




// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats", "Margarita"],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
      
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// console.log(pizzaPalace.order("Margarita", makePizza, onOrderError));



// function changeEven(numbers, value) {
//   // Change code below this line
//  const newArray = [];

//   numbers.forEach((number, i) => {
//     if (numbers[i] % 2 === 0) {
//        newArray.push(numbers[i] + value);
//     } else if (numbers[i] % 2 !== 0) {
//        newArray.push(numbers[i]);
//     }
//   })

//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10))
// console.log(changeEven([17, 24, 68, 31, 42], 100))
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100))


// const arrey = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = users => {
//    return users.map(user => user.name)
// };
  
// console.log(getUserNames(arrey))



// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({friends}) => friends.includes(friendName))
   
// };

// // Або ось так:
// // const getUsersWithFriend = (users, friendName) => {
// //   return users.filter(user => user.friends.includes(friendName))
  
// // };
// console.log(getUsersWithFriend(arrey, "Briana Decker"))




// const getFriends = (users) => {
   // const uniqueFriends = users.flatMap(user => user.friends).filter((user, i, arrey) => arrey.indexOf(user) === i);
//   return uniqueFriends;
// };
// console.log(getFriends(arrey))



// const getActiveUsers = (users) => {
//   return users.filter(({ isActive }) => isActive)
// };
// console.log(getActiveUsers(arrey));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));
// console.log(names)


// const getNamesSortedByFriendCount = users => {
//    return[ ...users].sort((a, b) => a.friends.length -  b.friends.length).map(user => user.name)
// };
// console.log(getNamesSortedByFriendCount(arrey))



// const getSortedFriends = users => {
//    return users.flatMap(user => user.friends).filter((user, i, arrey) => arrey.indexOf(user) === i).sort((a, b) => a.localeCompare(b));
// };




// const getTotalBalanceByGender = (users, gender) => {
// return users.filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0)
// };

// console.log(getTotalBalanceByGender(arrey, 'male'))





// class  Storage {
//   constructor(items) {
//     this.items = items;
   
//   }
//   getItems() {
//    return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
   
//   }
//   removeItem(itemToRemove) {
//    return  this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]








// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
    
//   }
// getValue() {
//   return this.value;
// }
// padEnd(str) {
//     this.value = this.value + str;
// }
// padStart(str) {
//     this.value = str + this.value;
// }
//   padBoth(str) {
//      this.value = str + this.value + str;
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder)

// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// class Storage {
//   // Change code below this line
// #items
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]


// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
    
//     return newPrice <= Car.MAX_PRICE ? this.#price = newPrice : this.#price;
//   }
   
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
