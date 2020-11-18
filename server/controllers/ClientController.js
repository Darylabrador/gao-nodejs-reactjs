const { Op } = require('sequelize');
 
const Client      = require('../models/client');
const Attribution = require('../models/attribution');

/** Get clients list for autocomplete
 * @name getClients
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.getClients = async (req, res, next) => {
    const client = req.query.client;
    try {
        const clientList = await Client.findAll({
            attributes: ['id', 'surname', 'name'],
            where: {
                [Op.or]: [
                    {
                        surname: {
                            [Op.substring]: client
                        }
                    }, 
                    {
                        name: {
                            [Op.substring]: client
                        }
                    }
                ]
            }
        });

        return res.status(200).json({
            clientList
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}



/** Create client and assign it
 * @name createClient
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.createClient =  async (req, res, next) => {
    const {surname, name, desktop, date, hours} = req.body;
    try {
        const client = new Client({surname, name});
        const createdClient = await client.save();
        const attribution = new Attribution({
            clientId: createdClient.id,
            desktopId: desktop,
            date, hours
        });
        const nouvelleAttribution = await attribution.save();

        const returnData = {
            id: nouvelleAttribution.id,
            date: nouvelleAttribution.date,
            hours: nouvelleAttribution.hours,
            Client: createdClient
        }

        return res.status(200).json({
            success: true,
            message: 'Attribution effectuée',
            content: returnData
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}