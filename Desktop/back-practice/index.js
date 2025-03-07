import http from 'http'; // Встроенный модуль Node.js для создания веб-серверов.
import pg from 'pg'; // Модуль для работы с PostgreSQL.
import { products } from './catalog.js';

async function main() {
    console.log('start', new Date()); // Печатает в консоль время начала работы программы.

    const PG_URI = 'postgres://postgres:admin@localhost:5432/my_database'; // Строка подключения к базе данных PostgreSQL.

    const client = new pg.Client(PG_URI); // Создание клиента для подключения к базе данных PostgreSQL.

    await client.connect(); // Подключаемся к базе данных асинхронно.

    const res = await client
    .query('select 1 + 1 as sum') // Запрос к базе данных, который вычисляет 1 + 1.
    .catch((e) => { // Если запрос не выполнится, выводим ошибку.
      console.log(e.message);
      process.exit(1); // Завершаем программу с кодом ошибки 1.
    });

    console.log(res.rows); // Выводим результат запроса в консоль.

    // Создаем HTTP-сервер, который будет отвечать на запросы.
    const server = new http.Server(async (req, res) => {
        // Выполняем запрос к базе данных для получения данных из таблицы users.
        const { rows } = await client.query(
            'SELECT id, name, email FROM users LIMIT 10'
        ); // Извлекаем ID, имя и email пользователей.
        
        // Отправляем результат в ответ на HTTP-запрос.
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(rows)); // Отправляем результат в формате JSON.
    });

    server.listen(8080); // Сервер начинает слушать на порту 8080.
    console.log('server started at port 8080'); // Сообщение о том, что сервер запущен.
}

main().catch((e) => { // Если при выполнении программы возникает ошибка, она будет поймана и выведена в консоль.
    console.log(e);
    process.exit(1); // Завершаем программу с кодом ошибки 1.
});