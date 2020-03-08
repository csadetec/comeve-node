'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventResourceSchema extends Schema {
  up () {
    this.create('events_resources', (table) => {
      table.increments()
      table.integer('event_id').notNullable()
      table.integer('resource_id').notNullable()
      table.integer('accept').notNullable()
      table.string('date', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('event_resources')
  }
}

module.exports = EventResourceSchema
