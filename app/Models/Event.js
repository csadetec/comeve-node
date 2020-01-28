'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  place(){
    return this.belongsTo('App/Models/Place')
  }
  user(){
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Event
