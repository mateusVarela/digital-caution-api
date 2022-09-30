const { Router } = require('express')
const CautionController = require('./Controller/CautionController')
const routes = new Router()

/**
 * Route to save new caution.
 */
routes.post('/cautionRegister', CautionController.saveCaution)

/**
 * Route to find all cautions.
 */
routes.get('/findAllCautions', CautionController.findAllCautions)

/**
 * Route to delete onw caution.
 */
routes.post('/deleteCaution', CautionController.deleteCaution)

module.exports = routes
