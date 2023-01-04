require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const parseDetails = require('./lib/csvParser');
const {User, Detail} = require("./models/models");
const {DataTypes} = require("sequelize");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 6000;

let filePath = path.resolve(__dirname, 'client_build');
let indexPath = path.resolve(__dirname, 'client_build', 'index.html');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

// обслуживание статических ресурсов
app.get(/\.(js|css|map|ico|jpeg)$/, express.static(filePath));
// в ответ на любые другие запросы отправляем 'index.html'
app.use('/', (req, res) => {
// читаем файл `index.html`
    let indexHTML = fs.readFileSync(indexPath, {
        encoding: 'utf8',
    });

// устанавливаем заголовок и статус
    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

// Обработка ошибок, последний Middleware
app.use(errorHandler)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
        await parseDetails();
    } catch (e) {
        console.log(e)
    }
}


start()