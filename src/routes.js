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

module.exports = routes
