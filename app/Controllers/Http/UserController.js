'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')
const Sector = use('App/Models/Sector')

class UserController {
  async index({ request, response, view }) {
    const users = await User.query()
      .orderBy('name', 'asc')
      .fetch()
 
    return users

  }

  async store({ request }){

    const data = request.only(['password', 'name', 'email', 'sector_id'])

    const sector = await Sector.find(data.sector_id)
    if(!sector){
      return {message:'Setor não cadastrado'}
    }

    const email = await User.findBy('email', data.email)
    if (email) {
      return { message: 'Email ja cadastrado' }
    }

    const user = await User.create({...data, sector_name:sector.name})

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
    const data = request.only(['name', 'email', 'sector_id'])
    const {password} = request.only(['password'])
    
    const sector = await Sector.find(data.sector_id)
    if(!sector){
      return {message:'Setor não cadastrado'}
    }

    if(password !== null){
      data.password = await Hash.make(password)
    }

    data.sector_name = sector.name
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
