'use strict'

const Event = use('App/Models/Event')
class EventController {

  async index ({ request, response, view }) {

    const events = Event.all()

    return events

  }

  async store ({ request, auth }) {
    const data = request.only(['user_id', 'name', 'place', 'date', 'start', 'end'])
   
   
    const event = await Event.create({user_id: auth.user.id, ...data})

    return event
    /** */
  }

  async show ({ params, request, response, view }) {
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
