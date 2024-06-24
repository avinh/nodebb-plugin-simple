'use strict';

(function () {
	require(['simple', 'components'], (simple, components) => {
		$(window).on('action:composer.enhanced', function (evt, data) {
			console.log("action:composer.enhanced")
		});
		$(window).on('action:composer.preview', {
			selector: '.composer .preview pre code',
		}, async (params) => {
			console.log("action:composer.preview")
		});

		$(window).on('action:posts.loaded action:topic.loaded action:posts.edited', async function (ev, data) {
			simple.replaceSimple();
		});
	});
}());