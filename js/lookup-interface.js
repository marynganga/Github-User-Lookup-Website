var getRepos = require('./../js/lookup.js').getRepos;


$(document).ready(function(){

$('#setAlarmButton').click(function(event){
	event.preventDefault();
	var name = $('#name').val();
	console.log(name);
	$('.userName').append('<p>The username entered is:'+name + '</p>');
	getRepos(name);
});



});