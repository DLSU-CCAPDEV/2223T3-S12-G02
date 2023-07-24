const db = require(`../models/db.js`);
const User = require(`../models/UserModel.js`);

const editProfileController = {
	getProfile: async function(req, res) {

		var query = {userName: req.session.username};
		var projection = `userName userEmail userBio pw`;
		var profile = await db.findOne(User, query, projection);

		var data = {
			userName: req.session.username,
			userEmail: profile.userEmail,
			userBio: profile.userBio,
			pw: profile.pw
		}

		res.render('edit_profile', data);
	}

	
};

module.exports = editProfileController;
