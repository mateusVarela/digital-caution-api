const app = require('./app')

const connection = require('./config/connection.js')
connection()

app.listen(process.env.PORT || 3003)
