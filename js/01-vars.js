












function getEvenNumbers(start, end) {
  const newArr = [];
  let total = 0;
  for (let i = start; i < end.length; i += 1) {
  } if (newArr[i] % 2 === 0) {
    newArr.push(newArr[i]);
  }
  return newArr;
}








// const friends = 'Mango';
// console.log(friends.split(''));

// приведение в нижний регистр, разбили, сшили с тире
// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');
// console.log(slug);

// Замена регистра на противоположный
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);
// for (const letter of letters) {
//   console.log(letter);
//   invertedString += letter === letter.toLowerCase()
//     ? letter.toLocaleUpperCase()
//     : letter.toLowerCase()
// }
// console.log(invertedString)



// ! Функции

// ! поиск пароля в массиве через for ... of
const logins = ['qwerty', 'asdfgh', 'zxcvbn'];
function findLogin(allLogins, loginToFind) {
  let message = `Пользователь ${loginToFind} не найден.`;
  for (const login of allLogins) {
    if (login === loginToFind) {
      message = `Пользователь ${loginToFind} найден.`;
    }
  }
  return message;
};
console.log(findLogin(logins, 'qwerty'));
console.log(findLogin(logins, 'asdfghjj'));
console.log(findLogin(logins, 'zxcvbn'));


// вызов функции 
// const add = function () {
//   console.log('выполняется функция');
// };
// add();
// add();
// add();


// ! массивы

// function filterArray(numbers, value) {
//   const newNumbers = [];                         // создали новый массив
//   for (let i = 0; i < numbers.length; i += 1) {  // задали цикл на длину старого массива
//     if (numbers[i] > value) {                    // если число в старом массиве больше чем value 
//     newNumbers.push(numbers[i]);                 // то оно вставляется в новый массив
//     }
//   }
//   return newNumbers;
// }

// поиск самого маленького числа в массиве
// const numbers = [4, 6, 8, 55, 3, 18, 9, 99, 45, 67, 82];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number
//   }
// }
//   console.log(`smallestNumber: `, smallestNumber);

// ! split переводит строку в массив и разбивает слово на буквы
// const friends = 'Mango';
// console.log(friends.split(''));

// ! join превращает массив в строку
// const words = ['Mango', 'Poly', 'Ada'];
// console.log(words)
// console.log(words.join(" "));
// console.log(words.join("-"));
// console.log(words.join(", "));

// ! indexOf дает порядковый номер
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// ! includes поиск логина
// const logins = ['qwerty', 'asdfgh', 'zxcvbn'];
// const loginToFind = 'qwerty';
// const message = logins.includes(loginToFind)
// console.log(message);

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// const hasFruit = redFruits.includes(fruit);
// console.log(hasFruit)
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// ! push добавляет элементы в конец массива
// const numbers = [];
// numbers.push(4);
// console.log(numbers);
// numbers.push(2, 6);
// console.log(numbers);
// numbers.push(8);
// console.log(numbers);
// numbers.push(4);
// console.log(numbers);
// numbers.push(5);
// console.log(numbers);

// ! unshift добавляет элементы в начало массива
// const numbers = [65676];
// console.log(numbers);
// numbers.unshift(1);
// console.log(numbers);

// ! pop удаляет последний элемент из конца массива
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.pop());
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);

// ! shift удаляет первый элемент в начале массива
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(numbers.shift());
// console.log(numbers);

// ! slice возвращает элементы от 1 до 3(не включая 3)
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(0, 5));

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1));

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2));

// ! slice объединение элементов в 1 строку string с отрезанием конца
// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//   string += friend + ', ';
// }
// string = string.slice(0, string.length - 2);
// console.log(string);

// ! concat объединение и сумма элементов двух массивом через concat и for ... of
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);
// console.log(numbers);
// for (const number of numbers) {
//   total += number;
//   console.log(total);
// }
// ! For ... of
// function findLongestWord(string) {
//   let newArr = string.split(' ');
//   let longestWord = newArr[0];
//   for (const fictional of newArr) {
//     if (fictional.length > longestWord.length) {
//       longestWord = fictional;
//     }
//   }
//   return longestWord
// }

