'use strict'

const Place = use('App/Models/Place')
//const User = use('App/Models/User')
const Event = use('App/Models/Event')

class PlaceController {

  async index () {
    return await Place.query()
      .orderBy('name', 'asc')
      .fetch()

  }

  async store ({ request, response }) {
    const data = request.only(['name'])
    
    const place =  await Place.findBy('name', data.name)
    
    if(place){
      return ({message: data.name +' já foi cadastrado!'})
    }
    /** */
    return await Place.create(data)
  }


  async show ({ params, request, response, view }) {
    const { id } = params

    return await Place.find(id)

  }

  async update ({ params, request, response }) {
    const data = request.only(['name'])
    
    const { id } = params

    await Place.query()
      .where({id})
      .update(data)

    await Event.query()
      .where({place_id:id})
      .update({'place_name': data.name})

    return await Place.find(id)

  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = PlaceController
