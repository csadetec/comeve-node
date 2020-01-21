'use strict'


/**
 * Resourceful controller for interacting with users
 */
const User = use('App/Models/User')

class UserController {
    async index({ request, response, view }) {
        
        const users = await User.all()
        return  users

    }

    async show({ params, request, response, view }) {
    }

    async update({ params, request, response }) {
    }


    async destroy({ params, request, response }) {
    }
}

module.exports = UserController
