// Получаем элементы страницы: поле ввода, кнопку и элемент для вывода результата
const arrayInput = document.getElementById('arrayInput');
const sortButton = document.getElementById('sortButton');
const resultDisplay = document.getElementById('result');

// Добавляем обработчик события для кнопки "Отсортировать"
sortButton.addEventListener('click', function () {
    // Получаем строку с числами от пользователя и преобразуем ее в массив
    const inputArray = arrayInput.value.split(',').map(Number);

    // Проверяем, ввел ли пользователь корректные данные
    if (inputArray.some(isNaN)) {
        resultDisplay.textContent = "Пожалуйста, введите корректные числа!";
        return;
    }

    // Вызываем функцию сортировки MergeSort
    const sortedArray = mergeSort(inputArray);

    // Выводим отсортированный результат
    resultDisplay.textContent = "Отсортированный массив: " + sortedArray.join(', ');
});

// Реализуем функцию сортировки MergeSort
function mergeSort(array) {
    // Базовый случай: если длина массива 1 или меньше, он уже отсортирован
    if (array.length <= 1) {
        return array;
    }

    // Находим середину массива
    const mid = Math.floor(array.length / 2);

    // Рекурсивно сортируем левую и правую половины
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    // Объединяем отсортированные половины
    return merge(left, right);
}

// Функция для слияния двух отсортированных массивов
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Сливаем массивы, пока есть элементы в обоих массивах
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; // Увеличиваем индекс в левом массиве
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // Увеличиваем индекс в правом массиве
        }
    }

    // Добавляем оставшиеся элементы из левого и правого массивов (если они есть)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
