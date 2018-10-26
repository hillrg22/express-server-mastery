const express = require('express')
const app = express()
const cors = require('cors')
const parser = require('body-parser')

let port = process.env.PORT || 3000


// Routes Imports
const cakesRoutes = require('./routes/cakesRoutes')
const studentsRoutes = ('./routes/studentRoutes')

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded(({extended:false})))
app.use(cors())

// Any requests that START with /cakes or /students, send to this router file
app.use('/cakes', cakesRoutes)
app.use('/students', studentsRoutes)







app.listen(port, () => console.log(`Server running on ${port}`))

