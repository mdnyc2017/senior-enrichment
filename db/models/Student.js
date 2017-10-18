const Sequelize = require('sequelize');
const db = require('../main')

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

module.exports = Student;