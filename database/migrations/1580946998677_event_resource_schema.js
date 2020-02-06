'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventResourceSchema extends Schema {
  up () {
    this.create('event_resources', (table) => {
      table.increments()
      table.integer('event_id').notNullable()
      table.integer('resource_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('event_resources')
  }
}

module.exports = EventResourceSchema
