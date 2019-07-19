const express = require("express")

const app = express()
app.set('secret', "i2u34y12oi3u4y8")

app.use(require('cors')())
app.use(express.json(), express.urlencoded({
	extended: false
}))
app.use('/uploads', express.static(__dirname + '/uploads'))




require('./plugins/db.js')(app)
require('./routes/admin/index.js')(app)

app.listen(9001, () => {
	console.log("9001")
})