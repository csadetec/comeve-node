'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsFollowsSchema extends Schema {
  up () {
    this.create('events_follows', (table) => {
      table.increments()
      table.integer('event_id').notNullable()
      table.integer('request_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events_follows')
  }
}

module.exports = EventsFollowsSchema
