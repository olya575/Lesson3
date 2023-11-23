//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const fruts = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomat" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
// ];
// let names = fruts.map((item) => item.name);
// console.log(names);


//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// let a = 2;
// for (a; a < 11; a++) {
//     if (a % 2 === 1) continue;
//     console.log(a);
// }



//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.log(`цифра ${i}!`);
// }





// let i = 0;
// while (i < 5) {
//     console.log(`Цифра ${i}!`);
//     i++;
// }



//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//     const chislo = +prompt('Введіть число більше за 100');
//     if (!chislo) break;
//     else
//         if (chislo <= 100)
//             alert('Спробуйте ввести ще раз')
//         else break;

// }


//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];


// const girls = [
//     { age: 23, name: "Оля" },
//     { age: 29, name: "Аня" },
//     { age: 10, name: "Юля" },
//     { age: 20, name: "Катя" },
// ];
// console.log(girls);

// let girlage = girls.map((item) => item.age);
// console.log(girlage);

// let midage = girlage.reduce((summ, item) => summ + item) / girlage.length;
// console.log(midage);