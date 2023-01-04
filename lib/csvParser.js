const csv = require('csv-parser')
const fs = require('fs')
const {Detail} = require('../models/models')
const {DataTypes} = require("sequelize");

const item = []
const parseDetails = async () => {
    await Detail.destroy({
        where: {},
    });
    try {
        fs.createReadStream('./lib/data.csv')
            .pipe(csv({ separator: ';' }))
            .on('data', async (data) => {
                try {
                    await Detail.create({
                        idExt: data['﻿ID_EXT'],
                        brand: data['Марка'],
                        model: data['Модель'],
                        year: data['Год'],
                        sparePart: data['Запчасть'],
                        version: data['Версия'],
                        fuel: data['Топливо'],
                        volume: data['Объем'],
                        engine: data['Тип Двигателя'],
                        transmission: data['Коробка'],
                        bodyType: data['Тип кузова'],
                        originNumber: data['Оригинальный номер'],
                        description: data['Описание'],
                        warehouseInfo: data['Складская информация'],
                        price: data['Цена'],
                        currency: data['Валюта'],
                        discount: data['Скидка'],
                        address: data['Адрес'],
                        phones: data['Телефоны'],
                        email: data['Email'],
                        name: data['Имя'],
                        img: data['Фото'],
                        inOrder: data['Под заказ'],
                        video: data['Видео'],
                    })
                } catch (e) {
                    console.log(e);
                }

            })
    } catch (e) {
        console.log(e)
    }

}

module.exports = parseDetails;
