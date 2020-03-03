'use strict'

const Resource = use('App/Models/Resource')

class ResourceController {

  async index ({ request, response, view }) {
    
    //const resources = await Resource.all()
    const resources = await Resource.query()
      .with('sector')
      .orderBy('name', 'asc')
      .fetch()

    return resources
  }

  async store ({ request, response }) {
    
    const data = request.only(['name', 'sector_id'])

    let resource = await Resource.findBy('name', data.name)

    if(resource){
      return ({message: `${data.name} já foi cadastrado`})
    }

    resource = await Resource.create(data)

    return resource
  }


  async show ({ params, request, response, view }) {
    
    const resource = await Resource.findBy('id', params.id)
    
    resource.sector = await resource.sector().fetch()

    return resource 

  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'sector'])

    const { id } = params

    const resourceUpdate = await Resource.query()
      .where('id', id)
      .update(data)

    const resource = await Resource.find(id)

    return resource


  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = ResourceController
