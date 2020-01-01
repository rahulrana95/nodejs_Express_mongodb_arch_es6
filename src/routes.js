//config/routes.js
import UserController from './controllers/UserController';

export default (server) => {

  // POST ROUTES
  server.post(`/api/v1/user`, UserController.post);

}