const express = require('express')
const router = express.Router()

const students = require('../students.json')


router.get('/', (req,res) => {
  res.json({students:students})
})

router.get('/:id', (req,res,next) => {
    const id = req.params.id

    const student = students.filter(student => {
        return student.id == id
    })

    if(student.length){
        res.json({student:student[0]})

    }
    next()
})

router.post('/', (req, res, next)=>{
    const body = req.body
    console.log*(body)

    students.push(body)
    res.json({students:students})
})



module.exports = router
