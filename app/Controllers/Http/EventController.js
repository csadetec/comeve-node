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
      
    const event = await Event.create({user_id: auth.user.id, ...data})

    return event
    /** */
  }

  async show ({ params, request, response, view }) {
    const event = Event.findBy('id', params.id)
    //console.log(response)
    return event
  }

  /**
   * Render a form to update an existing event.
   * GET events/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
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
