var mongoose = GLOBAL.mongoose;

var crypto = require('crypto');
var fs = require('fs');

var ItemSchema = mongoose.Schema({
	id 	: String,
	title 	: String,
	created_at : String
});

var Item = mongoose.model('Item', ItemSchema);

exports.list = function(req, res){
	Item.find({}, function(err, items) {
		if (!err) {
			res.json(items);
		} else {
			res.json(new Error('Cannot Fetch Items from MongoDB'));
		}
	});
};