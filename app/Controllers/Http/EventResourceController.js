'use strict'

//const Event = use('App/Models/Event')
//const Resource = use('App/Models/Resource')
const EventResource = use('App/Models/EventResource')

class EventResourceController {

  async store(event_id, resources) {

    await EventResource.query()
      .where({event_id})
      .delete()
    for (let r of resources) {
      await EventResource.create({ resource_id: r.id, event_id, accept: r.accept, date:r.date })
    }
  }

}


module.exports = EventResourceController
