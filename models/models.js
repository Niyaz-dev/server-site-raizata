const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Detail = sequelize.define('detail', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    idExt: {type: DataTypes.INTEGER, unique: true},
    brand: {type: DataTypes.STRING(1000)},
    model: {type: DataTypes.STRING(1000)},
    year: {type: DataTypes.STRING(1000)},
    sparePart: {type: DataTypes.STRING(1000)},
    version: {type: DataTypes.STRING(1000)},
    fuel: {type: DataTypes.STRING(1000)},
    volume: {type: DataTypes.STRING(1000)},
    engine: {type: DataTypes.STRING(1000)},
    transmission: {type: DataTypes.STRING(1000)},
    bodyType: {type: DataTypes.STRING(1000)},
    originNumber: {type: DataTypes.STRING(1000)},
    description: {type: DataTypes.STRING(1000)},
    warehouseInfo: {type: DataTypes.STRING(1000)},
    price: {type: DataTypes.INTEGER},
    currency: {type: DataTypes.STRING(1000)},
    discount: {type: DataTypes.STRING(1000)},
    address: {type: DataTypes.STRING(1000)},
    phones: {type: DataTypes.STRING(1000)},
    email: {type: DataTypes.STRING(1000)},
    name: {type: DataTypes.STRING(1000)},
    img: {type: DataTypes.STRING(10000)},
    inOrder: {type: DataTypes.STRING(1000)},
    video: {type: DataTypes.STRING(1000)},
})

module.exports = {
    User,
    Detail
}