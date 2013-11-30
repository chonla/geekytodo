
/*
 * GET users listing.
 */
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/geekytodo');

var mongoose = GLOBAL.mongoose;

var crypto = require('crypto');
var fs = require('fs');

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
var Token = mongoose.model('Token', TokenSchema);

exports.list = function(req, res){
	User.find(function(err, users) {
		console.log(users);
	});
  res.send("respond with a resource");
};

exports.signup = function(req, res) {
	
	console.log(req.data + "&&&&&" + req.body.data.email + "&&&&&" + req.body.data.username);

	var newUser = new User({
			username : req.body.data.username,
			password : req.body.data.password,
			email : req.body.data.email,
			firstName : req.body.data.firstName,
			lastName : req.body.data.lastName,
			mobileNumber : req.body.data.mobileNumber
		});

	console.log("XXXX" + newUser.username + " , "+ newUser.email);
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
				var tokenValue = crypto.createHash('md5').update(username+"SALT").digest('hex');
				var newToken = new Token({
					username : username,
					token : tokenValue,
				});

				newToken.save(function(err, savedToken) {
					if (!err) {
						res.send({
							status : "SUCCESS",
							message : "Signin is successful",
							token : savedToken.token
						});
					} else {
						res.send({
							status : "FAIL",
							message : "Signin Fail, Database Error!"
						});
					}
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

