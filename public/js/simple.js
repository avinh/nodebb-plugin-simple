export function replaceSimple() {
	let content = document.querySelector('[component="post/content"]').textContent;

	let regex = /\[simple\]\s*(\[.*\])/g;

	let matches;

	while ((matches = regex.exec(content)) !== null) {
		var data = JSON.parse(matches[1]);
		if (data && data[0] && data[0].link) {
			var youtubeLink = data[0].link;
			var videoId = extractYoutubeId(youtubeLink);
			if (videoId) {
				var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
				content = content.replace(matches[0], iframe);
			}
		}
	}
	document.querySelector('[component="post/content"]').innerHTML = content;
}

export function extractYoutubeId(url) {
	var regex = /[?&]v=([^&#]*)/;
	var match = regex.exec(url);
	return match && match[1];
}