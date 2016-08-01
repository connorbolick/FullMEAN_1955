var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
	show: function(req, res){
		People.find({}, function(err, people){
			if(err){
				console.log("couldn't get them");
			}
			res.json(people);
		})
	},

	create: function(req, res){
		var person = new People({name: req.params.name});
		person.save(function(err){
			if(err){
				console.log("couldn't add the person");
			} else{
				res.redirect('/');
			}
		})
	},

	showOne: function(req, res){
		People.findOne({name: req.params.name}, function(err, person){
			if(err){
				console.log("you're screwed");
			} else{
				res.json(person);
			}
		})
	},

	remove: function(req, res){
		People.remove({name: req.params.name}, function(err){
			if(err){
				console.log("bummer, couldn't remove");
				res.redirect('/');
			} else{
				res.redirect('/');
			}
		})
	}
}