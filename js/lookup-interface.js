var getRepos = require('./../js/lookup.js').getRepos;
var clearFields = require('./../js/lookup.js').clearFields;

$(document).ready(function(){

$('#submitName').click(function(event){  // actions to be taken when username is submitted
	event.preventDefault();
	// Insert inputted username into a variable
	var name = $('#name').val();

	$('#input').hide();
	$('#output').show();
	// Clear previous input fields
	clearFields();
	// Parse the inputted username into the getRepos function for processing
	getRepos(name);
});



});