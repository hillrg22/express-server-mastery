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

    if(cake.length){
        res.json({cake:cake[0]})

    }
    next()
    console.log("cake at index 0",cake[0], "cake", cake)
})

router.post('/', (req, res, next)=>{
    const body = req.body
    cakes.push(body)

    res.json({cake:cakes[cakes.length-1]})
})

router.put('/:id', (req,res,next)=>{
  const body = req.body
  const id = req.params.id

  console.log("id",id,"body", body)

  const updatedCakes = cakes.map(cake =>{
    if(cake.id == id){
      return body
    }
    return cake
  })
  console.log("updatedCakes",updatedCakes)
  const newCake = updatedCakes.filter(cake => {
      return cake.id == id
  })
  console.log(newCake)
  if(newCake.length){
      res.json({cake:newCake[0]})

  }
  next()
})
//dogs rule

module.exports = router
