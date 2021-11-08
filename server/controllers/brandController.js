const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
  async create(req, res) {
    const {name} = req.body
    try {
      const brand = await Brand.create({name})
      return res.json(brand)
    } catch (e) {
      console.log('Error', e.message)
      return new ApiError(e.status, e.message);
    }
  }

  async getAll(req, res) {
    const brands = await Brand.findAll()
    return res.json(brands)
  }

}

module.exports = new BrandController()