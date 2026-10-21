"use strict";
// Лабораторная работа № 2
// Задание 1. Расчёт общей суммы покупки
let product1 = "Тетрадь";
let price1 = 376;
let quantity1 = 2;
let product2 = "Ручка";
let price2 = 75;
let quantity2 = 3;
let total1 = price1 * quantity1;
let total2 = price2 * quantity2;
let purchaseTotal = total1 + total2;
console.log("Задание 1. Общая сумма покупки");
console.log(product1 + ": " + price1 + " руб. x " + quantity1);
console.log(product2 + ": " + price2 + " руб. x " + quantity2);
console.log("Итого:", purchaseTotal, "рублей");
// Задание 2. Массив с названиями и стоимостью машин
let cars = [
    ["Daewoo Matiz", 150000],
    ["Kia Rio", 900000],
    ["Toyota Corolla", 1200000]
];
console.log("\nЗадание 2. Название и стоимость машин");
cars.forEach(function (car) {
    console.log(car[0] + " — " + car[1] + " рублей");
});
// Задание 3. Среднее арифметическое элементов массива
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
let numbers = [10, 20, 30, 40, 50];
console.log("\nЗадание 3. Среднее арифметическое");
console.log("Массив чисел:", numbers);
console.log("Среднее арифметическое:", calculateAverage(numbers));
