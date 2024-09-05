const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Настройка размеров холста
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Увеличиваем размер изображения солнца
let ballRadius = 100;  // Радиус 100 для увеличенного солнца
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;

// Загрузим изображение солнца (solar.gif)
const ballImage = new Image();
ballImage.src = './image/solar.gif';  // Путь к изображению

// Отрисовка изображения солнца
function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Очищаем экран
    // Увеличиваем изображение по радиусу
    ctx.drawImage(ballImage, x - ballRadius, y - ballRadius, ballRadius * 2, ballRadius * 2);
}

// Обновление положения солнца
function updateBallPosition() {
    // Изменяем координаты
    x += dx;
    y += dy;

    // Проверяем столкновения с краями холста
    if (x + ballRadius > canvas.width || x - ballRadius < 0) {
        dx = -dx;  // Меняем направление по горизонтали
    }
    if (y + ballRadius > canvas.height || y - ballRadius < 0) {
        dy = -dy;  // Меняем направление по вертикали
    }

    // Отрисовываем солнце
    drawBall();
}

// Основной цикл
function gameLoop() {
    updateBallPosition();
    requestAnimationFrame(gameLoop);  // Запускаем следующий кадр
}

// Запуск анимации, когда изображение загрузится
ballImage.onload = () => {
    gameLoop();
};
