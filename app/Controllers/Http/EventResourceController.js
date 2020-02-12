'use strict'

//const Event = use('App/Models/Event')
//const Resource = use('App/Models/Resource')
const EventResource = use('App/Models/EventResource')

class EventResourceController {
  
  async store(event_id, resources){

    resources.map((r) => {
      EventResource.create({event_id: event_id, resource_id: r.id})
    })

  }

  teste(){
    //console.log('teste')
    return 'teste'
  }

}


module.exports = EventResourceController
