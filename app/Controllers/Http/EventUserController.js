'use strict'

const EventUser = use('App/Models/EventUser')

class EventUserController {

  async store(event_id, users) {

    await EventUser.query()
      .where({event_id})
      .delete()
    for (let r of users) {
      await EventUser.create({ user_id: r.id, event_id })
    }
  }

}


module.exports = EventUserController
