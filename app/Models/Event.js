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
  resource(){
    //return this.hasMany('App/Models/Resource')
    //return this.hasMany('App/Models/EventResource')
    return this.belongsToMany('App/Models/Resource')
      .pivotTable('event_resources')

  }
}

module.exports = Event
