const express = require('express')
const app = express()
const cors = require('cors')
const parser = require('body-parser')

let port = process.env.PORT || 3000

const cakes = ('./cakes.json')
const students = ('./students.json')
