'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.string('place', 150).notNullable()
      table.string('name', 150).notNullable()
      table.string('date', 150).notNullable()
      table.time('start').notNullable()
      table.time('end').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventsSchema
