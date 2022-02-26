// 1. Методы объекта, "this"

// Объекты обычно создаются, чтобы представлять сущности реального мира, будь то пользователи, заказы и так далее:
// Объект пользователя
// let user = {
//   name: "Джон",
//   age: 30
// };

// И так же, как и в реальном мире, пользователь может СОВЕРШАТЬ ДЕЙСТВИЯ: 
// выбирать что-то из корзины покупок, авторизовываться, выходить из системы, оплачивать и т.п.

// Такие действия в JavaScript представлены свойствами-функциями объекта.

// 2. Примеры методов

// let user = {
//   name: "Джон",
//   age: 30
// };
// 
// user.sayHi = function() {
//   alert("Привет!");
// };
// 
// user.sayHi(); // Привет!

// Использовали Function Expression (функциональное выражение), чтобы создать функцию для приветствия, 
// и присвоили её свойству user.sayHi нашего объекта.
// Затем мы вызвали её.

// ! МЕТОД ОБЪЕКТА - функция, которая является свойством объекта

// Можно заранее объявить функцию и использовать её в качестве метода, примерно так:
// let user = {
//   // ...
// };
// 
// // сначала объявляем
// function sayHi() {
//   alert("Привет!");
// }
// 
// // затем добавляем в качестве метода
// user.sayHi = sayHi;
// 
// user.sayHi(); // Привет!

// 3. Объектно-ориентированное программирование

// Когда мы пишем наш код, используя объекты для представления сущностей реального мира, – это называется 
// объектно-ориентированное программирование или сокращённо: «ООП».

// ООП является большой предметной областью и интересной наукой само по себе. 
// Как выбрать правильные сущности? Как организовать взаимодействие между ними? 
// Это – создание архитектуры, и есть хорошие книги по этой теме:
// - «Приёмы объектно-ориентированного проектирования. Паттерны проектирования» - Эрих Гамма, Ричард Хелм, Ральф Джонсон, Джон Влиссидес
// - «Объектно-ориентированный анализ и проектирование с примерами приложений»  - Гради Буч

// 4. Сокращённая запись метода

// Более короткий синтаксис:
// эти объекты делают одно и то же (одинаковые методы)
// user = {
//   sayHi: function() {
//     alert("Привет");
//   }
// };

// сокращённая запись выглядит лучше, не так ли?
// user = {
//   sayHi() { // то же самое, что и "sayHi: function()"
//     alert("Привет");
//   }
// };

// Мы можем пропустить ключевое слово "function" и просто написать sayHi().

// 5. Ключевое слово «this» в методах

// Методу объекта необходим доступ к информации, которая хранится в объекте, 
// чтобы выполнить с ней какие-либо действия (в соответствии с назначением метода).

// !!! Для доступа к информации внутри объекта метод может использовать ключевое слово this.

// !!! Значение this – это объект «перед точкой», который использовался для вызова метода.

// let user = {
//   age: 30,
//   name: "Джон",  
// 
//   sayHi() {
//     // this - это "текущий объект"
//     alert(this.name);
//   }
// 
// };
// 
// user.sayHi(); // Джон

// ! Здесь во время выполнения кода user.sayHi() значением this будет являться user (ссылка на объект user).

// Технически также возможно получить доступ к объекту без ключевого слова this, 
// ссылаясь на него через внешнюю переменную (в которой хранится ссылка на этот объект):
// let user = {
//   name: "Джон",
//   age: 30,
// 
//   sayHi() {
//     alert(user.name); // используем переменную "user" вместо ключевого слова "this"
//   }
// 
// };

// Такой код будет ненадёжным.
// Если мы решим скопировать ссылку на объект user в другую переменную, например, admin = user, 
// и перезапишем переменную user чем-то другим, тогда будет осуществлён доступ 
// к неправильному объекту при вызове метода из admin.

// let user = {
//   name: "Джон",
//   age: 30,
// 
//   sayHi() {
//     alert( user.name ); // приведёт к ошибке
//   }
// };
// 
// let admin = user;
// user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
// 
// admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!

// Если мы используем this.name вместо user.name внутри alert, тогда этот код будет работать.

// 6. «this» не является фиксированным

// Значение this вычисляется во время выполнения кода и зависит от контекста.

// let user = { name: "Джон" };
// let admin = { name: "Админ" };
// 
// function sayHi() {
//   alert( this.name );
// }
// 
// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;
// 
// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)
// 
// admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

// Правило простое: 
// при вызове obj.f() значение this внутри f равно obj. 
// Так что, в приведённом примере это user или admin.

// 6.1 Вызов без объекта: this == undefined

// function sayHi() {
//   alert(this);
// }
// 
// sayHi(); // undefined

// В строгом режиме ("use strict") в таком коде значением this будет являться undefined. 
// Если мы попытаемся получить доступ к name, используя this.name – это вызовет ошибку.

// В нестрогом режиме значением this в таком случае будет глобальный объект (window для браузера)

// 6.2 Последствия свободного this

// В JavaScript this является «свободным», его значение вычисляется в момент вызова метода 
// и не зависит от того, где этот метод был объявлен, а зависит от того, 
// какой объект вызывает метод (какой объект стоит «перед точкой»).

// Эта идея вычисления this в момент исполнения имеет как свои плюсы, так и минусы. 
// - С одной стороны, функция может быть повторно использована в качестве метода у различных объектов 
// (что повышает гибкость). 
// - С другой стороны, большая гибкость увеличивает вероятность ошибок.

// 7. У стрелочных функций нет «this»

// Стрелочные функции особенные: у них нет своего «собственного» this. 
// Если мы используем this внутри стрелочной функции, то его значение берётся 
// из внешней «нормальной» функции.

// Здесь arrow() использует значение this из внешнего метода user.sayHi():
// let user = {
//   firstName: "Илья",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };
// 
// user.sayHi(); // Илья

// Это является особенностью стрелочных функций. 
// Они полезны, когда мы на самом деле не хотим иметь отдельное значение this, 
// а хотим брать его из внешнего контекста.

// 8. Итого

// - Функции, которые находятся в объекте в качестве его свойств, называются «методами».
// - Методы позволяют объектам «действовать»: object.doSomething().
// - Методы могут ссылаться на объект через this.

// Значение this определяется во время исполнения кода.
// - При объявлении любой функции в ней можно использовать this, 
// но этот this не имеет значения до тех пор, пока функция не будет вызвана.
// - Эта функция может быть скопирована между объектами (из одного объекта в другой).
// - Когда функция вызывается синтаксисом «метода» – object.method(), значением this во время вызова
// является объект перед точкой.

// Также ещё раз заметим, что стрелочные функции являются особенными – у них нет this. Когда внутри стрелочной функции обращаются к this, то его значение берётся снаружи.

/* 4.4.1 Задача. Проверка синтаксиса.
Каким будет результат выполнения этого кода? */
// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// } // пропущена ';'
// 
// (user.go)() // JS НЕ ВСТАВЛЯЕТ автоматически ';' перед КРУГЛОЙ СКОБКОЙ (user.go)()

// JS читает этот код так:
// let user = { go:... }(user.go)()

// Мы можем увидеть, что такое объединённое выражение синтаксически является вызовом 
// объекта { go: ... } как функции с аргументом (user.go). 
// И это происходит в той же строчке с объявлением переменной let user, 
// т.е. объект user ещё даже не определён, поэтому получается ошибка.

/* 4.4.2 Задача. Объясните значение "this"
В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему? */

// let obj, method;
// 
// obj = {
//   go: function() { alert(this); }
// };
// 
// obj.go();               // (1) [object Object] // вызывем метод объекта через ".", this 
//                         // ссылается на объект перед точкой
// (obj.go)();             // (2) [object Object] // то же, что и п.1 (скобки тут не имеют значения)
// 
// (method = obj.go)();    // (3) undefined // присвоили вызов метода переменной, this потерялся
//                         // metod() выполняется как функция, без передачи значений
// (obj.go || obj.stop)(); // (4) undefined // потеря значения this (см. п.3)

/* 4.4.3 Задача. Использование "this" в литерале объекта
Здесь функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? Почему? */

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };
// 
// let user = makeUser();
// 
// alert( user.ref.name ); // Каким будет результат? // Error: Cannot read property 'name' of undefined
// Это потому, что правила, которые определяют значение this, 
// никак не смотрят на объявление объекта. Важен лишь момент вызова метода.

// Здесь значение this внутри makeUser() является undefined, потому что 
// makeUser() вызвана как функция, не через «точку» как метод.

// Литерал объекта сам по себе не влияет на this. 
// Значение this одно для всей функции и блоков кода в ней, литеральные объекты не меняют его.

// Таким образом, при создании объекта ref: this берёт текущее значение this функции makeUser().

// А вот противоположный случай:
// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     }
//   };
// };
// 
// let user = makeUser();
// 
// alert( user.ref().name ); // Джон

// Теперь это работает, поскольку user.ref() вызывается как метод. 
// И значением this становится объект перед точкой .

/* 4.4.4 Задача. Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

// let calculator = {
//   read() {
//     this.firstNumber = +prompt('введите первое число', '');
//     this.secondNumber = +prompt('введите второе число', '');
//   },
// 
//   sum() {
//     return this.firstNumber + this.secondNumber;
//   },
// 
//   mul() {
//     return this.firstNumber * this.secondNumber;
//   },
// };
// 
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

/* 4.4.5 Задача. Цепь вызовов
Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1 */

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() { // показывает текущую ступеньку
//     return alert( this.step );
//   }
// };
// 
// ladder.up().up().down().showStep(); // 1