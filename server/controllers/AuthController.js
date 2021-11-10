const dotenv = require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { validationResult } = require('express-validator');

const User = require('../models/user');

/** Handle admin connection
 * @name postLogin
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(200).json({
            success: false,
            message: errors.array()[0].msg,
        })
    }

    try {
        const userExist = await User.findOne({ where: { email } });
        if (!userExist) {
            return res.status(200).json({
                success: false,
                message: 'Identifiants invalides',
            })
        }

        const isEqual = await bcrypt.compare(password, userExist.password);
        if (!isEqual) {
            return res.status(200).json({
                success: false,
                message: 'Identifiants invalides',
            })
        }

        const token = jwt.sign({
            userId: userExist.id
        },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        )

        return res.status(200).json({
            success: true,
            message: 'Vous êtes connecté(e)',
            token
        })

    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}