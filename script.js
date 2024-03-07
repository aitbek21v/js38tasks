// let res = arr
//   .filter((el) => {
//     return arr.indexOf(el) === arr.lastIndexOf(el);
//   })
//   .reduce((acc, el) => acc + el);
// console.log(res);

// let arr = [10, 2, 4, 2, 5, 7, 5, 8];

// function update() {
//   let result = 0;
//   for (let i of arr) {
//     if (arr.indexOf(i) === arr.lastIndexOf(i)) {
//       result += i;
//     }
//   }
//   return result;
// }
// console.log(update());

//! Задание 2
// Создайте переменную lang и присвойте ей значение
// en или ru или de или kg используя тернарный оператор
// выведите сообщение в зависимости от значения lang
// lang = 'en' выведет 'This is english'
// lang = 'ru' выведет 'Это русский'
// lang = 'de' выведет 'Das ist Deutsch'
// lang = 'kg' выведет 'Бул кыргыз тили'

// //! Задание 3
// let price = 600; // присваиваем значение цены
// let discount = 15; // присваиваем значение скидки

// > Инженер JS 38-группа:
// //! Задание 5
// Напишите программу, которая проверяет, является ли введенное
//  число четным или нечетным, используя оператор «%». Выведите «Число ${число} четное»,
//  если число делится на 2. Иначе выведите «Число ${число} нечетное», если число возвращает остаток при делении на 2

// > Инженер JS 38-группа:
// //! Задание 6
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша
// Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''.
// Нажатие клавиши Esc во время запроса возвращает null.

//! Задание 1
// Создайте переменные firstNum, secondNum, thirdNum и присвойте им числовые значения.
// Выведите в консоль число с наибольшим значением.
// Например: если в firstNum будет хранится число 5, в secondNum 3,
// а в thirdNum 16, то вывод в консоль должен быть:
// Максимальное число 16
// Учтите возможность равенства всех трех чисел.

// let name = "John";

// name[0] === name[0].toLowerCase()
//   ? console.log(name[0].toUpperCase() + name.slice(1))
//   : console.log(name[0].toLowerCase() + name.slice(1));

// let arr = [1,2,3,4,5,6,7]
// let result = arr.filter((el) => (el % 2 === 0)).reduce((acc,el) => acc + el)
// console.log(result);

// let arr = [12,4,2,99,6,8,4]
// console.log(arr.reduce((acc,el) => acc > el ? acc : el));

// Вам дана функция которая принимает строку в виде предложения. Необходимо заменить регистр каждого символа и вернуть строку.

// Пример: Дана строка 'The Quick Brown Fox'. Результатом должно быть: 'tHE qUICK bROWN fOX'

function checkTask(str) {
  return str
    .split("")
    .map((el) => {
      if (el === el.toUpperCase()) {
        return el.toLowerCase();
      } else {
        return el.toUpperCase();
      }
    })
    .join("");
}
console.log(checkTask("The Quick Brown Fox"));
// Имеется информация об адресах студентов одной группы, сведения о городе,
//название улицы  и номера дома.Напечатать список студентов проживающих
// на одноименных улицах в разных городах:проживающих в одном доме

// При помощи метода reduce, вывести средний возраст всех юзеров.

let users = [
  {
    name: "Askat",
    age: 21,
  },
  {
    name: "Mirdin",
    age: 20,
  },
  {
    name: "Begimay",
    age: 24,
  },
  {
    name: "Mikhail",
    age: 27,
  },
  {
    name: "Almas",
    age: 38,
  },
];
// function checkAge(users) {
//   let sum = 0;
//   users.forEach((el) => {
//     sum += el.age;
//   });
//   return sum;
// }
// console.log(checkAge(users));

function checkAge(users) {
  let res = users.reduce((acc, el) => {
    return acc + el.age;
  }, 0);
  return res;
}
console.log(checkAge(users));

// Дана функция checkTask(arr) которая принимает массив с предложениями.
// Необходимо вернуть новый массив с количеством слов в каждом предложении.

// Пример: ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

// function check(array) {
//   const strArray = array.map((el) => {
//     const strTamga = el.split(" ");
//     return strTamga.length;
//   });
//   return strArray;
// }
// console.log(
//   check([
//     "alice and bob love leetcode",
//     "i think so too",
//     "this is great thanks very much",
//   ])
// );

// Нам дана функция checkTask(arr) которая принимает массив с объектами с ключами name. Нужно перебрать этот массив так, чтобы функция нам вернула просто массив с именами в виде строк.

// Пример: Дан массив:

// let arrays = [
//   {
//     name: "Askat",
//   },
//   {
//     name: "Begimay",
//   },
//   {
//     name: "Mirdin",
//   },
//   {
//     name: "Aiday",
//   },
// ];

// Результат: ["Askat", 'Begimay', 'Mirdin', 'Aiday'];

// function chechArr(arr) {
//   let result = [];
//   arr.forEach((el) => result.push(el.name));
//   return result;
// }

// console.log(chechArr(arrays));
