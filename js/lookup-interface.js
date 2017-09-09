var getRepos = require('./../js/lookup.js').getRepos;


$(document).ready(function(){

$('#setAlarmButton').click(function(){
	getRepos();
})



})