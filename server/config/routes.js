var mongoose = require('mongoose');
var People = mongoose.model('People');
var controller1 = require('../controllers/controller1.js');

module.exports = function(app){
	app.get('/new/:name/', function(req,res){
		controller1.create(req, res)
	})

	app.get('/', function(req,res){
		controller1.show(req, res)
	})

	app.get('/remove/:name/', function(req,res){
		controller1.remove(req, res)
	})

	app.get('/:name/', function(req,res){
		controller1.showOne(req, res)
	})
}