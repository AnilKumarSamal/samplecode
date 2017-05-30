'use strict'

const express = require ('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port',(process.env.PORT || 8080))

//allows to process the data
app.use(bodyParser.urlencoded({extented:flase}))
app.use(bodyParser.json())

//ROUTES


app.get('/',function (req,res){
	res.send("Hi I m new to this")
})

app.get('/webhook/',function(res,req){
})