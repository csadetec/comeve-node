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

  sector(){
    return this.belongsTo('App/Models/Sector')
  }
  resources(){
    //return this.hasMany('App/Models/Resource')
    //return this.hasMany('App/Models/EventResource')
    return this.belongsToMany('App/Models/Resource')
      .pivotTable('events_resources')
      .withPivot(['accept'])

  }
}

module.exports = Event
