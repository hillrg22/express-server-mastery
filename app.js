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

// Checks if server is working
app.get('/', (req,res) =>{
  res.send('Yooooooo Dawg')
})

// Error handling
app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}
  
// eslint-disable-next-line
function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined

    res.status(500).send({
      error: err.message,
      stack,
      url: req.originalURL
    })
  
    res.status(500).send({ error: err.message, stack, url: req.originalUrl })
  }
  

app.listen(port, () => console.log(`Server running on ${port}`))
