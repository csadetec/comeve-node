'use strict'

const Event = use('App/Models/Event')
const EventResource = use('App/Models/EventResource')
const EventResourceController = use('./EventResourceController')
const Place = use('App/Models/Place')
const Sector = use('App/Models/Sector')
const Resource = use('App/Models/Resource')
//const Teste = use('App/Models/EventResourceController')
const er = new EventResourceController()

class EventController {

  async index ({ request, response, view }) {

    const events = await Event.query()
      .with('user')
      .with('resources')
      .fetch()

    return events

  }

  async store ({ request, auth }) {
    const data = request.only(['name', 'place_id', 'date', 'start', 'end'])
    const { resources } = request.only(['resources'])

    const place = await Place.find(data.place_id)
    if(!place){
      return {message:'Lugar não Cadastrado'}
    }

    const event = await Event.create({ ...data, user_id: auth.user.id, place_name:place.name })

    for(let r of resources ){
        await EventResource.create({resource_id:r.id, event_id:event.id, accept:r.accept})
    }

    return event
    /** */
  }

  async show ({ params, request, response, view }) {
    
   
    const { id } = params

    const event = await Event.find(id)
    event.user = await event.user().fetch()

    event.resources = await event.resources().fetch()
    /** */
    return event
     /* 
    teste.sector = await resources.sector().fetch()

    /** */
  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'place_id', 'date', 'start', 'end'])
    const { id } = params
    const {resources} = request.only(['resources'])
    
    await Event.query()
      .where('id', id)
      .update(data)
    
    await EventResource.query()
      .where('event_id', id)
      .delete()
    for(let r of resources ){
        await EventResource.create({resource_id:r.id, event_id:id, accept:r.accept})
    }

    const event = await Event.find(id)
    event.resources = await event.resources().fetch()
    return event
    /** */
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = EventController
