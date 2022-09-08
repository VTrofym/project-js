


























// ! formData достаем ключи и значения
const formElemRef = document.querySelector('#formElem');
const formData = new FormData(formElemRef);
console.log('formData :>> ', formData);
const obj = {};
formData.append('age', 25);
console.log('formData.has(age); :>> ', formData.has('user'));
formData.forEach((value, key) => {
  obj[key] = value;
});
console.log('obj :>> ', obj);
console.log(formData);

// ! Доступ к document и объединение в одну ветвь
// const articlJs = document.createElement('article');
// articlJs.classList.add('product');
// const tilleJs = document.createElement('h2');
// tilleJs.classList.add('product__name');
// const textProduct = document.createElement('p');
// textProduct.classList.add('product__descr');
// const priceProduct = document.createElement('p');
// priceProduct.classList.add('product__price');
// articlJs.append(tilleJs, textProduct, priceProduct);
// console.log(articlJs);


// !Задача про передвижение ведьмочки
{/* <div class="wall">
        <img src="https://svgsilh.com/svg/159936.svg" class="whitch" alt="whitch">
      </div>

const wall = document.querySelector('.wall');
const whitch = document.querySelector('.whitch')
wall.addEventListener('click', (event) => {
  const { clientHeight: wallHeight, clientWidth: wallWidth } = wall
  const { clientHeight: whitchHeight, clientWidth: whitchWidth } = whitch
  let coordsX = `${event.offsetX - whitchWidth / 2 }px`
  let coordsY = `${event.offsetY - whitchHeight / 2 }px`
  if (event.offsetX < whitchWidth / 2) {
    coordsX = 0
  }
  if (event.offsetX > (wallWidth - whitchWidth / 2)) {
    coordsX = `${wallWidth - whitchWidth / 2}px`
  }
  whitch.style.left = coordsX;
  whitch.style.top = coordsY;
}) */}




// !Задача с двумя вариантами решений
{/* <section id="tree"></section> */} // Это в HTML 

// const food = {
//   'Meat': {
//     'Pork': {},
//     'Beef': {},
//   },
//   'Fruit': {
//     'Red': {
//       'Cherry': { 'ding': {}},
//       'Strawberry': {},
//     },
//     'Yellow': {
//       'Banana': {},
//       'Pineapple': {},
//     },
//   },
// };


// // const tree = document.querySelector('#tree')
// // console.log(tree) 

// // function createTree(element, Obj) {
// //   const list = document.createElement('ul');
// //   const ObjKeys = Object.keys(Obj);
// //   ObjKeys.forEach((key) => {
// //     const liKey = document.createElement('li');
// //     liKey.textContent = key;
// //     list.append(liKey);
// //     createTree(liKey ,Obj[key])
// //   });
// // element.append(list)
// // }

// // createTree(tree, food)

// const tree = document.querySelector('#tree');

// function createTree (element, obj) {
//   const list = document.createElement('ul');
//   const objKeys = Object.keys(obj); 
  
//   objKeys.forEach((key) => {
//     const newLi = liFabrica(key, list)  
//     createTree(newLi, obj[key])
//   })
//   element.append(list)
// }

// createTree(tree, food)

// function liFabrica (string, list) {
//     const liKey = document.createElement('li');
//     liKey.textContent = string;
//     list.append(liKey)
//   return liKey
// }










//* --------------Класссы-----------





// ! Геттеры и Сеттеры
// class User {
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   // Геттер email
//   get email() {
//     return this.#email;
//   }
//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// ! приватные свойства
// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство

//! методы класса
// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }
//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// ! Объект параметров
// class User {
//   // Деструктуризируем объект
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }
// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

// ! Конструктор класса
// class User {
//   constructor(name, email) {
//     // Инициализация свойств экземпляра
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// ! Объявление класса
// class User {
// }
// const mango = new User();
// console.log(mango); // {}
// const poly = new User();
// console.log(poly); // {}

