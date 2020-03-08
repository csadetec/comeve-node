'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventUserSchema extends Schema {
  up () {
    this.create('events_users', (table) => {
      table.increments()
      table.integer('event_id').notNullable()
      table.integer('user_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events_users')
  }
}

module.exports = EventUserSchema
