'use strict'

const Event = use('App/Models/Event')
class EventController {

  async index ({ request, response, view }) {

    const events = await Event.query()
      .with('user', (builder) => {
        builder.select('id', 'username')
      })
      .with('place')
      .fetch()

    return events

  }

  async store ({ request, auth }) {
    const data = request.only(['name', 'place_id', 'date', 'start', 'end'])
    const resources = request.only(['itemsResource'])
    console.log(resources)
      
    const event = await Event.create({user_id: auth.user.id, ...data})

    return event
    /** */
  }

  async show ({ params, request, response, view }) {
    const event = Event.findBy('id', params.id)
    //console.log(response)
    return event
  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'place_id', 'date', 'start', 'end'])
    const resources = request.only(['itemsResources'])
    console.log(resources)
    
    const update = await Event.query()
      .where('id', params.id)
      .update(data)

    const event = Event.findBy('id', update)

    return event
    //return {msg: 'update event'}
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = EventController
