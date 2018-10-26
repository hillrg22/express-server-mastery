const express = require('express')
const router = express.Router()

const cakes = require('../cakes.json')

// grabs data from JSON package
router.get('/', (req,res) => {
  res.json({cakes:cakes})
})

// grabbing IDs from JSON
router.get('/:id', (req,res,next) => {
    const id = req.params.id

    const cake = cakes.filter(cake => {
        return cake.id == id
    })
    console.log('cake variable length', cake.length)
    if(!cake.length){
        next()
    }

    res.json({cake:cake[0]})
})


module.exports = router
