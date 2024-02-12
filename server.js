const express = require('express');
const app = express();

// Добавляем middleware для обработки CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешаем доступ со всех доменов
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Разрешаем различные методы запросов
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Разрешаем указанные заголовки
    next();
});

// Далее обработка запросов вашего сервера
// Например, ваш обработчик запросов к API
app.get('/api/movies', (req, res) => {
    // Здесь ваш код обработки запросов к API
});

// Запускаем сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
