'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')
const SectorController = use('./SectorController')

const Sector = new SectorController() 

class UserController {
  async index({ request, response, view }) {
    const users = await User.query()
      .orderBy('name', 'asc')
      .fetch()
 
    return users

  }

  async store({ request }){

    const data = request.only(['password', 'name', 'email', 'sector'])
    const email = await User.findBy('email', data.email)

    if (email) {
      return { message: 'Email ja cadastrado' }
    }

    if(!await Sector.findName(data.sector)){
      return { message: 'Setor não cadastrado'}
    }

    const user = await User.create(data)

    return user
    /** */
  }

  async show({ params, request, response, view }) {
    const { id } = params

    const user = await User.find(id)

    return user
  }

  async update({ params, request, response }) {
    const { id } = params
    const data = request.only(['name', 'email', 'sector'])
    const {password} = request.only(['password'])
    
    if(!await Sector.findName(data.sector)){
      return { message: 'Setor não cadastrado'}
    }

    if(password !== null){
      data.password = await Hash.make(password)
    }

    await User.query()
      .update(data)
      .where('id', id)

    const user = await User.find(id)

    return user
    /**; */

  }


  async destroy({ params, request, response }) {
  }
}

module.exports = UserController
