$(function() {
	var Mustache = require('mustache');

	$.getJSON('js/data.json', function(data) {
		var template = $('#speakerstpl').html();
		vat html = Mustache.to_html(template, data);
		$('#speakers').html(html);
	});
});