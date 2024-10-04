// Получаем элементы со страницы по их ID
const numberInput = document.getElementById('numberInput');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');

// Функция для вычисления квадратного корня по методу Герона
function heronMethod(number) {
    let x = number; // Инициализируем начальное приближение как само число
    let root; // Переменная для хранения результата
    const accuracy = 0.00001; // Точность вычислений

    // Цикл будет выполняться до тех пор, пока разница между x и root не станет меньше заданной точности
    while (true) {
        root = 0.5 * (x + (number / x)); // Формула Герона: (x + number / x) / 2
        if (Math.abs(root - x) < accuracy) {
            break; // Выходим из цикла, когда достигнем достаточной точности
        }
        x = root; // Обновляем значение x для следующей итерации
    }

    return root; // Возвращаем вычисленный квадратный корень
}

// Добавляем обработчик события на кнопку
calculateButton.addEventListener('click', function() {
    const number = parseFloat(numberInput.value); // Преобразуем введённое значение в число

    // Проверяем, является ли введённое значение числом и больше ли оно 0
    if (!isNaN(number) && number > 0) {
        const sqrtResult = heronMethod(number); // Вызываем функцию для расчета квадратного корня
        
        // Проверяем, является ли результат целым числом
        if (Number.isInteger(sqrtResult)) {
            result.textContent = `Квадратный корень из ${number} = ${sqrtResult}`; // Выводим целое число
        } else {
            result.textContent = `Квадратный корень из ${number} ≈ ${parseFloat(sqrtResult.toFixed(5))}`; // Округляем до 5 знаков и убираем лишние нули
        }
    } else {
        result.textContent = 'Пожалуйста, введите положительное число.'; // Выводим сообщение об ошибке, если данные некорректны
    }
});
