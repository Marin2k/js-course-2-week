// Получаем элементы input, button и p из HTML
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');

// Функция для проверки, является ли год високосным
function isLeapYear(year) {
    // Високосный год: кратен 400 или кратен 4, но не кратен 100
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

// Функция для получения количества дней в месяце
function getDaysInMonth(month, year) {
    // Массив количества дней в обычном году
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Если месяц — февраль и год високосный, возвращаем 29 дней
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }

    // Возвращаем количество дней в месяце
    return daysInMonth[month - 1];
}

// Добавляем обработчик события на кнопку
calculateButton.addEventListener('click', function () {
    const month = parseInt(monthInput.value); // Преобразуем введённое значение месяца в число
    const year = parseInt(yearInput.value); // Преобразуем введённое значение года в число
    
    // Проверяем, введены ли корректные значения для месяца и года
    if (!isNaN(month) && !isNaN(year) && month >= 1 && month <= 12) {
        const days = getDaysInMonth(month, year); // Получаем количество дней в месяце
        result.textContent = `В ${month} месяце ${year} года: ${days} дней.`; // Выводим результат
    } else {
        result.textContent = 'Пожалуйста, введите корректные данные.'; // Сообщение об ошибке
    }
});
