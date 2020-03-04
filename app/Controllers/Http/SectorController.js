'use strict'

const Sector = use('App/Models/Sector')
const User = use('App/Models/User')
const Resource = use('App/Models/Resource')

class SectorController {

  async index ({ request, response, view }) {
    
    const sectors = await Sector.query()
      .orderBy('name', 'asc')
      .fetch()
    return sectors
  }

  async store ({ request, response }) {
    const data = request.only(['name'])

    let sector = await  Sector.findBy('name', data.name)

    if(sector){
      return ({message: `${data.name} já foi cadastrado`})
    }

    sector = Sector.create(data)
    return sector

  }


  async show ({ params, request, response, view }) {
    const { id } = params
    
    const sector = await  Sector.find(id)

    return sector
  }

  async update ({ params, request, response }) {
    const { id } = params
    const data = request.only(['name'])

    await Sector.query()
      .where('id', id)
      .update(data)

    const sector = await Sector.find(id)

    //rename sector user
    await User.query()
      .where('sector_id', id)
      .update({ sector_name:data.name })

    await Resource.query()
      .where('sector_id', id)
      .update({ sector_name:data.name })

    return sector
  }

  async destroy ({ params, request, response }) {
  }

}


module.exports = SectorController
