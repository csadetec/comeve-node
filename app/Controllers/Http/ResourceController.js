'use strict'

const Resource = use('App/Models/Resource')

class ResourceController {

  async index ({ request, response, view }) {
    
    const resources = await Resource.all()

    return resources
  }

  async store ({ request, response }) {
    
    const data = request.only(['name'])

    const resource = Resource.create(data)

    return resource
  }

  /**
   * Display a single resource.
   * GET resources/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing resource.
   * GET resources/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update resource details.
   * PUT or PATCH resources/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a resource with id.
   * DELETE resources/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ResourceController