// ! Цепочка прототипов, hasOwnProperty
// const objC = {
//   z: 5
// }
// console.log(objC)
// const objB = Object.create(objC)
// objB.y = 2
// console.log(objB)
// const objA = Object.create(objB)
// objA.x = 1
// console.log(objA)
// console.log(objA.hasOwnProperty('x'))

//*----------Перебирающие методы массива

// ! Метод reduce() среднее арифметическое в массиве
// const ages = [18, 14, 22, 34, 43, 18, 20, 34, 24];
// function getAverageAge(ages) {
//     return Math.round((ages.reduce((acc, age) => acc + age)) / ages.length)
// }
// console.log(getAverageAge(ages))

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];
// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// const averageScore = totalScore / students.length;
// console.log(averageScore)

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(total); // 32

//! Метод some() Метод every() массив объектов
// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];
// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

//! Метод some()
// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true
// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true
// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false
// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// ! Метод every()
// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every(value => value >= 0); // true
// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// ! Метод findIndex()
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
// colorPickerOptions.findIndex(option => option.label === "blue"); // 2
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1

// ! Метод find()
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined
// console.log(colorPickerOptions)

//! Метод filter() прописанный в императиве 
// const numbers = [1, 2, 3, 4, 5];
// const func = (el) => el > 3
// numbers.filter = function (callback) {
//     const newArr = []
//     for (let i = 0; i < this.length; i += 1) {
//         const shouldBeAdded = callback(this[i], i, this)
//         if (shouldBeAdded) {
//             newArr[newArr.length] = this[i]
//         }   
//     }
//     return newArr
// }
// console.log(numbers.filter(func))
// console.log(numbers)

//! Метод filter() массив объектов
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви
// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс
// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

// const getUsersWithEyeColor = (users, color) => {
//   users.filter(eyeColor => user.eyeColor === eyeColor);
// };

//! Метод filter() уникальные элементы(без повторений)
// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];
// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses)
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses)

//! Метод filter()
// const values = [51, -3, 27, 21, -68, 42, -37];
// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// ! Метод flatMap()
// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];
// students.map(student => student.courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]
// students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

//! Метод map() прописанный в императиве 
// const numbers = [1, 2, 3, 4, 5];
// const increase = (el) => el * el
// numbers.map = function (callback) {
//     const newArr = []
//     for (let i = 0; i < this.length; i += 1) {
//         const callbackResult = callback(this[i], i, this) 
//         newArr[newArr.length] = callbackResult
//     }
//     return newArr
// }
// console.log(numbers.map(increase))

//! Метод map()
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

//*----------------------------------------------
// ! Cтрелочная функция
// const arrowFnA = () => ({ arrowFnA: 5 });
// console.log(arrowFnA())
 
// Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// если один параметр
// const add = a => {
//   return a + 5;
// };
// console.log(add())

// если нет параметров
// const greet = () => {
//   console.log("Привет!");
// };
// greet()

//! Перебирающий forEach
// const numbers = [5, 10, 15, 20, 25];
// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(i, numbers[i]);
// }
// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });


//! Инлайн Callback Функции
// const filter = function (array, test) {
//   const filteredArrey = [];
//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);
//     if (passed) {
//       filteredArrey.push(el);
//     }
//   }
//   return filteredArrey;
// };
// const callback1 = function (value) {
//   return value >= 3;
// };
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);
// const callback2 = function (value) {
//   return value <= 4;
// };
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);
// надо передать функцию
// функция получает элемент массива
// если элемент массива удовлетворяет условию, то функция вернет true
// если элемент массива не удовлетворяет условию, то функция вернет false

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };
// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 8, function (x, y) {
//   return x - y;
// });
// // const add = function (x, y) { // - эти функции мы закинули в паралемтры doMath
// //   return x + y;
// // }
// // const sub = function (x, y) {
// //   return x - y;
// // }

