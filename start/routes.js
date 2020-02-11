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

Route.get('/', () => {return { api: 'comeve' }})
Route.post('/authenticate', 'AuthController.authenticate')

Route.group(() => {
  Route.resource('/users', 'UserController')
  Route.resource('/places', 'PlaceController')
  Route.resource('/events', 'EventController')
  //Route.post('/events/:id/resources', 'EventResourceController.store')
  Route.resource('/resources', 'ResourceController')
}).middleware('auth')

/*
Route.get('/users', 'UserController.index')
/** *
Route.get('/teste/:id', 'AuthController.teste')
/** */
Route.post('/register', 'AuthController.register')
