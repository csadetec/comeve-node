'use strict'

const Sector = use('App/Models/Sector')
const User = use('App/Models/User')
const Resource = use('App/Models/Resource')

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

    let sector = await Sector.find(id)

    //rename sector user
    await User.query()
      .where('sector', sector.name)
      .update({ sector:data.name })

    await Resource.query()
      .where('sector', sector.name)
      .update({ sector:data.name })

    await Sector.query()
      .where('id', id)
      .update(data)

    sector = await Sector.find(id)

    return sector
  }

  async destroy ({ params, request, response }) {
  }

  async findName(name){
    const user = await Sector.findBy('name', name)

    return user
  }
}


module.exports = SectorController
