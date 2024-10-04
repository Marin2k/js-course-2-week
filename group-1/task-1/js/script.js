// Получаем элементы input, button и p из HTML
const ageInput = document.getElementById('ageInput');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');

// Функция для склонения слова "год" в зависимости от возраста
function getAgeDeclension(age) {
    if (age % 100 >= 11 && age % 100 <= 14) {
        return 'лет'; // Исключения для чисел от 11 до 14
    }
    switch (age % 10) {
        case 1:
            return 'год'; // Если возраст заканчивается на 1 (но не на 11)
        case 2:
        case 3:
        case 4:
            return 'года'; // Если возраст заканчивается на 2, 3 или 4
        default:
            return 'лет'; // Во всех остальных случаях
    }
}

// Добавляем обработчик события на кнопку
submitButton.addEventListener('click', function () {
    const age = parseInt(ageInput.value); // Преобразуем введенное значение в число
    
    // Проверяем, введено ли корректное число
    if (!isNaN(age) && age > 0) {
        const ageDeclension = getAgeDeclension(age); // Получаем правильное склонение
        result.textContent = `${age} ${ageDeclension}`; // Выводим результат в тег p
    } else {
        result.textContent = 'Пожалуйста, введите корректный возраст'; // Сообщение об ошибке
    }
});
