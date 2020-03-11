'use strict'

const Event = use('App/Models/Event')
//const EventResource = use('App/Models/EventResource')
const EventResourceController = use('./EventResourceController')
const EventUserController = use('./EventUserController')
const Place = use('App/Models/Place')

const EventResource = new EventResourceController()
const EventUser = new EventUserController()

class EventController {

  async index ({ request, response, view }) {

    return await Event.query()
      .with('user')
      .with('resources')
      .with('guests')
      .fetch()

  }

  async store ({ request, auth }) {
    const data = request.only(['name', 'place_id', 'parents', 'amount_people', 'follow_id', 'date', 'start', 'end'])
    const { resources, guests } = request.only(['resources', 'guest'])

    const place = await Place.find(data.place_id)
    if(!place){
      return {message:'Lugar não Cadastrado'}
    }
    const event = await Event.create({ ...data, user_id: auth.user.id, place_name:place.name })

    await EventResource.store(event.id, resources)
    event.resources = await event.resources().fetch()
    event.guests = await event.guests().fetch()


    return event

  }

  async show ({ params, request, response, view }) {
    
    const { id } = params

    const event = await Event.find(id)
    event.user = await event.user().fetch()
    event.resources = await event.resources().fetch()
    event.guests = await event.guests().fetch()
    return event

  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'place_id', 'date', 'start', 'end'])
    const { id } = params
    const {resources, guests} = request.only(['resources', 'guests'])
    
    await Event.query()
      .where('id', id)
      .update(data)

    await EventResource.store(id, resources)
    await EventUser.store(id, guests)
  
    const event = await Event.find(id)
    event.resources = await event.resources().fetch()
    event.guests = await event.guests().fetch()
    return event
    /** */
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = EventController
