
// ! узнаем количество свойст через количество собственных ключей
// ? почему в условии let propCount = 0
// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }))

// ?----------------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const arrAllValues = []; 
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       arrAllValues.push(product[propName]);
//     }
//   }
//   return arrAllValues;
// }




























// ?????? Доступ к свойствам в методах
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };
// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };
// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// * Объекты------------------------------

// равенство ссылочных типов
// const a = { x: 1, y: 2 };
// const b = a;
// console.log(b === a);


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getProductPrice(productName) {
for (const product of products) {
  if (product.name === productName) {
  return product.price;
  }
}
  return null;
}
console.log(getProductPrice("Grip"))

// ! ищем по одному значению, и возвращаем другое значение 
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
// for (const product of products) {
//   if (product.name === productName) {
//   return product.price;
//   }
// }
//   return null;
// }
// console.log(getProductPrice("Grip"))

// ! перебор массива объектов, достали значения for...of
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }

//! Object.keys() достали массив ключей, и от него достали значение через for...of
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key])
// }
// console.log(values)

//! проверка через hasOwnProperty и достаем свои ключи и значения
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// console.log(apartment)
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key))
//     keys.push(key);
//   if (apartment.hasOwnProperty(key))
//   values.push(apartment[key]);
// }

//! достаем ключи и значения из объекта в массив через for...in
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const item in apartment) {
//   keys.push(item)              // достаем ключи
//   values.push(apartment[item]) // достаем значения
// }
// console.log(keys)
// console.log(values)

// ! Синтаксис вычисляемых свойств
// const emailInputName = "email";      //переменная дает имя (ключ) свойству
// const passwordInputName = "password";//переменная дает имя (ключ) свойству
// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",//используем переменную если не знаем имя свойства
//   [passwordInputName]: "jqueryismyjam",//используем переменную если не знаем имя свойства
// };
// console.log(credentials.email)   // вызов ключа через переменную
// console.log(credentials.password)// вызов ключа через переменную

// ! синтаксис коротких свойств
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
// name,
// price,
// image,
// tags,
// };
// console.log(name);
// console.log(price);
// console.log(image)
// console.log(tags)

// ! обращение к свойствам
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
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];

// ! обращение к свойствам через []
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// ! замена свойств
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
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// ! добавление свойств

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };
// console.log(apartment)

// ! Объекты - обращение через точку
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
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(ownerName)

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

// ! вычисляемые свойства когда ключ - значение переменной
// const inputName = 'color';
// const inputValue = 'tomato';
// const colorPickerData = {
//     [inputName]: inputValue,
// }
// console.log(colorPickerData);

// ! обращение через . и через []
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };
// console.log(playlist.name); // обращение через точку
// console.log(playlist['name']); // обращен через []
// const propertyName = 'name';
// console.log(playlist[propertyName]) // обращение через переменную только через []

// * Функции----------------------------

// ! приоритетность вывода в консоль у функций
// function bar () {
//   console.log("bar")
// }

// function baz () {
//   console.log("baz")
// }
// function foo () {
//   console.log("foo")
//   bar()
//   baz()
// }
// foo()

// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");
//   // Возвращаем результат выражения умножения
//   return x * y * z;
//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }
// console.log(multiply(2, 3, 3))
// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30
// result = multiply(4, 8, 12);
// console.log(result); // 384
// result = multiply(17, 6, 25);
// console.log(result); // 255

// let i
// function multiply(x, y, z) {
//   return i = `Результат умножения равен ${x * y * z}`
// }
// console.log(multiply(4, 8, 2))

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
// count(1, 5); // countFrom = 1, countTo = 5, step = 1

// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// ! разворот регистра
// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';
//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }
// return invertedString
//   }
// console.log(changeCase('fidLKfhfL'))

// ! операция (...args)
// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };
// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

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

