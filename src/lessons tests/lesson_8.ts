// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {elGR} from "@mui/material/locale";

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    return nums.reduce((acc, el) => {
        return acc + el
    }, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    return (a === b && b === c)
        ? "10"
        : (a + b <= c || a + c <= b || b + c <= a)
            ? "00"
            : (a !== b && a !== c && b !== c)
                ? "11"
                : "01"
}


// 3. Функция getSum принимает параметром целое число и возвращаетa
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let res = 0
    let num = 0
    while (number) {
        num = number % 10;
        number = (number - num) / 10;
        res += num;
    }
    return res;
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let num1 = 0
    let num2 = 0
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 === 0) {
            num1 += arr[i]
        } else {
            num2 += arr[i]
        }
    }
    return num1 > num2
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 1 === 0 && array[i] > 0) {
            newArr.push(array[i] ** 2)
        }
    }
    return newArr
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return (N * (N + 1) / 2)
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const res = []
    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            let num = banknotes[i]
            while (amountOfMoney - num >= 0) {
                amountOfMoney -= num
                res.push(num)
            }
        }
    }
    return res
}