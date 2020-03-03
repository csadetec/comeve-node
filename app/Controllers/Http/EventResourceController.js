'use strict'

//const Event = use('App/Models/Event')
//const Resource = use('App/Models/Resource')
const EventResource = use('App/Models/EventResource')

class EventResourceController {

  async store(event_id, resources) {
  
    await EventResource.query()
      .where('event_id', event_id)
      .delete()  
    console.log(event_id, resources)
    
    resources.map((r) => {
      EventResource.create({ event_id: event_id, resource_id: r.id, accept: r.accept })
    })
    /** */
  }

  async getEventResource(event_id, resources){
    //er = await EventResource.findBy({event_id:event_id, resource_id:resources})
    er = 'testes'
    return er

  }
  teste() {
    //console.log('teste')
    return 'teste'
  }

}


module.exports = EventResourceController
