'use strict'

const User = use('App/Models/User')
//const Hash = use('Hash')

class AuthController {

  async store({ request }) {
    const data = request.only(['email', 'password', 'name', 'sector'])

    const user = User.create(data)
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


  async register({ request }) {
    const data = request.only(['username', 'name', 'password', 'email', 'sector_id'])

    const username = await User.findBy('username', data.username)

    if (username) {
      return { message: 'Usuário ja cadastrado' }
    }

    const email = await User.findBy('email', data.email)

    if (email) {
      return { message: 'Email ja cadastrado' }
    }

    const user = await User.create(data)
    return user;

  }
}

module.exports = AuthController
