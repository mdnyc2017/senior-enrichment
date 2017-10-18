'use strict'
const router = require('express').Router()
const db = require('../db/models/models').db
const Student = require('../db/models/models').Student
const Campus = require('./db/models/models').Campus

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))


// * can navigate to **Campuses** from **Home**
// * can navigate to **Students** from **Home**

// const redirectCampus = (res)=> {
// 	return ()=> {
// 	  res.redirect('/campus');
// 	};
//   };

//   const redirect = (res)=> {
// 	return ()=> {
// 	  res.redirect('/users');
// 	};
//   };

//get all campuses
api.get('/campus', (req, res, next) =>{
	Campus.findAll()
	.then(campus =>{
		res.json(campus)
	})
	.catch(next)
})

//get one campus
api.get('/campus/:id', (req, res, next)=>{
	//in corey's demo he stores id as a const
	const id = req.params.id
	Campus.findById(id)
	.then(campus=>{
		res.json(campus)
	})
	.catch(next)
})

//create one campus
api.post('/campus', (req, res, next) =>{
	Campus.create(req.body)
	.then(newCampus=>{
		res.json(newCampus)
	})
	.catch(next)
})

//update campus
api.put('/campus', (req, res, next)=>{
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
api.delete('/campus/:id', (req, res, next)=>{
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
api.get('/students', (req, res, next)=>{
	Student.findAll()
	.then(students=>{
		res.json(students)
	})
	.catch(next)
})

//get one student
api.get('/students/:id', (req, res, next)=>{
	const id = req.params.id;
	Student.findById(id)
	.then(foundStudent=>{
		res.json(foundStudent)
	})
	.catch(next)
})

//create a student
api.post('/students', (req, res, next) =>{
	Student.create(req.body)
	.then(newStudent=>{
		res.json(newStudent)
	})
	.catch(next)
})
//update a student
api.put('/student/:id', (req, res, next)=>{
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
api.delete('/students/:id', (req, res, next) =>{
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
// * will land on **Home** by default
// * can navigate to view a **Single Campus** from **Campuses**
// * can navigate to view a **Single Student** from **Students**
// * can navigate to view a **Single Student** from **Single Campus** (for any student at that campus)
// * can navigate to view that student's **Single Campus** from **Single Student**


  
module.exports = api