'use strict'

const Moment = use('App/Models/Moment')
const Resource = use('App/Models/Resource')

class MomentController {

  async index ({ request, response, view }) {
    return await Moment.all()
  }

  async store ({ request, response }) {
    const data = request.only(['name'])
    const moment = await Moment.findBy({name:data.name})
    if(moment){
      return {msg:'Momento já foi cadastrado'}
    }

    return await Moment.create(data)

  }

  async show ({ params, request, response, view }) {
    return await Moment.find(params.id)
  }

  async update ({ params, request, response }) {
    const data = request.only(['name'])
    const {id} = params
    const moment = await Moment.findBy({name:data.name})

    if(moment){
      return {message:'Nenhuma alteração'}
    }    

    await Moment.query()
      .where({id})
      .update(data)
    
    await Resource.query()
      .where({moment_id:id})
      .update({moment_name:data.name})

    return await Moment.find(id)
    //moment = Moment.find
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = MomentController
