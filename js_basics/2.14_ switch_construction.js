// Конструкция switch заменяет собой сразу несколько if.

// Конструкция switch имеет один или более блок case и необязательный блок default.
// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]
// 
//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]
// 
//     default:
//       ...
//       [break]
//   }

// Пример работы
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );  // сработает эта часть кода
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// !! Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//   case 4:
//     alert( 'В точку!' ); // Выполнится это
//   case 5:
//     alert( 'Перебор' ); // потом это
//   default:
//     alert( "Нет таких значений" ); // потом это


//  !! И switch и case допускают любое выражение в качестве аргумента.

// Несколько вариантов case, использующих один код, можно группировать.
// let a = 2 + 2;
// switch (a) {
//   case 4:
//     alert('Правильно!');
//     break;
// 
//   case 3: // (*) группируем оба case
//   case 5:
//     alert('Неправильно!');
//     alert("Может вам посетить урок математики?");
//     break;
// 
//   default:
//     alert('Результат выглядит странновато. Честно.');
// }

// Теперь оба варианта 3 и 5 выводят одно сообщение.

// !!! проверка на равенство всегда строгая === . Тип имеет значение

/* Задание 2.14.1. Напишите "if", аналогичный "switch" 
Напишите if..else, соответствующий следующему switch:*/

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
// 
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
//  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser = prompt('Введите Ваш браузер', '');
//
// if (browser == 'Edge') alert( "You've got the Edge!" );
//
// else if (browser == 'Chrome' 
//   || browser == 'Firefox' 
//   || browser == 'Safari' 
//   || browser == 'Opera') {
//   alert( 'Okay we support these browsers too' );
// }
// else alert( 'We hope that this page looks ok!' );

/* Задание 2.14.2. Переписать условия "if" на "switch"
Перепишите код с использованием одной конструкции switch: */

// const number = +prompt('Введите число между 0 и 3', '');
// 
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// 
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// 
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// 
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//   break;
// 
//   case 1:
//     alert('Вы ввели число 1');
//   break;
// 
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//   break;
// }