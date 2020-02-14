'use strict'

const Sector = use('App/Models/Sector')

class SectorController {

  async index ({ request, response, view }) {
    
    const sectors = Sector.all()

    return sectors
  }

  

  async store ({ request, response }) {

    const data = request.only(['name'])

    const sector = Sector.create(data)

    return sector

  }


  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = SectorController
