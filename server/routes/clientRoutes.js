/** Routes to clients
 * @module routers/clients
 * @requires express express.Router()
 */

const { body } = require('express-validator');

const clientController = require('../controllers/ClientController');

const router = require('express').Router();


/**
* get the list of clients
* @name getClients GET
* @function
* @memberof module:routers/clients
* @param {string} '/api/clients/search' - uri
* @param {function} clientController.getClients
* @return {JSON}
*/
router.get('/clients/search', clientController.getClients);


/**
* Create client and assign it to desktop timeslot
* @name createClient POST
* @function
* @memberof module:routers/clients
* @param {string} '/api/clients/attribution' - uri
* @param {function} clientController.createClient
* @return {JSON}
*/
router.post('/clients/attribution', clientController.createClient);

module.exports = router;