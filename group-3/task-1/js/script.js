// Функция для поиска количества максимальных значений
function findMaxOccurrences() {
    // Получаем значение из поля ввода
    const input = document.getElementById('numberInput').value;
    
    // Разбиваем строку на массив чисел, удаляя пробелы
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    
    // Проверяем, есть ли вообще числа после ввода
    if (numbers.length === 0 || isNaN(numbers[0])) {
        document.getElementById('result').innerText = 'Введите корректные числа.';
        return; // Выход, если данные некорректны
    }
    
    // Находим максимальное число в массиве
    const maxNumber = Math.max(...numbers);
    
    // Считаем количество вхождений максимального числа
    const countMax = numbers.filter(num => num === maxNumber).length;
    
    // Выводим результат в элемент <p>
    document.getElementById('result').innerText = 
        `Максимальное число: ${maxNumber}, встречается ${countMax} раз(а).`;
}
