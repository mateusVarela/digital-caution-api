const CautionSchema = require('../App/models/CautionSchema')
const bcrypt = require('bcrypt')

class CautionControleller {
  async saveCaution(req, res) {
    const { graduation, name, session, device } = req.body
    const data = {
      graduation,
      name,
      session,
      device
    }
    /**
     * Save record with caution data.
     */
    CautionSchema.create(data, error => {
      /**
       * Verify if has some error.
       */
      if (error) {
        return res.status(400).json({
          error: true,
          message: `Erro ao tentar inserir no mongo. erro: ${error}`
        })
      }

      res.status(200).json({
        error: false,
        cautionRegistered: true
      })
    })
  }

  /**
   * Return all cautions in db.
   */
  async findAllCautions(req, res) {
    CautionSchema.find({}, function (err, cautions) {
      /**
       * Verify if has some error.
       */
      if (err) {
        return res.status(400).json({
          error: true,
          message: `Erro ao tentar buscar cautelas no mongo. erro: ${err}`
        })
      }

      return res.status(200).json({
        error: false,
        cautionsFind: true,
        cautions
      })
    })
  }
}

module.exports = new CautionControleller()
