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


  resources(){
    return this.belongsToMany('App/Models/Resource')
      .pivotTable('events_resources')
      .withPivot(['accept', 'date'])
  }

  guests(){
    return this.belongsToMany('App/Models/User')
      .pivotTable('events_users')
  }
}

module.exports = Event
