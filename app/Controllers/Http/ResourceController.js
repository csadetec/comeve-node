'use strict'

const Resource = use('App/Models/Resource')
const Sector = use('App/Models/Sector')
const Moment = use('App/Models/Moment')

class ResourceController {

  async index({ request, response, view }) {

    const resources = await Resource.query()
      .orderBy('moment_id', 'asc')
      .orderBy('name', 'asc')
      .fetch()

    return resources
  }

  async store({ request, response }) {
    const data = request.only(['name', 'sector_id', 'moment_id'])
    const sector = await Sector.find(data.sector_id)
    if(!sector){
      return {message:'Setor não cadastrado'}
    }
    const moment = await Moment.find(data.moment_id)
    if(!moment){
      return {message:'Momento não cadastrado'}
    }
    const resource = await Resource.findBy({name: data.name})
    if (resource) {
      return ({ message: `${data.name} já foi cadastrado` })
    }   
    return await Resource.create({...data, sector_name:sector.name, moment_name:moment.name})
  }

  async show({ params, request, response, view }) {

    const resource = await Resource.find(params.id)

    return resource

  }

  async update({ params, request, response }) {
    const { id } = params
    const data = request.only(['name', 'sector_id', 'moment_id'])
   
    const sector = await Sector.find(data.sector_id)
    if(!sector){
      return {message:'Setor não cadastrado'}
    }
    const moment = await Moment.find(data.moment_id)
    if(!moment){
      return {message:'Momento não cadastrado'}
    }

    await Resource.query()
      .where('id', id)
      .update({...data, sector_name:sector.name, moment_name:moment.name})

    return  await Resource.find(id)

  }


  async destroy({ params, request, response }) {
  }
}

module.exports = ResourceController
