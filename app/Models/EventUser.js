'use strict'

const Model = use('Model')

class EventUser extends Model {
  static get table(){
    return 'events_users'
  }

}

module.exports = EventUser
