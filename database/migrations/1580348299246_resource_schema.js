'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResourceSchema extends Schema {
  up () {
    this.create('resources', (table) => {
      table.increments()
      table.string('name',150).notNullable().unique()
      table.string('sector_name', 150).notNullable()
      table.integer('sector_id').notNullable()
      table.string('moment_name', 150).notNullable()
      table.integer('moment_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('resources')
  }
}

module.exports = ResourceSchema
