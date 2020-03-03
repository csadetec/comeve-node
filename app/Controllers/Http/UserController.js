'use strict'


/**
 * Resourceful controller for interacting with users
 */
const User = use('App/Models/User')
const Hash = use('Hash')
class UserController {
  async index({ request, response, view }) {

    //const users = await User.all()
    const users = await User.query()
      .with('sector')
      .fetch()
 
    return users

  }

  async store({ request }){

    const data = request.only(['username', 'password', 'name', 'email', 'sector_id'])

    const username = await User.findBy('username', data.username)

    if(data.password === null){
      return { message: 'O Campo senha é obrigatório '}
    }

    if (username) {
      return { message: 'Usuário ja cadastrado' }
    }

    const email = await User.findBy('email', data.email)

    if (email) {
      return { message: 'Email ja cadastrado' }
    }

    const user = await User.create(data)

    return user
  }

  async show({ params, request, response, view }) {
    const { id } = params

    const user = await User.find(id)

    user.sector = await user.sector().fetch()

    return user
  }

  async update({ params, request, response }) {
    const { id } = params
    const data = request.only(['username', 'name', 'email', 'sector_id'])
    let  password  = request.only(['password'])
    
    if(password.password !== null){
      data.password = await Hash.make(password.password)
    }

    await User.query()
      .update(data)
      .where('id', id)

    const user = await User.find(id)
    //console.log(user)

    return user
    /**; */

  }


  async destroy({ params, request, response }) {
  }
}

module.exports = UserController
