'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EventResource extends Model {
  static get table(){
    return 'events_resources'
  }

}

module.exports = EventResource
