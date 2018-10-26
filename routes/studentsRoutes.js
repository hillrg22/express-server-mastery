const express = require('express')
const router = express.Router()

const students = require('../students.json')


router.get('/', (req,res) => {
  res.json({students:students})
})



module.exports = router
