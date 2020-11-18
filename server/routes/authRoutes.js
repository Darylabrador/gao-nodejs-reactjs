/** Routes to auth
 * @module routers/auth
 * @requires express express.Router()
 */

const { body } = require('express-validator');

const AuthController = require('../controllers/AuthController');

const router = require('express').Router();

/**
* Handle users connection
* @name postLogin POST
* @function
* @memberof module:routers/auth
* @param {string} '/api/login' - uri
* @param {function}
* @return {JSON}
*/
router.post(
    '/login',
    [
        body('email', 'Adresse email est requis')
            .not()
            .isEmpty(),
        body('password', 'Mot de passe est requis')
            .not()
            .isEmpty()
    ],
    AuthController.postLogin
);


module.exports = router;