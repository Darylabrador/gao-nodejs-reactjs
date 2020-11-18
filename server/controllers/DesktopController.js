const Desktop     = require('../models/desktop');
const Client      = require('../models/client');
const Attribution = require('../models/attribution');


// Define relation (needed if we don't use database.sync() in app.js)
Client.hasMany(Attribution);
Desktop.hasMany(Attribution);
Attribution.belongsTo(Client);
Attribution.belongsTo(Desktop);


// Define element per page
var ITEM_PER_PAGE = 3;


/** Get all information about computers
 * @name getComputers
 * @function
 * @throws Will throw an error if one error occursed
 */ 
exports.getComputers = async (req, res, next) => {
    const currentDate = req.query.date
    const page = +req.query.page || 1;

    try {

        // Define totalPage based on totalItem
        const totalItem = await Desktop.findAndCountAll();
        const totalPage = Math.ceil(totalItem.count / ITEM_PER_PAGE);

        const desktopInfo = await Desktop.findAll({
            attributes: ['id', 'name'],
            include: [
                {
                    model: Attribution,
                    attributes: ['id', 'date', 'hours'],
                    required: false,
                    where: {
                        date: currentDate
                    },
                    include: [{
                        model: Client,
                        attributes: ['id', 'surname', 'name'],
                        required: false
                    }]
                }
            ],

            // Paginations informations
            offset: (page - 1) * ITEM_PER_PAGE,
            limit: ITEM_PER_PAGE
        });


        res.status(200).json({
            desktopInfo,
            hasNextPage: ITEM_PER_PAGE * page < totalItem.count,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            previousPage: page - 1,
            totalPage
        });
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}

/** Post information about new desktop
 * @name postComputers
 * @function
 * @param {String} name
 * @throws Will throw an error if one error occursed
 */
exports.postComputers = async (req, res, next) => {
    const { name } = req.body;
    try {
        const desktop = new Desktop({name});
        const newDesktop = await desktop.save();

        const returnDesktop = {
            id: newDesktop.id,
            name: newDesktop.name,
            Attributions: []
        };

        res.status(200).json({ 
            success: true,
            message: 'Poste ajouté avec succès',
            content: returnDesktop
        });
        
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Poste ajouté existe déjà',
        })
    }
}




/** Delete desktop
 * @name deleteOrdinateur
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.deleteOrdinateur = async (req, res, next) => {
    const id = req.query.id;

    try {
        const desktopInfo = await Desktop.findByPk(id);
        if(!desktopInfo) {
            return res.status(200).json({
                success: false,
                message: 'Information introuvable',
            })
        }

        await desktopInfo.destroy();
        return res.status(200).json({
            success: true,
            message: 'Suppression effectuée',
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Ressources indisponible',
        })
    }
}