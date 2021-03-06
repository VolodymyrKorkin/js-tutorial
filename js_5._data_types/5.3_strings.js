// Строки

// В JavaScript любые текстовые данные являются строками. 
// Не существует отдельного типа «символ», 
// который есть в ряде других языков.

// Внутренний формат для строк — всегда UTF-16, 
// вне зависимости от кодировки страницы.

// 1. Итого

// - Есть три типа кавычек. Строки, использующие обратные 
//   кавычки, могут занимать более одной строки в коде 
//   и включать выражения ${…}.
// - Строки в JavaScript кодируются в UTF-16.
// - Есть специальные символы, такие как \n, 
//   и можно добавить символ по его юникодному коду, 
//   используя \u….
// - Для получения символа используйте [].
// - Для получения подстроки используйте slice или substring.
// - Для того, чтобы перевести строку в нижний или верхний 
//   регистр, используйте toLowerCase/toUpperCase.
// - Для поиска подстроки используйте indexOf 
//   или includes/startsWith/endsWith, 
//   когда надо только проверить, есть ли вхождение.
// - Чтобы сравнить строки с учётом правил языка, 
//   используйте localeCompare.

// Строки также имеют ещё кое-какие полезные методы:

// - str.trim() — убирает пробелы в начале и конце строки.
// - str.repeat(n) — повторяет строку n раз.
// - …и другие, которые вы можете найти в справочнике.

// 2. Кавычки

// Строку можно создать с помощью одинарных, двойных либо обратных кавычек:

// let single = 'single-quoted';
// let double = "double-quoted";
// let backticks = `backticks`;

// если использовать обратные кавычки, то в такую строку мы 
// сможем вставлять произвольные выражения, обернув их в ${…}:

// function sum(a, b) {
//   return a + b;
// }
// 
// alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// обратные кавычки могут занимать более одной строки, вот так:

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
// 
// alert(guestList); // список гостей, состоящий из нескольких строк

// 3. Спецсимволы

// Многострочные строки также можно создавать с помощью 
// одинарных и двойных кавычек, используя так называемый 
// «символ перевода строки», который записывается как \n:

// let guestList = "Guests:\n * John\n * Pete\n * Mary";
// alert(guestList); // список гостей, состоящий из нескольких строк

// эти две строки эквивалентны, просто записаны по-разному:
// перевод строки добавлен с помощью символа перевода строки
// let str1 = "Hello\nWorld";
// 
// многострочная строка, созданная с использованием обратных кавычек
// let str2 = `Hello
// World`;
// 
// alert(str1 == str2); // true

// Все спецсимволы начинаются с обратного слеша, 
// \ — так называемого «символа экранирования».

// Он также используется, если необходимо вставить в строку кавычку.
// alert( 'I\'m the Walrus!' ); // I'm the Walrus!

// требование экранировать относится только к таким же кавычкам, 
// как те, в которые заключена строка. 

// alert( `I'm the Walrus!` ); // I'm the Walrus!

// обратный слеш \ служит лишь для корректного прочтения 
// строки интерпретатором, но он не записывается в строку 
// после её прочтения. 
// Когда строка сохраняется в оперативную память, 
// в неё не добавляется символ \.

// если нам надо добавить в строку собственно сам обратный слеш \?
// Это можно сделать, добавив перед ним… ещё один обратный слеш!
// alert( `The backslash: \\` ); // The backslash: \

// 4. Длина строки

// Свойство length содержит длину строки:
// alert( `My\n`.length ); // 3
// \n — это один спецсимвол, поэтому тут всё правильно: длина строки 3.

// (!)length — это свойство
// (!!)str.length — это числовое свойство, а не функция, 
// добавлять скобки не нужно.

// 5. Доступ к символам

// Получить символ, который занимает позицию pos, 
// можно с помощью квадратных скобок: [pos].

// Также можно использовать метод charAt: 
// str.charAt(pos). 
// Первый символ занимает нулевую позицию:

// let str = `Hello`;
// 
// получаем первый символ
// alert( str[0] ); // H
// alert( str.charAt(0) ); // H
// 
// получаем последний символ
// alert( str[str.length - 1] ); // o

// Квадратные скобки — современный способ получить символ, 
// в то время как charAt существует в основном по историческим причинам

// Разница в том, что если символ с такой позицией отсутствует, тогда 
// [] вернёт undefined, а 
// charAt — пустую строку

// let str = `Hello`;
// 
// alert( str[1000] ); // undefined
// alert( str.charAt(1000) ); // '' (пустая строка)

// можно перебрать строку посимвольно, используя for..of:
// for (let char of "Hello") {
//   alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
// }

