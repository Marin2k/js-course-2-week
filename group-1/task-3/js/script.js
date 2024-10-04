// Получаем элементы со страницы
const temperature = document.getElementById('temperature');
const precipitation = document.getElementById('precipitation');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const decideButton = document.getElementById('decideButton');
const result = document.getElementById('result');

// Функция для принятия решения на основе параметров
function shouldPlayBadminton(temp, precip, wind, humid) {
    // Условие: играем только в воскресенье, при теплой погоде, ясном небе и без ветра
    if (temp === 'тепло' && precip === 'ясно' && wind === 'нет' && humid === 'низкая') {
        return true; // Все условия выполнены, можно играть
    }
    return false; // В любом другом случае играть не стоит
}

// Добавляем обработчик события на кнопку
decideButton.addEventListener('click', function() {
    // Получаем значения из выпадающих списков
    const tempValue = temperature.value;
    const precipValue = precipitation.value;
    const windValue = wind.value;
    const humidValue = humidity.value;

    // Вызываем функцию принятия решения
    const play = shouldPlayBadminton(tempValue, precipValue, windValue, humidValue);

    // Выводим результат
    if (play) {
        result.textContent = 'Да, сегодня отличный день для бадминтона!';
    } else {
        result.textContent = 'Нет, сегодня не стоит играть в бадминтон.';
    }
});
