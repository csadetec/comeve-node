'use strict'

const Event = use('App/Models/Event')
const EventResource = use('App/Models/EventResource')
const EventResourceController = use('./EventResourceController')
//const Teste = use('App/Models/EventResourceController')
const er = new EventResourceController()

class EventController {

  async index ({ request, response, view }) {

    const events = await Event.query()
      .with('user')
      .with('place')
      .with('resources')
      .fetch()

    return events

  }

  async store ({ request, auth }) {
    const data = request.only(['name', 'place_id', 'date', 'start', 'end'])
    const { itemsResources } = request.only(['itemsResources'])
      
    const event = await Event.create({user_id: auth.user.id, ...data})
    await er.store(event.id, itemsResources)
    //console.log(event)

    return event
    /** */
  }

  async show ({ params, request, response, view }) {
    
    //const er = await EventResource.all()
    //return er    
    const { id } = params
    const event = await Event.find(params)
    
    event.user = await event.user().fetch()
    event.place = await event.place().fetch()
    event.resources = await event.resources().fetch()

    return event
    /** */
  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'place_id', 'date', 'start', 'end'])
    const { id } = params
    const {itemsResources} = request.only(['itemsResources'])
    //console.log( await er.store(id, itemsResources))
    
    const update = await Event.query()
      .where('id', id)
      .update(data)

    await er.store(id, itemsResources)


    const event = Event.find(id)

    return event
    //return {msg: 'update event'}
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = EventController
