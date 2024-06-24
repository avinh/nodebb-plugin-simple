'use strict';

const winston = require.main.require('winston');
const meta = require.main.require('./src/meta');

const Simple = {
	config: {},
	onLoad: async function (params) {
		const { router } = params;
		const controllers = require('./lib/controllers');
		const routeHelpers = require.main.require('./src/routes/helpers');
		routeHelpers.setupAdminPageRoute(router, '/admin/plugins/simple', controllers.renderAdmin);
		Simple.init();
	},
	init: function () {
		meta.settings.get('simple', (err, options) => {
			if (err) {
				winston.warn(`[plugin/simple] Unable to retrieve settings, assuming defaults: ${err.message}`);
			}
		});
	},
	admin: {
		menu: async function (custom_header) {
			custom_header.plugins.push({
				route: '/plugins/simple',
				icon: 'fa-edit',
				name: 'Simple',
			});
			return custom_header;
		},
	},

	regexes: {
		rtl_override: /\u202E/gi,
	},
};

module.exports = Simple;