'use strict'

// alert( Number(NaN) ); // NaN
// alert( Number(undefined) ); // NaN
// alert( Number(null) ); // 0
// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// Логическое преобразование – Происходит в логических операциях. 
// Может быть вызвано с помощью Boolean(value).
// Подчиняется правилам:
// Значение: 0, null, undefined, NaN, "" -	false
// любое другое значение -	true