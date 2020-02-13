'use strict'

const Resource = use('App/Models/Resource')

class ResourceController {

  async index ({ request, response, view }) {
    
    const resources = await Resource.all()

    return resources
  }

  async store ({ request, response }) {
    
    const data = request.only(['name', 'sector'])

    const resource = Resource.create(data)

    return resource
  }


  async show ({ params, request, response, view }) {
    const resource = Resource.findBy('id', params.id)

    return resource 

  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'sector'])

    const { id } = params

    const update = await Resource.query()
      .where('id', id)
      .update(data)

    return update  
    //const resource 

  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = ResourceController
