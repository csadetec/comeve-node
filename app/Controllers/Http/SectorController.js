'use strict'

const Sector = use('App/Models/Sector')

class SectorController {

  async index ({ request, response, view }) {
    
    const sectors = await Sector.all()

    return sectors
  }

  

  async store ({ request, response }) {

    const data = request.only(['name'])

    let sector = await  Sector.findBy('name', data.name)

    if(sector){
      return ({message: `${data.name} já foi cadastrado`})
    }

    sector = Sector.create(data)
    //console.log(sector)

    return sector

  }


  async show ({ params, request, response, view }) {
    const { id } = params
    
    const sector = await  Sector.findBy('id', id)

    return sector
  }

  async update ({ params, request, response }) {
    const { id } = params
    const data = request.only(['name'])

    const sector_id = await Sector.query()
      .where('id', id)
      .update(data)

    const sector = await Sector.findBy('id', sector_id)

    return sector
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = SectorController
