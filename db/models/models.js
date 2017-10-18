'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations
const Sequelize = require('sequelize');
const db = require('../index')




// - Campuses
// * have info such as a name and image
// * can have many students assigned (may have none)

var Student = db.define('student', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
        validate : {
            notEmpty : true
		},
	email: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
		}
	}
	
})

var Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		validate:{
			notEmpty: true
		}
	},
	image:{
		type: Sequelize.STRING,
		defaultValue: 'http://i.imgur.com/lEbis6f.png'		
	}
})



module.exports = {
    Student,
    Campus,
}