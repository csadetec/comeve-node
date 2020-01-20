'use strict'


/**
 * Resourceful controller for interacting with users
 */
const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {
    async index({ request, response, view }) {
        
        const users = await User.all()
        return  users

    }

    async store({ request, response }) {
        const data = request.only(['username', 'password', 'email', 'profile'])
        
        

        const user = await User.create(data)

        return user;
    }

    /**
     * Display a single user.
     * GET users/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
    }

    /**
     * Render a form to update an existing user.
     * GET users/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */

    async update({ params, request, response }) {
    }

    /**
     * Delete a user with id.
     * DELETE users/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
    }
}

module.exports = UserController
