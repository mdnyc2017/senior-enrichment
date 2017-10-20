const Sequelize = require('sequelize');
const db = require('../main')

var Student = db.define('student', {
	name: {
		type: Sequelize.STRING,
		allowNull: false},
	email: {
		type: Sequelize.STRING
		}
	
})

module.exports = Student;