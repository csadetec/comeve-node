'use strict'
const Follow = use('App/Models/Follow')
class FollowController {
 
  async index ({ request, response, view }) {
    return await Follow.all()
  }

  async store ({ request, response }) {
    const data = request.only(['name'])
    
    const follow = await Follow.findBy({name:data.name})
    if(follow){
      return {message:'Seguimento já foi cadastrado'}
    }
    return await Follow.create(data)
  }

  async show ({ params, request, response, view }) {
    return await Follow.find(params.id)
  }

  async update ({ params, request, response }) {
    const {id} = params
    const data = request.only(['name'])

    await Follow.query()
      .where({id})
      .update(data)
    
    return await Follow.find(id)

  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = FollowController
