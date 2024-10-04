// Получаем элементы из HTML по их ID
const inputElement = document.getElementById('numbersInput'); // Поле для ввода чисел
const resultElement = document.getElementById('result'); // Элемент для вывода медианы
const medianText = document.getElementById('medianText'); // Элемент для отображения текста "Медиана"
const button = document.getElementById('calculateButton'); // Кнопка для запуска

// Функция для нахождения медианы
function findMedian(numbers) {
    numbers.sort((a, b) => a - b); // Сортируем массив по возрастанию

    const middleIndex = Math.floor(numbers.length / 2); // Находим индекс середины массива

    // Проверяем, четное или нечетное количество чисел
    if (numbers.length % 2 === 0) {
        // Если четное, медиана - это среднее двух средних чисел
        return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
    } else {
        // Если нечетное, медиана - это центральное число
        return numbers[middleIndex];
    }
}

// Обработчик для кнопки
button.addEventListener('click', function() {
    // Получаем значения из поля ввода, удаляем пробелы и разделяем по запятой
    const input = inputElement.value.trim();
    
    if (input) {
        // Преобразуем строку в массив чисел
        const numbersArray = input.split(',').map(Number).filter(n => !isNaN(n));

        // Если массив не пустой, находим медиану
        if (numbersArray.length > 0) {
            const median = findMedian(numbersArray); // Вызываем функцию нахождения медианы
            resultElement.textContent = median; // Отображаем медиану
            
            // Показываем элемент с текстом "Медиана" после вычисления
            medianText.style.display = 'block';
        } else {
            resultElement.textContent = 'Ошибка ввода'; // Ошибка если введены не числа
            medianText.style.display = 'block'; // Показываем ошибку
        }
    } else {
        resultElement.textContent = 'Введите числа'; // Если поле ввода пустое
        medianText.style.display = 'block'; // Показываем предупреждение
    }
});
