const Sequelize = require('sequelize');
const db = require('../main')



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



module.exports = Campus;
