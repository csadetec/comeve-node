'use strict'

const Event = use('App/Models/Event')
const Resource = use('App/Models/Resource')

class EventResourceController {
  
  async store({ params, request, response }){
    const event = await Event.findBy('id', params.id)

    return event
    //return {teste:'request'}
    //return {teste:'teste'}
  }

}


module.exports = EventResourceController
