var mongoose = GLOBAL.mongoose

var Schema = mongoose.Schema;

var itemSchema = new Schema({
	title: String,
	created_at: Date
});

var Item = mongoose.model('Item', itemSchema);

list = function(req, res) {
	Item.find({}, function(err, items) {
		if (!err) {
			res.json({ status: 'SUCCESS', items: items});
		} else {
			res.json({ status: 'FAIL', items: []});
		}
	});
}

add = function(req, res){
	var item = new Item({ title: req.body.title ,created_at: Date.now()});
	item.save(function(err){
		if(!err){
			res.json({ status: 'SUCCESS', item: item});
		}else{
			res.json({ status: 'FAIL', item: {}});
		}
	});
	
}

module.exports.list = list;
module.exports.add = add;