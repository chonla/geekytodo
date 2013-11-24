var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/geekytodo');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
	name: String
});

var Category = mongoose.model('Category', categorySchema);

categorySchema.statics.findByName = function(name, cb) {
	this.find({ name: new RegExp(name, 'i')}, cb);
};

list = function(req, res) {
	Category.find({}, function(err, categories) {
		if (!err) {
			res.json(categories);
		} else {
			res.json(new Error('Cannot Fetch Categories from MongoDB'));
		}
	});
}

create = function(req, res) {
	var category = new Category({ name: req.body.catName });
	category.save(function (err) {
		if (!err) {
			res.json({ status: 'success' });
		} else {
			res.json(new Error('Save to MongoDB has Failure'));
		}
	});
}

update = function(req, res) {	
	var category = new Category({ name: req.body.catName });
		
	Category.update({name: req.body.catName}, {name: req.body.catName}, {upsert: true}, function(err){
		if (!err) {
			res.json({status: 'success'});
		} else {
			res.json(new Error('Update to MongoDB has Failure'));
		}
	});
};

module.exports.list = list;
module.exports.create = create;
module.exports.update = update;