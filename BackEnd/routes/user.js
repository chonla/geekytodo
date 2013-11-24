
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/geekytodo');

var UserSchema = mongoose.Schema({
		username 	: String,
		password 	: String,
		email			: String,
		firstName	: String,
		lastName	: String,
		mobileNumber : String
		
	});

var TokenSchema = mongoose.Schema({
		token 		: String,
		username 	: String

	});

var User = mongoose.model('User', UserSchema);
// var Token = mongoose.model()

exports.list = function(req, res){
	User.find(function(err, users) {
		console.log(users);
	});
  res.send("respond with a resource");
};

exports.signup = function(req, res) {
	
	//console.log(req.body);

	var newUser = new User({
			username : req.body.username,
			password : req.body.password,
			email : req.body.email,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			mobileNumber : req.body.mobileNumber
		});

	User.find({$or : [ {username : newUser.username}, {email : newUser.email} ]}, function(err, users) {
		if (users.length == 0) {
			newUser.save(function(err, savedUser) {
				if (!err) {
					res.send({
						status : "SUCCESS",
						message : "Register Success."
					});
				} else {
					res.send({
						status : "FAIL",
						message : "Register Fail, Database Error!"
					});
				}
			});
		} else {
			res.send({
				status : "FAIL",
				message : "Register Fail, Username/Email Duplicated!"
			});
		}
	});
}

exports.signin = function(req, res) {
	
	var username = req.body.username
	var password = req.body.password;
	User.find({username : username}, function(err, users) {
		if (users.length != 0) {
			if(password == users[0].password) {
				res.send({
					status : "SUCCESS",
					message : "Signin is successful"
				});
			} else {
				res.send({
					status : "FAIL",
					message : "Your username or password is invalid"
				});
			}
		} else {
			res.send({
				status : "FAIL",
				message : "Your username or password is invalid"
			});
		}
	});
}

