const mongoose = require('mongoose')

/**
 * Session Caution Schema.
 */
const CautionSchema = new mongoose.Schema(
  {
    /**
     * Military graduation.
     */
    graduation: {
      type: String,
      required: true
    },

    /**
     * Military name.
     */
    name: {
      type: String,
      required: true
    },

    /**
     * Military session.
     */
    session: {
      type: String,
      required: true
    },

    /**
     * Caution device.
     */
    device: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('cautions', CautionSchema)