// 6. Строки неизменяемы

// Содержимое строки в JavaScript нельзя изменить. 
// Нельзя взять символ посередине и заменить его. 
// Как только строка создана — она такая навсегда.

// let str = 'Hi';
// 
// str[0] = 'h'; // ошибка
// alert( str[0] ); // не работает

// Можно создать новую строку и записать её в ту же самую 
// переменную вместо старой.

// let str = 'Hi';
// str = 'h' + str[1]; // заменяем строку
// alert( str ); // hi

// 7. Изменение регистра

// Методы toLowerCase() и toUpperCase() меняют регистр символов:
// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface

// Если мы захотим перевести в нижний регистр какой-то конкретный символ:
// alert( 'Interface'[0].toLowerCase() ); // 'i'

// 8. Поиск подстроки

// Существует несколько способов поиска подстроки.

// 8.1 str.indexOf

// str.indexOf(substr, pos).
// ищет подстроку substr в строке str, начиная с позиции pos, 
// и возвращает позицию, на которой располагается совпадение, 
// либо -1 при отсутствии совпадений.

// let str = 'Widget with id';
// 
// alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
// 
// alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

// Необязательный второй аргумент позволяет начать поиск 
// с определённой позиции.

// первое вхождение "id" — на позиции 1. 
// Для того, чтобы найти следующее, начнём поиск с позиции 2:

// let str = 'Widget with id';
// alert( str.indexOf('id', 2) ) // 12

// Чтобы найти все вхождения подстроки, 
// нужно запустить indexOf в цикле. 
// Каждый раз, получив очередную позицию, начинаем новый 
// поиск со следующей:

// let str = 'Ослик Иа-Иа посмотрел на виадук';
// 
// let target = 'Иа'; // цель поиска
// 
// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;
// 
//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

// Тот же алгоритм можно записать и короче:

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";
// 
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// 8.1.1 str.lastIndexOf(substr, position)

// str.lastIndexOf(substr, position), ищет с конца строки 
// к её началу.

// Он используется тогда, когда нужно получить самое последнее 
// вхождение: перед концом строки или начинающееся 
// до (включительно) определённой позиции.

// При проверке indexOf в условии if есть небольшое неудобство. 
// Такое условие не будет работать:
// let str = "Widget with id";
// 
// if (str.indexOf("Widget")) {
//     alert("Совпадение есть"); // не работает
// }

// Мы ищем подстроку "Widget", и она здесь есть, 
// прямо на позиции 0. 
// Но alert не показывается, т. к. str.indexOf("Widget") 
// возвращает 0, и if решает, что тест не пройден.

// Поэтому надо делать проверку на -1:

// let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//     alert("Совпадение есть"); // теперь работает
// }

// 8.2 includes, startsWith, endsWith

// метод str.includes(substr, pos) возвращает 
// true, если в строке str есть подстрока substr, либо 
// false, если нет.

// Это — правильный выбор, если нам необходимо проверить, есть ли совпадение, но позиция не нужна:
// alert( "Widget with id".includes("Widget") ); // true
// alert( "Hello".includes("Bye") ); // false

// Необязательный второй аргумент str.includes позволяет начать поиск с определённой позиции:
// alert( "Midget".includes("id") ); // true
// alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3

// Методы str.startsWith и str.endsWith проверяют, соответственно, 
// начинается ли и заканчивается ли строка определённой строкой:
// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

// 9. Получение подстроки

// В JavaScript есть 3 метода для получения подстроки: 
// substring, 
// substr, 
// slice

// 9.1 str.slice(start [, end])
// Возвращает часть строки от start до (не включая) end.

// let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
// alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// alert( str.slice(0, 1) );

// Если аргумент end отсутствует, 
// slice возвращает символы до конца строки:
// let str = "stringify";
// alert( str.slice(2) ); // ringify, с позиции 2 и до конца

// Также для start/end можно задавать отрицательные значения. 
// Это означает, что позиция определена как заданное 
// количество символов с конца строки:
// let str = "stringify";
// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
// alert( str.slice(-4, -1) ); // gif

// 9.2 str.substring(start [, end])
// Возвращает часть строки между start и end (не включая) end.

// Это — почти то же, что и slice, но можно задавать start больше end.

// Если start больше end, то метод substring сработает так, 
// как если бы аргументы были поменяны местами.
// let str = "stringify";
// 
// для substring эти два примера — одинаковы
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"
// 
// …но не для slice:
// alert( str.slice(2, 6) ); // "ring" (то же самое)
// alert( str.slice(6, 2) ); // "" (пустая строка)

// (!) Отрицательные значения substring (в отличие от slice), 
// не поддерживает, они интерпретируются как 0.

