/** Routes to desktops
 * @module routers/desktop
 * @requires express express.Router()
 */

const { body } = require('express-validator');

const desktopController = require('../controllers/DesktopController');

const router = require('express').Router();


/**
* get the list of computers
* @name getComputers GET
* @function
* @memberof module:routers/desktop
* @param {string} '/api/computers' - uri
* @param {function} desktopController.getComputers
* @return {JSON}
*/
router.get('/computers', desktopController.getComputers);


/**
* Create new desktop
* @name postComputers POST
* @function
* @memberof module:routers/desktop
* @param {string} '/api/computers' - uri
* @param {function} desktopController.postComputers
* @return {JSON}
*/
router.post('/computers', desktopController.postComputers);



/**
* Destroy specific desktop
* @name deleteOrdinateur DELETE
* @function
* @memberof module:routers/desktop
* @param {string} '/api/computers/:id' - uri
* @param {function} desktopController.deleteOrdinateur
* @return {JSON}
*/
router.delete('/computers/:id', desktopController.deleteOrdinateur);



/**
* Update information for specific desktop
* @name updateDesktop PUT
* @function
* @memberof module:routers/desktop
* @param {string} '/api/computers/:id' - uri
* @param {function} desktopController.updateDesktop
* @return {JSON}
*/
router.put('/computers/:id', desktopController.updateDesktop)


module.exports = router;