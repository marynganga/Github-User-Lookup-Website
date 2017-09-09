var getRepos = require('./../js/lookup.js').getRepos;


$(document).ready(function(){

$('#submitName').click(function(event){
	event.preventDefault();
	var name = $('#name').val();
	console.log(name);
	getRepos(name);
});



});