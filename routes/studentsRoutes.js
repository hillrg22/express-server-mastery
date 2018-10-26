const express = require('express')
const router = express.Router()

let students = require('../students.json')


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
    students.push(body)

    res.json({student:students[students.length-1]})
})

router.put('/:id', (req,res,next)=>{
    const body = req.body
    const id = req.params.id

    const updatedStudents = students.map(student =>{
        if(student.id == id){
        return body
        }
        return student
    })
    const newStudent = updatedStudents.filter(student => {
        return student.id == id
    })
    if(newStudent.length){
        res.json({student:newStudent[0]})

    }
    next()
})

router.delete('/:id',(req, res) =>{
    const id = req.params.id

    const deleted = students.filter(student => {
        return student.id == id
    })

    const studentSurvivors = students.filter(student => {
        return student.id != id
    })

    students = studentSurvivors

    res.json({deleted:deleted})
})

module.exports = router
