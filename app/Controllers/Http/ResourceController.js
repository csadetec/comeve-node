'use strict'

const Resource = use('App/Models/Resource')
const Sector = use('App/Models/Sector')

class ResourceController {

  async index({ request, response, view }) {

    const resources = await Resource.query()
      .orderBy('name', 'asc')
      .fetch()

    return resources
  }

  async store({ request, response }) {

    const data = request.only(['name', 'sector_id'])
  
    const sector = await Sector.find(data.sector_id)
    if(!sector){
      return {message:'Setor não cadastrado'}
    }

    let resource = await Resource.findBy('name', data.name)

    if (resource) {
      return ({ message: `${data.name} já foi cadastrado` })
    }
    resource = await Resource.create({...data, sector_name:sector.name})

    return resource
  }


  async show({ params, request, response, view }) {

    const resource = await Resource.find(params.id)

    return resource

  }

  async update({ params, request, response }) {
    const data = request.only(['name', 'sector'])
    const { id } = params

    await Resource.query()
      .where('id', id)
      .update(data)

    const resource = await Resource.find(id)

    return resource


  }


  async destroy({ params, request, response }) {
  }
}

module.exports = ResourceController
