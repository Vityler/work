"use strict";

console.log('arr' + " - object");

let incr=10,//инкримент увеличивает значение на единицу
    decr=10;//декримент уменьшает значение на единицу

    incr++;//постфиксная запись
    --decr;//префиксная запись

    console.log(incr);
    console.log(decr);

    console.log(5%2);//остаток от деления двух чисел

    //= - присвоение
    // == - сравнение
    // === - строгое сравнение по типу данных

    console.log(2*4 == 8);
    console.log(2*4 ==='8');
    //логические операторы 
    // && - и, работает только с правдивыми выражениями (правда-правда)
    // || - или

    const isChecked = true,
          isClosed= false;
    
    console.log(isChecked || isClosed);
