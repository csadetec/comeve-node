'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsRequesterSchema extends Schema {
  up () {
    this.create('events_requesters', (table) => {
      table.increments()
      table.integer('event_id').notNullable()
      table.integer('guest_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events_guests')
  }
}

module.exports = EventsRequesterSchema
