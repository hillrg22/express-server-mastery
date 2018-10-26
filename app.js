const express = require('express')
const app = express()
const cors = require('cors')
const parser = require('body-parser')

let port = process.env.PORT || 3000


// Routes Imports
const cakesRoutes = require('./routes/cakesRoutes')
const studentsRoutes = require('./routes/studentsRoutes')

//middleware
app.use(parser.json())
app.use(parser.urlencoded(({extended:false})))
app.use(cors())

// Any requests that START with /cakes or /students, send to this router file
app.use('/cakes', cakesRoutes)
app.use('/students', studentsRoutes)

app.get('/', (req,res) =>{
  res.send('Yooooooo Dawg')
})





app.listen(port, () => console.log(`Server running on ${port}`))
