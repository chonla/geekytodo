var mongoose = GLOBAL.mongoose

var Schema = mongoose.Schema;

var itemSchema = new Schema({
	title: String,
	created_at: Date
});

var Item = mongoose.model('Item', itemSchema);

list = function(req, res) {
	findAllItems(function(allItems) {
		res.json(allItems);
	});
}

add = function(req, res){
	var item = createItem(req.body.title);
	recordItem(item, function(recordedItem) {
		res.json(recordedItem);
	});
}

createItem = function(title) {
	return new Item({ title: title, created_at: Date.now() });
}

recordItem = function(item, callback) {
	item.save(function(err) {
		if (!err) {
			callback({ status: 'SUCCESS', item: item });
		} else {
			callback({ status: 'FAIL', item: {} });
		}
	});
}

findAllItems = function(callback) {
	Item.find({}, function(err, items) {
		if (!err) {
			callback({ status: 'SUCCESS', items: items });
		} else {
			callback({ status: 'FAIL', items: [] });
		}
	});
};

module.exports.list = list;
module.exports.findAllItems = findAllItems;

module.exports.add = add;
module.exports.createItem = createItem;
module.exports.recordItem = recordItem;