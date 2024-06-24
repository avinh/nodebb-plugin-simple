'use strict';

define('admin/plugins/simple', ['settings', 'alerts'], function (Settings, alerts) {
	var Simple = {};

	Simple.init = function () {
		Settings.load('simple', $('.simple-settings'), function (err, settings) {
			if (err) {
				settings = {};
			}
		});

		$('#save').on('click', function () {
			console.log("saved!")
		});
	};

	return Simple;
});