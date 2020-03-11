'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {return { api: 'comeve sextou' }})
Route.post('/login', 'AuthController.authenticate')

Route.group(() => {
  Route.resource('/sectors', 'SectorController')
  Route.resource('/users', 'UserController').apiOnly()
  Route.resource('/places', 'PlaceController')
  Route.resource('/events', 'EventController')
  Route.resource('/resources', 'ResourceController')
  Route.resource('/moments', 'MomentController')
  Route.resource('/follows', 'FollowController')
  
}).middleware('auth')
