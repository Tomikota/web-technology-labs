// Лабораторная работа № 3
// Тема: Объекты, специальные типы и generics.

// Задание 1. Объект «Машина» с пятью параметрами.

interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
}

const car: Car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "чёрный",
    mileage: 35000
};

console.log("Задание 1. Информация об автомобиле:");
console.log(`Марка: ${car.brand}`);
console.log(`Модель: ${car.model}`);
console.log(`Год выпуска: ${car.year}`);
console.log(`Цвет: ${car.color}`);
console.log(`Пробег: ${car.mileage} км`);

// Задание 2. Объединение элементов массива строк.

const words: string[] = ["Привет, ", "мир", "!"];
const phrase: string = words.join("");

console.log("\nЗадание 2. Объединение строк:");
console.log(phrase);

// Задание 3. Вывод двух диапазонов чисел столбиком.

function printRange(start: number, end: number): void {
    for (let number: number = start; number <= end; number++) {
        console.log(number);
    }
}

console.log("\nЗадание 3. Диапазон от 13 до 17:");
printRange(13, 17);

console.log("\nДиапазон от 98 до 102:");
printRange(98, 102);

// Пример generic — обобщённой функции из темы лабораторной.

function identity<T>(value: T): T {
    return value;
}

console.log("\nДополнительный пример generic:");
console.log(identity<number>(42));
console.log(identity<string>("TypeScript"));
