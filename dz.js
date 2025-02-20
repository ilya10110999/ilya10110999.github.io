const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let currentColor = '#000000';

// Настройки кисти
ctx.strokeStyle = currentColor;
ctx.lineWidth = 15;
ctx.lineCap = 'round';

// Обработчики выбора цвета
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Удаляем активный класс у всех кнопок
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        // Устанавливаем новый цвет
        currentColor = btn.dataset.color;
        ctx.strokeStyle = currentColor;
        // Добавляем активный класс текущей кнопке
        btn.classList.add('active');
    });
});

// Обработчики рисования
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(
        event.clientX - canvas.offsetLeft, 
        event.clientY - canvas.offsetTop
    );
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        ctx.lineTo(
            event.clientX - canvas.offsetLeft, 
            event.clientY - canvas.offsetTop
        );
        ctx.stroke();
    }
});
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});