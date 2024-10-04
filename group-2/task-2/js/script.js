// Получаем элементы по их ID
const numberInput = document.getElementById('numberInput');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');

// Функция для поиска простых чисел по методу Решето Эратосфена
function findPrimes(limit) {
    let sieve = new Array(limit + 1).fill(true); // Создаем массив и заполняем его значениями "true"
    sieve[0] = sieve[1] = false; // Числа 0 и 1 не являются простыми

    // Алгоритм решето Эратосфена
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false; // Убираем кратные числа
            }
        }
    }

    // Возвращаем массив простых чисел
    return sieve
        .map((isPrime, index) => isPrime ? index : null)
        .filter(number => number !== null); // Фильтруем, оставляя только простые числа
}

// Обработчик нажатия кнопки
calculateButton.addEventListener('click', function() {
    const limit = parseInt(numberInput.value); // Преобразуем введённое значение в число

    if (!isNaN(limit) && limit > 1) { // Проверяем, является ли введенное значение числом и больше ли оно 1
        const primes = findPrimes(limit); // Вызываем функцию для поиска простых чисел
        result.textContent = `Простые числа до ${limit}: ${primes.join(', ')}`; // Выводим результат в элемент с ID 'result'
    } else {
        result.textContent = 'Пожалуйста, введите число больше 1.'; // Сообщение об ошибке, если ввод некорректен
    }
});
