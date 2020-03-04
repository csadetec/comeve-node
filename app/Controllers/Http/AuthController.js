'use strict'

const User = use('App/Models/User')
const Sector = use('App/Models/Sector')
//const Hash = use('Hash')

class AuthController {

  async register({ request }) {
    const data = request.only(['email', 'password', 'name', 'sector_id'])
    const sector = await Sector.find(data.sector_id)
    if(!sector){
      return {message:'Setor não cadastrado'}
    }

    const user = User.create({...data, sector_name:sector.name })
    return user

  }


  async authenticate({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    //const user = await  User.findBy('email', email).setHidden(['password']).fetch()
    const user = await  User.findBy('email', email)

    token.user = user
    return token
  }

}

module.exports = AuthController
