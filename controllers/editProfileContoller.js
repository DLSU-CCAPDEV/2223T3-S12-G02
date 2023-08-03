const db = require(`../models/db.js`);
const User = require(`../models/UserModel.js`);

const bcrypt = require('bcrypt');
const saltRounds = 10;

const editProfileController = {
	getProfile: async function(req, res) {

		var query = {userName: req.session.username};
		var projection = `userName userEmail userBio pw`;
		var profile = await db.findOne(User, query, projection);

		var data = {
			userName: profile.userName,
			userEmail: profile.userEmail,
			userBio: profile.userBio
		}

		res.render('edit_profile', data);
	},

	updateProfile: async function(req, res) {
		var query = {userName: req.session.username};
		var pw = req.body.pw

		// If password is specified
		if(pw)
		{
			bcrypt.hash(pw, saltRounds, function(err, hash) {
				var data = {
					userName: req.body.userName, 
					userEmail: req.body.userEmail, 
					userBio: req.body.userBio,
					pw: hash
				}
				db.updateOne(User, query, data);
			});
		}
		else
		{
			var data = {
				userName: req.body.userName, 
				userEmail: req.body.userEmail, 
				userBio: req.body.userBio
			}
			db.updateOne(User, query, data);
		}
		res.redirect(`/profile/` + req.body.userName);
	}	
};

module.exports = editProfileController;
