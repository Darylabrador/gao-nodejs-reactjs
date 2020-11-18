/** Routes to attributions
 * @module routers/attributions
 * @requires express express.Router()
 */

const { body } = require('express-validator');

const attributionController = require('../controllers/AttributionController');

const router = require('express').Router();

/**
* Set attributions
* @name postAttribution POST
* @function
* @memberof module:routers/attributions
* @param {string} '/api/attributions' - uri
* @param {function} attributionController.postAttribution
* @return {JSON}
*/
router.post('/attributions', attributionController.postAttribution);


/**
* Remove attributions
* @name removeAttribution DELETE
* @function
* @memberof module:routers/attributions
* @param {string} '/api/attributions' - uri
* @param {function} attributionController.removeAttribution
* @return {JSON}
*/
router.delete('/attributions', attributionController.removeAttribution);

module.exports = router;