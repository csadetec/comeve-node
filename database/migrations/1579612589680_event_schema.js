'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.string('name', 150).notNullable()
      table.boolean('internal').notNullable()
      table.boolean('parents').notNullable()
      table.integer('amount_people').notNullable()
      table.string('date', 150).notNullable()
      table.time('start').notNullable()
      table.time('end').notNullable()
      table.string('place_name', 150).notNullable()
      table.integer('place_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventsSchema
