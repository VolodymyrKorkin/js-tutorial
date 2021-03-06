// 1 Объекты

// Объекты же используются для хранения коллекций различных значений и более сложных сущностей

// Объект может быть создан с помощью фигурных скобок {…} 
// с необязательным списком СВОЙСТВ.

// Свойство – это пара «ключ: значение», где 
// ключ – это строка (также называемая «именем свойства»), 
// а значение может быть чем угодно.

// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {};  // синтаксис "литерал объекта"

// Обычно используют вариант с фигурными скобками {...}. 
// Такое объявление называют литералом объекта или литеральной нотацией.

// 2. Литералы и свойства

// При использовании литерального синтаксиса {...} мы сразу можем поместить в объект 
// несколько свойств в виде пар «ключ: значение»:

// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };

// У каждого свойства есть ключ (также называемый «имя» или «идентификатор»). 
// После имени свойства следует двоеточие ":", и 
// затем указывается значение свойства. 
// Если в объекте несколько свойств, то они перечисляются через запятую.

// В объекте user сейчас находятся два свойства:
// Первое свойство с именем "name" и значением "John".
// Второе свойство с именем "age" и значением 30.

// Для обращения к свойствам используется запись «через точку»:
// получаем свойства объекта:
// alert( user.name ); // John
// alert( user.age ); // 30

// Значение может быть любого типа. 
// Давайте добавим свойство с логическим значением:

// user.isAdmin = true;

// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
// };

// Последнее свойство объекта может заканчиваться запятой:
// let user = {
//   name: "John",
//   age: 30,
// }

// Это называется «висячая запятая». 
// Такой подход упрощает добавление, удаление и перемещение свойств, так как все строки объекта 
// становятся одинаковыми.

// !! Объект, объявленный как константа, может быть изменён

// 3. Квадратные скобки

// Для свойств, имена которых состоят из нескольких слов, доступ к значению «через точку» не работает
// это вызовет синтаксическую ошибку
// user.likes birds = true

// Для таких случаев существует альтернативный способ доступа к свойствам через квадратные скобки. 
// Такой способ сработает с любым именем свойства:

// let user = {};
// 
// // присваивание значения свойству
// user["likes birds"] = true;
// 
// // получение значения свойства
// alert(user["likes birds"]); // true
// 
// // удаление свойства
// delete user["likes birds"];

// !!! Обратите внимание, что строка в квадратных скобках заключена в кавычки (подойдёт любой тип кавычек).

// Здесь переменная key может быть вычислена во время выполнения кода или зависеть от пользовательского ввода. 
// После этого мы используем её для доступа к свойству. Это даёт нам большую гибкость.

// Пример:
// let user = {
//   name: "John",
//   age: 30
// };
// 
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
// 
// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")

// Запись «через точку» такого не позволяет:
// let user = {
//   name: "John",
//   age: 30
// };
// 
// let key = "name";
// alert( user.key ); // undefined

// 4. Свойство из переменной

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age
//     // ...другие свойства
//   };
// }
// 
// let user = makeUser("John", 30);
// alert(user.name); // John

// В примере выше название свойств name и age совпадают с названиями переменных, 
// которые мы подставляем в качестве значений этих свойств.

// Такой подход настолько распространён, что существуют специальные 
// КОРОТКИЕ СВОЙСТВА для упрощения этой записи.

// function makeUser(name, age) {
//   return {
//     name, // то же самое, что и name: name
//     age   // то же самое, что и age: age
//     // ...
//   };
// }

// Мы можем использовать как обычные свойства, так и короткие в одном и том же объекте:

// let user = {
//   name,  // тоже самое, что и name:name
//   age: 30
// };

// 5. Ограничения на имена свойств

// Имя переменной не может совпадать с зарезервированными словами, такими как «for», «let», «return» и т.д.

// ! Но для свойств объекта такого ограничения нет:
// эти имена свойств допустимы
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };
// alert( obj.for + obj.let + obj.return );  // 6

// Иными словами, нет никаких ограничений к именам свойств. 
// Они могут быть в виде строк или символов (специальный тип для идентификаторов, который будет рассмотрен позже).

// Все другие типы данных будут автоматически преобразованы к строке.

// Например, если использовать число 0 в качестве ключа, то оно превратится в строку "0"

// ! Есть небольшой подводный камень, связанный со специальным свойством __proto__. 
// Мы не можем установить его в необъектное значение

// 6. Проверка существования свойства, оператор «in»

// особенность JavaScript-объектов в том, что можно получить доступ к любому свойству. 
// Даже если свойства не существует – ошибки не будет!

// При обращении к свойству, которого нет, возвращается undefined. 
// Это позволяет просто проверить существование свойства:

// let user = {};
// alert( user.noSuchProperty === undefined ); // true означает "свойства нет"

// "key" in object

// let user = { name: "John", age: 30 };
// 
// alert( "age" in user ); // true, user.age существует
// alert( "blabla" in user ); // false, user.blabla не существует

// !!! Обратите внимание, что слева от оператора in должно быть имя свойства. 
// Обычно это строка в кавычках.

// Если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства. 
// Например:
// let user = { age: 30 };
// 
// let key = "age";
// alert( key in user ); // true, имя свойства было взято из переменной key

// let obj = {
//   test: undefined
// };
// 
// alert( obj.test ); //  выведет undefined, значит свойство не существует?
// alert( "test" in obj ); // true, свойство существует!

// 7. Цикл «for…in»

// Для перебора всех свойств объекта используется цикл for..in

// выведем все свойства объекта user:
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };
// 
// for (let key in user) {
//   // ключи
//   alert( key );  // name, age, isAdmin
//   // значения ключей
//   alert( user[key] ); // John, 30, true
// }

// Обратите внимание, что все конструкции «for» 
// позволяют нам объявлять переменную внутри цикла, как, например, let key здесь.

// Кроме того, мы могли бы использовать другое имя переменной. 
// Например, часто используется вариант "for (let prop in obj)".

// 8. Упорядочение свойств объекта

// Упорядочены ли свойства объекта? 
// Другими словами, если мы будем в цикле перебирать все свойства объекта, получим ли мы их в том же порядке, 
// в котором мы их добавляли? Можем ли мы на это рассчитывать?

// let codes = {
//   "49": "Германия",
//   "41": "Швейцария",
//   "44": "Великобритания",
//   // ..,
//   "1": "США"
// };
// 
// for (let code in codes) {
//   alert(code); // 1, 41, 44, 49
// }

// Таким образом, чтобы решить нашу проблему с телефонными кодами, мы можем схитрить, 
// сделав коды не целочисленными свойствами. Добавления знака "+" перед каждым кодом будет достаточно.

// let codes = {
//   "+49": "Германия",
//   "+41": "Швейцария",
//   "+44": "Великобритания",
//   // ..,
//   "+1": "США"
// };

// for (let code in codes) {
//   alert( +code ); // 49, 41, 44, 1
// }

// 9. Итого

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства (пары ключ-значение), где:
// Ключи свойств должны быть строками или символами (обычно строками).
// Значения могут быть любого типа.

// Чтобы получить доступ к свойству, мы можем использовать:
// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, 
// например, obj[varWithKey].

// Дополнительные операторы:
// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).

// То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.

// В JavaScript есть много других типов объектов:
// Array для хранения упорядоченных коллекций данных,
// Date для хранения информации о дате и времени,
// Error для хранения информации об ошибке.
// … и так далее.

/* 4.1.1 Задача. Привет, object
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

// let user = {};

// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

/* 4.1.2 Задача. Проверка на пустоту.
Напишите функцию isEmpty(obj), которая возвращает true, 
если у объекта нет свойств, иначе false.
Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false
//   }
//   return true
// }
// 
// let obj = {};
// 
// obj = prompt('На какое время заводить будильник?', '');
// 
// alert(isEmpty(obj));

/* 4.1.3 Задача. Объекты-константы?
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?*/
// const user = {
//   name: "John"
// };
// 
// // это будет работать?
// user.name = "Pete"; 

/* да, будет работать, поскольку объекты-константы изменяемые. Неизменяемая сама переменная user 
Другими словами, user хранит ссылку на объект. И это не может быть изменено. 
Но содержимое объекта менять можно.*/

/* 4.1.4 Задача. Сумма свойств объекта 
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. 
Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.*/

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// 
// for (let value in salaries) {
//   sum += salaries[value];
// }
// 
// alert(sum); // 390

/* 4.1.5 Задача. Умножаем все числовые свойства на 2
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
}; 
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. 
Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое. */

// function multiplyNumeric(menu) {
//   for (let value in menu) {
//     if ( typeof( menu[value] ) == 'number' ) {
//       menu[value] *= 2;
//     }
//   }
// }

