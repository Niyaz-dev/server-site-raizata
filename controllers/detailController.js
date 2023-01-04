const ApiError = require('../error/ApiError');
const {Detail} = require("../models/models");

class DetailController {
    async getAll(req, res) {
        let { limit, page} = req.query
        page = page || 1
        limit = limit || 30
        let offset = page * limit - limit
        let devices = await Detail.findAndCountAll({limit, offset})
        devices.rows.forEach(item => {
            item.img = item.img.split(',');
        })
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}

module.exports = new DetailController()