// 9.3 str.substr(start [, length])
// Возвращает часть строки от start длины length.

// этот метод позволяет указать длину вместо конечной позиции:
// let str = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
// alert( str.substr(2, 4) );

// Значение первого аргумента может быть отрицательным, 
// тогда позиция определяется с конца:
// let str = "stringify";
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
// alert( str.substr(-4, 2) );

// !!!NB

// Какой метод выбрать?
// slice более гибок, 
// он поддерживает отрицательные аргументы, и 
// его короче писать. 

// 10. Сравнение строк
// строки сравниваются посимвольно в алфавитном порядке.

// - Строчные буквы больше заглавных:
//   alert( 'a' > 'Z' ); // true

// - Буквы, имеющие диакритические знаки, 
//   идут «не по порядку»:
//   alert( 'Österreich' > 'Zealand' ); // true

// 10.1 внутреннее представление строк в JavaScript.
// Строки кодируются в UTF-16.
// у любого символа есть соответствующий код.

// Есть специальные методы, позволяющие получить символ 
// по его коду и наоборот.

// 10.1.1 str.codePointAt(pos)
// Возвращает код для символа, находящегося на позиции pos:

// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
// alert( "z".codePointAt(0) ); // 122
// alert( "Z".codePointAt(0) ); // 90

// 10.1.2 String.fromCodePoint(code)
// Создаёт символ по его коду code
// alert( String.fromCodePoint(90) ); // Z

// можно добавлять юникодные символы по их кодам, 
// используя \u с шестнадцатеричным кодом символа:

// 90 — 5a в шестнадцатеричной системе счисления
// alert( '\u005a' ); // Z

// строка, содержащую символы с кодами от 65 до 220 
// — это латиница и ещё некоторые распространённые символы:

// let str = '';
// 
// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// (!) Символы сравниваются по их кодам. 
// Больший код — больший символ. Код a (97) больше кода Z (90).
// - Все строчные буквы идут после заглавных, так как их коды больше.
// - Некоторые буквы, такие как Ö, вообще находятся вне основного алфавита. 
//   У этой буквы код больше, чем у любой буквы от a до z.

// 10.2 Правильное сравнение
// «Правильный» алгоритм сравнения строк сложнее, чем может показаться, 
// так как разные языки используют разные алфавиты.

// все современные браузеры (для IE10− нужна дополнительная библиотека Intl.JS) 
// поддерживают стандарт 
// ECMA 402
// , обеспечивающий правильное сравнение строк на разных языках с учётом их правил

// str.localeCompare(str2) 
// str.localeCompare(str2) возвращает число, 
// которое показывает, какая строка больше 
// в соответствии с правилами языка:
// - Отрицательное число, если str меньше str2.
// - Положительное число, если str больше str2.
// - 0, если строки равны.

// alert( 'Österreich'.localeCompare('Zealand') ); // -1


// ***ЗАДАЧИ***


/* 5.3.1 Задача. Сделать первый символ заглавным.
Напишите функцию ucFirst(str), 
возвращающую строку str с заглавным первым символом. 
Например:
ucFirst("вася") == "Вася"; 
*/

// function ucFirst(str) {
//   if (!str) return str;
// 
//   return str[0].toUpperCase() + str.slice(1);
// }
// 
// let a = 'вася';
// 
// alert (ucFirst(a))

/* 5.3.2 Задача. Проверка на спам
Напишите функцию checkSpam(str), 
возвращающую true, если str содержит 'viagra' или 'XXX', 
а иначе false.

Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

// function checkSpam(str) {
//   let strLower = str.toLowerCase();
// 
//   return (strLower.includes('viagra') || strLower.includes('xxx') ? true : false); 
// }

// РЕШЕНИЕ ИЗ КНИГИ

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
// 
//   return lowerStr.includes('viagra') || lowerStr.includes('xxx'); // (без ?, :)
// }

/* 5.3.3 Задача. Усечение строки
Создайте функцию truncate(str, maxlength), 
которая проверяет длину строки str и, 
если она превосходит maxlength, заменяет конец str на "…", 
так, чтобы её длина стала равна maxlength.

Результатом функции должна быть 
та же строка, если усечение не требуется, либо, 
если необходимо, усечённая строка:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"
*/

// function truncate(str, maxlength) {
//   return (str.length <= maxlength) ?
//   str : str.slice(0, maxlength - 1) + '…';
// }

/* 5.3.4 Задача. Выделить число
Есть стоимость в виде строки "$120". 
То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), 
которая будет из такой строки выделять числовое значение 
и возвращать его.

alert( extractCurrencyValue('$120') === 120 ); // true
*/

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

