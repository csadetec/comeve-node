'use strict'

const User = use('App/Models/User')

class AuthController {

  async authenticate({ request, auth }) {
    const { username, password } = request.all()

    const token = await auth.attempt(username, password)

    token.username = username

    return token
  }

  async register({ request }) {
    const data = request.only(['username', 'password', 'email', 'profile'])

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
