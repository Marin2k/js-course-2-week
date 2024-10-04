// Получаем элементы: поле ввода и canvas
const heightInput = document.getElementById('heightInput');
const canvas = document.getElementById('pyramidCanvas');
const ctx = canvas.getContext('2d');

// Настройки кубиков
const squareSize = 5; // Базовый размер каждого квадратика
const gap = 4; // Промежуток между квадратиками

// Устанавливаем начальные размеры canvas
canvas.width = 600; // Ширина для размещения пирамид

// Функция для построения пирамид
function drawPyramids(height) {
    // Устанавливаем высоту canvas в зависимости от высоты пирамид
    canvas.height = height * (squareSize + gap) + 50; // +100 для отступа сверху

    // Очищаем canvas перед каждой отрисовкой
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Первая пирамида (развернутая слева)
    let xStart = 275; // Начальная координата X для первой пирамиды (уменьшено для близости)
    let yStart = canvas.height - (height * (squareSize + gap)); // Начинаем с низа canvas

    // Отрисовываем первую пирамиду
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= row; col++) {
            // Координаты каждого квадрата
            let x = xStart - col * (squareSize + gap);
            let y = yStart + row * (squareSize + gap);
            // Рисуем квадрат
            ctx.fillStyle = 'red';
            ctx.fillRect(x, y, squareSize, squareSize); // Фиксированный размер квадрата
        }
    }

    // Вторая пирамида (развернутая справа)
    xStart = 295; // Начальная координата X для второй пирамиды (уменьшено для близости)
    yStart = canvas.height - (height * (squareSize + gap)); // Начинаем с низа canvas

    // Отрисовываем вторую пирамиду
    for (let row = 0; row < height; row++) {
        for (let col = 0; col <= row; col++) {
            // Координаты каждого квадрата
            let x = xStart + col * (squareSize + gap);
            let y = yStart + row * (squareSize + gap);
            // Рисуем квадрат
            ctx.fillStyle = 'red';
            ctx.fillRect(x, y, squareSize, squareSize); // Фиксированный размер квадрата
        }
    }
}

// Событие при изменении высоты пирамиды
heightInput.addEventListener('input', function () {
    const height = parseInt(heightInput.value);
    drawPyramids(height);
});

// Отрисовать пирамиды при первой загрузке
drawPyramids(parseInt(heightInput.value));