// ! поиск логина через for ... if
// const logins = ['qwerty', 'asdfgh', 'zxcvbn'];
// const loginToFind = 'qwerty';
// let message = `Пользователь ${loginToFind} не найден.`;
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`
//     break;//   прерывание - вместо else
//   }
// }
// console.log(message);

//  сумма всех четных числел в массиве через for
// const numbers = [4, 6, 8, 55, 3, 18, 9, 99, 45, 67, 82]
// // 1 переменная total
// let total = 0
// // 2 перебрать массив
// for (const number of numbers) {
//   console.log(number)
//   //3 на каждой итерации проверить элемент на четность
//   if (number % 2 === 0) {  //если нечетное ставим !==
//     console.log('Четное!!!!')
//     // 4 если четный то плюcуем к total
// total += number
//   }
// }
// console.log('Total: ', total)

// сумма всех четных числел в массиве через for
const numbers = [4, 6, 8, 55, 3, 18, 9, 99, 45, 67, 82]
// 1 переменная total
let total = 0
// 2 перебрать массив
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
  //3 на каждой итерации проверить элемент на четность
  if (numbers[i] % 2 === 0) {  //если нечетное ставим !==
    // console.log('Четное!!!!')
    // 4 если четный то плюcуем к total
// total += numbers[i]
  }
}
console.log('Total: ', total)

// ! задачи: через for и через for...of
// //посчитать общую сумму покупок через for...of когда не нужно изменять
// const cart = [54, 66, 84, 102, 67, 85, 88, 93, 78, 99]
// let total = 0
// for (const value of cart) {
//   total += value
// }
// console.log('Total: ', total)

//посчитать общую сумму покупок через for
// const cart = [54, 66, 84, 102, 67, 85, 88, 93, 78, 99]
// // 2 сделать переменную total для цикла
// let total = 0
// // 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   // 3 каждый элемент приплюсовать к total
//   console.log(cart[i]); // вывод в консоль в столб всего массива
//   total += cart[i] // сплюсовать содержимое массива
// }
// console.log('Total: ', total)

// for of для массива???????????????
// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// for (const friend of friends) {  // объявление имени переменной (внутри скобок)
// console.log(friend)
// }

//--------------------------
//for  для массива???????????????
// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.log(friends);
// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += '--1';
// }
// console.log(friends)

//???????????????????????
// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ! не массивы

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }
// console.log(getNameLength("Poly"));

//---------------------------
//замена значения
// function a() {
//     console.log('Hello')
// }
// a()
// a = 10
// console.log(a)

//ссылочный тип
// const objectA = {
//     a: 10,
//     b:true
// }
// const copyOfA = objectA
// copyOfA.a = 'aaaa'
// copyOfA.b = 'slon'
// copyOfA.c = 'enot'
// const copyOfA2 = copyOfA
// copyOfA2.a = true
// copyOfA.b = 'lisa'
// copyOfA.c = 'enot'
// console.log(copyOfA2)

//??????????????????
// const min = 0;
// const max = 20;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log(`Не четное: `, i);
//     continue;
//   }
//   console.log(`четное: `, i);
//   total += i;
// }
// console.log(`total: `, total);

//???????????????
// const minSalary = 500;
// const maxSalary = 5000;
// const empLoyees = 6;
// let totalSalary = 0;
// for (let i = 1; i <= empLoyees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`ЗП работника номер ${i} = ${salary}`);
//   totalSalary += salary;
//   console.log(`totalSalary: `, totalSalary);
// }

// for (let i = 20; i < 50; i += 3) {
//   console.log(i);
// }
// console.log(`gjfjfjhfjh`);

//------------------------------
// ? 2 примера цикла while
// let counter = 5;
// while (counter < 15) {
//   console.log("counter: ", counter);
//   counter += 2;
// }
// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// ? Switch
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//       case null :
//       message = "Canceled by user!";
//       break;
//       case ADMIN_PASSWORD :
//       message = "Welcome!";
//       break;
//       default: message = "Access denied, wrong password!";
//   }
//   return message;
// }

// function getSubscriptionPrice(type) {
//   let price;
// switch (type) {
//     case `starter` :
//       price = 0;
//       break;
//     case `professional` :
//       price = 20;
//       break;
//     case `organization` :
//       price = 50;
//       break;
//   }
//   return price;
// }

//----------------------
// Функция
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };

// function makeMessage(name, price) {
//   const message =`You picked ${name}, price per item is ${price} credits`;
//   return message;
// };

// function add(a, b, c) {
// return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi(); //-без этого текст не выводится

//------------------------------
// ! тернарный оператор

// const balance = -1000;
// const messege = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(messege);

//-----------------------------
// ! if else if-else

// const salary = 12500;
// if (salary <= 500) {
//   console.log('Level 1');
// } else if (salary > 501 && salary <= 1500) {
//   console.log('Level 2');
// } else if (salary > 1501 && salary < 3000) {
//   console.log('Level 3');
// } else {
//   console.log('Level 4');
// }

// if (5 > 30) {
//   console.log('выводится');
// } else {
//   console.log('не выводится');
// }

// if (5 > 3) {
//   console.log('выводится');
// }

// let cost = 0;
// const subscription = "pro";
// if (subscription === "pro") {
//   cost = 100;
// }
// console.log(cost);

//---------------------------------
// проверка на равенство и использование логики

// const sub = 'pro';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть доступ к контунту? ', canAccessContent);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('можно открыть чат? ', canOpenChat);

// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(number < x1);
// console.log(number > x2);
// console.log(x1 < number > x2);
// const res = number > x1 && number < x2;
// console.log(res);
// const res2 = number < x1 || number > x2;
// console.log(res2);

//-----------------------------
// сравнение и строгое равенство и нестрогое равенство

// const isEqual = 1 == true;
// console.log(isEqual);

// const isEqual2 = 1 === true;
// console.log(isEqual2);

// console.log('10' > 5) - //оператор сравнения делает символы цифрами

// console.log(10 > 5);

// -----------------------------
// выбираем в строках - есть ли определенные слова и выключаем верхний регистр на №2

// const bed1 = `спам`;
// const bed2 = `распродажа`;

// const string1 = `привет как дела я не спам`
// const string2 = `хочешь крутую Распродажу?`
// const string3 = `ничего нет`

// console.log(string1.includes(bed1));
// console.log(string1.includes(bed2));

// console.log(string2.includes(bed1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(normalizedString2));

// console.log(string3.includes(bed1));
// console.log(string3.includes(bed2));

//------------------------
//  вырезание частей строки []-один символ; .slice(1) - оставить от (1) до конца

// let brand = `samSUng`;
// console.log(brand[4]);
// console.log(brand.slice(1));

//-------------------
// изменение регистра на нижний

// let brand = `SamSung`;
// brand = brand.toLowerCase();
// console.log(brand);

//------------------
// использование `` кавычек в начале и конце приедложения при сшивании

// const quantity = 15;
// const orderMsg = `Вы заказываете ${quantity} холодильников.`;
// console.log(orderMsg);

//-------------------
// сшивание строк oldschool

// const firstName = "Volodymyr";
// const lastName = "Trofymenko";
// const fullName = firstName + " " + lastName;
// console.log(fullName);

// ---------------------
// количество символов в строке

// const message = "В этой строке 26 символовю";
// console.log(message.length);

//----------------------
// рандомные числа от 10 до 90 округлены до целых

// const max = 90;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// ----------------
// степень вводим число, вводим степень, выводим результат

// let base = prompt("Введи число");
// base = Number(base);
// console.log(base);

// let power = prompt("Введи степень");
// power = Number(power);
// console.log(power);

// console.log(base ** power);
//------------------------

// {
//   "printWidth": 60,
//   "tabWidth": 2,
//   "useTabs": false,
//   "semi": true,
//   "singleQuote": true,
//   "trailingComma": "es5",
//   "bracketSpacing": true,
//   "jsxBracketSameLine": true,
//   "jsxSingleQuote": true,
//   "arrowParens": "always",
//   "rangeStart": 0,
//   "requirePragma": false,
//   "insertPragma": false,
//   "proseWrap": "preserve",
//   "endOfLine": "lf",
//   "parser": "babel-ts",
//   "quoteProps": "consistent"
// }
