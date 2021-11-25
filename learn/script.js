"use strict";
let number = 5;//изменяемая переменная
const leftBorderWidht = 1;// постоянная переменная, которую можно изменить с помощью функции obj


number = 10;
console.log(number);//пример изменения переменной

const obj={
a : 50
};

obj.a = 10;
console.log(obj);// постоянная переменная, которую можно изменить с помощью функции obj

console.log(name);
var name = 'Ivan';// устаревший формат переменной, консоль не выдает результат до того, как  указали переменную
name = 'Alex';
{
    var result = 50;//let в фигурных скобках не работает, вар работает
}
console.log(result);