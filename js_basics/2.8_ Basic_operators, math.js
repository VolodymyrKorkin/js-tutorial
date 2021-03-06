'use strict'
// Сложение и преобразование строк — это особенность бинарного плюса +

// let s = "моя" + "строка";
// alert(s); // моястрока

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// alert(2 + 2 + '1' ); // будет "41", а не "221"

// alert( 6 - '2' ); // 4, '2' приводится к числу
// alert( '6' / '2' ); // 3, оба операнда приводятся к числам

// Приведение к числу, унарный +

// Не влияет на числа
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// Преобразует не числа в числа
// alert( +true ); // 1
// alert( +"" );   // 0
// alert( +"abcd" );   // NaN

// пример 1
// let apples = "2";
// let oranges = "3";
// alert( apples + oranges ); // "23", так как бинарный плюс объединяет строки

// Пример 2
// let apples = "2";
// let oranges = "3";
// // оба операнда предварительно преобразованы в числа
// alert( +apples + +oranges ); // 5

// Пример 3
// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1);
// alert( a ); // 3
// alert( c ); // 0

// Пример 4
// let a, b, c;
// a = b = c = 2 + 2;
// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4

// Инкремент/декремент

// Инкремент ++ увеличивает переменную на 1:
// let counter = 2;
// counter++;        // работает как counter = counter + 1, просто запись короче
// alert( counter ); // 3

//Декремент -- уменьшает переменную на 1:
// let counter = 2;
// counter--;        // работает как counter = counter - 1, просто запись короче
// alert( counter ); // 1

// Подведём итоги:

// Если результат оператора не используется, а нужно только увеличить/уменьшить переменную, 
// тогда без разницы, какую форму использовать:
// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, обе строки сделали одно и то же

// Если хочется тут же использовать результат, то нужна префиксная форма:
// let counter = 0;
// alert( ++counter ); // 1

// Если нужно увеличить и при этом получить значение переменной до увеличения – нужна постфиксная форма:
// let counter = 0;
// alert( counter++ ); // 0
// alert( counter ); // 1

/* Задача 2.8.1. Постфиксная и префиксная формы */
// Чему будут равны переменные a, b, c и d в примере ниже?
// let a = 1, b = 1; // a = 2, b = 2
// let c = ++a; // 2
// let d = b++; // 1

/* Задача 2.8.2. Результат присваивания */
// Чему будут равны переменные a и x после исполнения кода в примере ниже?
// let a = 2; // 4
// let x = 1 + (a *= 2); // 5

/* Задача 2.8.3. Преобразование типов */
// Какой результат будет у выражений ниже?
// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1 (пустая строка приводится к 0)
// true + false // 1 (1 + 0)
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // Infinity
// "  -9  " + 5 // "  -9  5" 
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2 (0 - 2)

/* Задача 2.8.4. Исправьте сложение */
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
// В чём ошибка? Исправьте её. Результат должен быть 3.
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(a + b); // 12

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b); // 3
