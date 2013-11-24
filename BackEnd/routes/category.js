// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/geekytodo');
var mongoose = GLOBAL.mongoose;

var Schema = mongoose.Schema;

var categorySchema = new Schema({
	name: String
});

categorySchema.statics.findByName = function(name, callback) {
	this.find({ name: new RegExp(name, 'i')}, callback);
};

var Category = mongoose.model('Category', categorySchema);

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
	
	Category.findByName({name: req.body.catName}, function(err, categories) {
		if (categories.length == 0) {
			category.save(function (err) {
				if (!err) {
					res.json({ status: 'success' });
				} else {
					res.json(new Error('Save to MongoDB has Failure'));
				}
			});
		} else {
			var foundCategory = categories[0];
			Category.update({name: foundCategory.name}, {name: req.body.catName}, {upsert: true}, function(err){
				if (!err) {
					res.json({status: 'success'});
				} else {
					res.json(new Error('Update to MongoDB has Failure'));
				}
			});
		}
	});
}

module.exports.list = list;
module.exports.create = create;
// module.exports.update = update;