// ! поиск пароля в массиве через for ... of
// const logins = ['qwerty', 'asdfgh', 'zxcvbn'];
// function findLogin(allLogins, loginToFind) {
//   let message = `Пользователь ${loginToFind} не найден.`;
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден.`;
//     }
//   }
//   return message;
// };
// console.log(findLogin(logins, 'qwerty'));
// console.log(findLogin(logins, 'asdfghjj'));
// console.log(findLogin(logins, 'zxcvbn'));

// ! передача значения по ссылке без копии объекта (не рекомендуется)
// const personeOne = {
//   name: 'Bob',
//   age: 21,
// }
// function inPersAge(person) { // функция мутирует внешний объект
//   person.age += 1;
//   return person;
// }
// inPersAge(personeOne);  // передача ссылки на объект памяти
// console.log(personeOne);

// ! Изменение объекта внури функции через копию объекта
// const personeOne = {
//   name: 'Bob',
//   age: 21,
// }
// function inPersAge(person) {
//   const updatedPerson = Object.assign({}, person) //создание копии объекта
//   updatedPerson.age += 1;
//   return updatedPerson;
// }
// const updatedPersonOne = inPersAge(personeOne);
// console.log(personeOne.age);
// console.log(updatedPersonOne.age);

// вызов функции
// const add = function () {
//   console.log('выполняется функция');
// };
// add();
// add();
// add();

// function myFn(a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }
// console.log(myFn(10, 3));

//----------------------
// Функция
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }
// console.log(checkAge(22))

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

// * массивы------------------------------------------

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
// numbers.unshift(4, 7);
// console.log(numbers);

// ! reverse 
// const numbers = [1, 2, 3, 4, 5];
// const reverseNumber = numbers.reverse()
// console.log(numbers)

// const numbers = [111, 222, 333, 444, 555];
// const reverseNumber = numbers.reverse()
// console.log(numbers)

// ! pop удаляет последний элемент из конца массива
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.pop())
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

// ! splice 
// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// const deleteFriends = friends.splice(9, 0, '6')
// console.log(friends);

// ! slice объединение элементов в 1 строку string с отрезанием конца
// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//   string += friend + ', ';
// }
// string = string.slice(0, string.length - 2);
// console.log(string);

// ! forEach в массиве - ничего не возвращает (underfined), массив не меняется
// const myArray = [1, 2, 3];
// console.log(myArray);
// myArray.forEach(el => console.log(el * 2));
// console.log(myArray);

// ! concat объединение и сумма элементов двух массивом через concat и for ... of
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const array3 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2, array3);
// console.log(numbers);
// for (const number of numbers) {
//   total += number;
//   console.log(total);
// }
// console.log(total)
// console.log(array1);
// console.log(array2);

// ?-----------------------------------

// ! for ... of
// поиск самого маленького числа в массиве
// const numbers = [4, 6, 8, 55, 3, 18, 9, 99, 45, 67, 82];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number
//   }
// }
//   console.log(`smallestNumber: `, smallestNumber);

// for of для массива???????????????
// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// for (const friend of friends) {  // объявление имени переменной (внутри скобок)
// console.log(friend)
// }

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

// ! цикл for ... in для массивов
// const myArray = [true, 10, 'abc', null];
// for (const key in myArray) {
//   console.log(myArray[key])
// };

// ! цикл for ... in для объектов
// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// };
// for (const key in myObject) {
//   console.log(key, myObject[key])
// };

// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// };
// for (const key in myObject) {
//   console.log(key, myObject)
// };

// ! цикл while
// let counter = 5;
// while (counter < 15) {
//   counter += 2;
//   console.log("counter: ", counter);
// }

// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter < maxClients) {
//   clientCounter += 1;
//   console.log(clientCounter);
// }

//! Object.keys  Object.values + forEach Получение массива из объекта (Ключи и значения)
// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// };
// Object.keys(myObject).forEach(key => {
//   console.log(key, myObject[key])
// })

// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// };
// Object.values(myObject).forEach(values => {
//   console.log(values)
// })

// ! цикл forEach лучше чем for
// const myArray = ['first', 'second', 'third'];
// myArray.forEach((element, index) => {
//   console.log(element, index);
// });

// ! Цикл for с использ if
//??????    continue
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

// ! Цикл for
// function filterArray(numbers, value) {
//   const newNumbers = [];                         // создали новый массив
//   for (let i = 0; i < numbers.length; i += 1) {  // задали цикл на длину старого массива
//     if (numbers[i] > value) {                    // если число в старом массиве больше чем value
//     newNumbers.push(numbers[i]);                 // то оно вставляется в новый массив
//     }
//   }
//   return newNumbers;
// }

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
// const numbers = [4, 6, 8, 55, 3, 18, 9, 99, 45, 67, 82]
// // 1 переменная total
// let total = 0
// // 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i])
//   //3 на каждой итерации проверить элемент на четность
//   if (numbers[i] % 2 === 0) {  //если нечетное ставим !==
//     // console.log('Четное!!!!')
//     // 4 если четный то плюcуем к total
// // total += numbers[i]
//   }
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

// ! поиск логина через for и  if
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

// const myArray = ['first', 'second', 'third']
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

//--------------------------
//for  для массива???????????????
// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.log(friends);
// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += '--1';
// }
// console.log(friends)

// ! Switch
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

// ! тернарный оператор

// const balance = -1000;
// const messege = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(messege);

// let value = -5;
// const res = value >= 0 ? value : -value;
// console.log(res)

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

// * строки -----------------------------------------
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
