'use strict'

const Place = use('App/Models/Place')

class PlaceController {

  async index () {
    const places = await Place.all()

    return places
  }

  async store ({ request, response }) {
    const data = request.only(['name'])
    
    let place =  await Place.findBy('name', data.name)
    
    if(place){
      return response.status(401).send({message: data.name +' já foi cadastrado!'})
    }
    /** */
    place = Place.create(data)

    return place
  }


  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing place.
   * GET places/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update place details.
   * PUT or PATCH places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a place with id.
   * DELETE places/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PlaceController
