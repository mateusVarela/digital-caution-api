const mongoose = require('mongoose')
const PASSWORD = 'mv123456'
const db = `mongodb+srv://mateus:${PASSWORD}@cluster0.a28pl.mongodb.net/info_caution?retryWrites=true&w=majority`

const connection = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    })
    console.log('conectou ao banco')
  } catch (err) {
    console.log('Não foi possivel se conectar ao banco.')
  }
}
module.exports = connection
