'use strict'

const Event = use('App/Models/Event')
const EventResource = use('./EventResourceController')
//const Teste = use('App/Models/EventResource')
const er = new EventResource()

class EventController {

  async index ({ request, response, view }) {

    const events = await Event.query()
      .with('user', (builder) => {
        builder.select('id', 'username')
      })
      .with('place')
      .with('resource')
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
    //const event = await  Event.query().findBy('id', params.id).with('resource').fetch()
    
    const event = await Event.query()
      .where('id', params.id)
      .with('resource')
      .fetch()
    //console.log(response)
    /** */
    return event
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