//! Callback Функции
// const fnA = function (massage, callback) { // fnA - это функция высшего порядка
//   console.log(massage);
//   console.log(callback);
//   callback(100);
// };
// const fnB = function (number) { // fnB - Функция Колбэк
//   console.log('Это лог при вызове fnB', number);
// };
// fnA('qwe', fnB);

// function printMyName() {
// console.log('Ajax')
// }
// console.log('start')
// setTimeout(printMyName, 1000)

// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }
// registerGuest("Манго", greet);

// ! Функция Фильтр

// ! Паттерн объект параметров (настроек) нужен для чистоты кода и простоты чтения
// function doStuffWithBook(book) {
//   const {
//     title, numberOfPages, downloads, rating, isPublic, stats: { followers, likes },
//   } = book;
//   console.log(title, numberOfPages, downloads, rating, isPublic, followers, likes);
// }
// const book = {
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
//   stats: {
//     followers: 1234,
//     likes: 4321,
//   },
// };
// doStuffWithBook(book)

// ! Деструктуризация в объекте с оптимизацией for ...of
// const authors = {
//   stats: 5603,
//   views: 4827,
//   likes: 1308,
// };
// const entries = Object.entries(authors);
// for (const [name, rating] of entries) {
//   console.log(name, rating)
// }

// const rgb = [1, 3, 14];
// const [a, b, c] = rgb;
// console.log(a, b, c)

// ! Глубокая деструктуризация
// const user = {
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const {tag, stats: { followers, views: userViews, likes: userLikes = 0 }, } = user;
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// !  деструктуризация объекта изменение имени переменной и значение по умолчанию
// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };
// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;
// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };
// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;
// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

//! деструктуризация объекта - значение по умолчанию (на случай если не будет в объекте)
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
// };
// const { title, author, genres, isPublic = 555} = book;
// console.log(title)

//! деструктуризация объекта - цель удобство к доступу к объекту
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, author, genres, isPublic, rating} = book;
// console.log(book.title) // эта запись не нужна
// console.log(title)

// ! ...rest 2параметра получат из аргументов свои значения, а все остальные станут в массив
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }
// // multiply(1, 2);
// // multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ! ...args
// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//! объединение двух объектовов ...spread и перезаписывание
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
// // console.log(first)
// // console.log(second)
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

//! объединение двух объектовов ...spread
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// ! объединение двух массивов ...spread
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// ! распыление в массив через ...spread
// const arr = [1, 5, 7]
// const numbers = [14, 25, 11, ...arr, 6, 8];
// console.log(numbers)

// ! распыление в массив через ...spread и поиск масого большого числа
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// console.log(bestScore)

// ! распыление элементов в массиве ...spread
// const temps = [14, -4, 25, 8, 11];
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

//! создание точной копии ...spread
// const temps = [14, -4, 25, 8, 11];
// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const b = [...a]
// console.log(a[0] === b[0])

// ! распыляются строки, массивы и объекты; числа не распыляются

// * Объекты------------------------------

// равенство ссылочных типов
// const a = { x: 1, y: 2 };
// const b = a;
// console.log(b === a);

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

//! поиск существования свойства через for...in
// let userInfo = {
//   name: 'Вася',
//   address: {
//     city: 'Черкассы',
//     street: 'Шевченко'
//   },
// };
// if ('name' in userInfo) {
//   console.log(userInfo.name)
// }

//! достаем ключи и значения из вложенного объекта через for...in
// let userInfo = {
//   name: 'Вася',
//   address: {
//     city: 'Черкассы',
//     street: 'Шевченко'
//   },
// };
// for (let key in userInfo.address) {
//   console.log(key)
//   console.log(userInfo.address[key])
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

// ! Объекты обращение через . и через []
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
// const deleteFriends = friends.splice(0, 2, '6')
// console.log(friends);
// console.log(deleteFriends)

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
