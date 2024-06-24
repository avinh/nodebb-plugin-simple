'use strict';

const Controllers = {};

Controllers.renderAdmin = function (req, res, next) {
	/*
		Make sure the route matches your path to template exactly.

		If your route was:
			myforum.com/some/complex/route/
		your template should be:
			templates/some/complex/route.tpl
		and you would render it like so:
			res.render('some/complex/route');
	*/

	res.render('admin/plugins/simple', {
		title: 'Simple',
	});
}

Controllers.retrieveRaw = function retrieveRaw(req, res, next) {
	const pid = parseInt(req.params.pid, 10);

	if (!pid) {
		return next();
	}

	posts.getPostField(pid, 'content', (err, content) => {
		if (err) {
			return next(err);
		}

		res.json({
			pid: pid,
			content: content,
		});
	});
};;

module.exports = Controllers;