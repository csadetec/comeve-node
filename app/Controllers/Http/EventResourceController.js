'use strict'

//const Event = use('App/Models/Event')
//const Resource = use('App/Models/Resource')
const EventResource = use('App/Models/EventResource')

class EventResourceController {

  async store(event_id, resources) {

    



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
