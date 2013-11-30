var mongoose = GLOBAL.mongoose

var Schema = mongoose.Schema;

var itemSchema = new Schema({
	title: String,
	created_at: Date
});

var Item = mongoose.model('Item', itemSchema);

var testRecord = new Item({ title: 'Buy Book', created_at: Date.now() });
testRecord.save();
var testRecord2 = new Item({ title: 'Buy Fish Sauce', created_at: Date.now() });
testRecord2.save();


list = function(req, res) {
	Item.find({}, function(err, items) {
		if (!err) {
			res.json({ status: 'SUCCESS', items: items});
		} else {
			res.json({ status: 'FAIL', items: []});
		}
	});
}

module.exports.list = list;