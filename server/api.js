'use strict'
const express = require('express')
const router = express.Router()
const db = require('../db/main')

const Student = require('/Users/michaeldouglas/fullstack_github/seniorEnrichmentProject/senior-enrichment/db/models/Student.js')
const Campus = require('/Users/michaeldouglas/fullstack_github/seniorEnrichmentProject/senior-enrichment/db/models/Campus.js')
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
router.get('/hello', (req, res) => res.send({hello: 'world'}))





//get all campuses
router.get('/campus', (req, res, next) =>{
	Campus.findAll()
	.then(campus =>{
		res.json(campus)
	})
	.catch(next)
})

//get one campus
router.get('/campus/:id', (req, res, next)=>{
	//in corey's demo he stores id as a const
	const id = Number(req.params.id);
	Campus.findOne({
		where:{
			id : id
		},
		include:[Student]
	})
	.then(campus=>{
		res.json(campus)
	})
	.catch(next)
})

//create one campus
router.post('/campus', (req, res, next) =>{
	Campus.create(req.body)
	.then(newCampus=>{
		res.json(newCampus)
	})
	.catch(next)
})

//update campus
router.put('/campus/:id', (req, res, next)=>{
	const id = req.params.id;
	Campus.findById(id)
	.then(foundCampus =>{
		foundCampus.update(req.body)
	})
	.then(updatedCampus =>{
		res.json(updatedCampus)
	})
	.catch(next)
})

//delete campus
router.delete('/campus/:id', (req, res, next)=>{
	const id = req.params.id
	Campus.destroy({
		where:{
			id: id
		}
	})
	.then(()=>{
		res.send('Campus destroyed, Godspeed')
	})
})



//get all students
router.get('/students', (req, res, next)=>{
	Student.findAll()
	.then(students=>{
		res.json(students)
	})
	.catch(next)
})

//get one student
router.get('/students/:id', (req, res, next)=>{
	const id = Number(req.params.id);
	Student.findOne({
		where:{
			id : id
		},
		include:[Campus]
	})
	.then(foundStudent=>{
		res.json(foundStudent)
	})
	.catch(next)
})



//create a student
router.post('/students', (req, res, next) =>{
	Student.create(req.body)
	.then(newStudent=>{
		res.json(newStudent)
	})
	.catch(next)
})


//update a student
router.put('/student/:id', (req, res, next)=>{
	const id = req.params.id
	Student.findById(id)
	.then(foundStudent=>{
		foundStudent.update(req.body)
	})
	.then(updatedStudent=>{
		res.json(updatedStudent)
	})
	.catch(next)
})
//delete a student
router.delete('/students/:id', (req, res, next) =>{
	const id = req.params.id;
	Student.destroy({
		where:{
			id : id
		}
	})
	.then(()=>{
		res.send('student destroyed, Godspeed')
	})
	.catch(next)
})

// - Navigation: as a user I...
// * can navigate to **Campuses** from **Home**
// * can navigate to **Students** from **Home**
// * will land on **Home** by default
// * can navigate to view a **Single Campus** from **Campuses**
// * can navigate to view a **Single Student** from **Students**
// * can navigate to view a **Single Student** from **Single Campus** (for any student at that campus)
// * can navigate to view that student's **Single Campus** from **Single Student**


  
module.exports = router
