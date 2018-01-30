var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'studio';
	
	view.query('page', keystone.list('StudioPage').model.findOne().populate('images background'));
	view.query('settings', keystone.list('Settings').model.findOne());
	// view.query('projects', keystone.list('Project').model.find());
	// Render the view
	view.render('studio');
};