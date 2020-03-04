'use strict'

const Place = use('App/Models/Place')
//const User = use('App/Models/User')
const Event = use('App/Models/Event')

class PlaceController {

  async index () {
    const places = await Place.query()
      .orderBy('name', 'asc')
      .fetch()

    return places
  }

  async store ({ request, response }) {
    const data = request.only(['name'])
    
    let place =  await Place.findBy('name', data.name)
    
    if(place){
      return ({message: data.name +' já foi cadastrado!'})
    }
    /** */
    place = Place.create(data)

    return place
  }


  async show ({ params, request, response, view }) {
    const { id } = params

    const place = await Place.find(id)

    return place

  }

  async update ({ params, request, response }) {
    const data = request.only(['name'])
    
    const { id } = params
    
    //let place = await Place.find(id) 
 
    await Place.query()
      .where('id', id)
      .update(data)

    await Event.query()
      .where('place', place.name)
      .update({name: data.name})

    const place = await Place.find(id)
    //console.log('id :', id, 'place_id :',place_id)
    return place
    //return place_id
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = PlaceController
