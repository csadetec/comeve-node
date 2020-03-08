'use strict'

const Schema = use('Schema')

class MomentSchema extends Schema {
  up () {
    this.create('moments', (table) => {
      table.increments()
      table.string('name', 150).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('moments')
  }
}

module.exports = MomentSchema
