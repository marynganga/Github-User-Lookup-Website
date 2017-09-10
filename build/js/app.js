(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f010f67f05b83d59f2f17f614edcd547d7291eb6";
},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

// Create and export a fuction getRepos which gets user's info and displays it on the webpage
exports.getRepos = function(name){
  $.get('https://api.github.com/users/'+name+'?access_token=' + apiKey).then(function(response){
    console.log(response);
// Change the displayed value of the users email if current value is null
if (response.email === null){
	response.email = "email unavailable";
}
else {
	return response.email;
};
// Display the users information by appending it inside the div userName
$('.userInfo').append('<h2>User\'s Information</h2>'+'<p>Username: '+name + '</p>'
					 +'<p>Full Name: '+response.name + '</p>'
					 +'<p>Github Url: '+'<a target="_blank" href="'+response.html_url + '">'+response.html_url+'</a></p>'
					 +'<p>Email: '+response.email + '</p>'
					 +'<p>Following: '+response.following + '</p>'
					 +'<p>Followers: '+response.followers + '</p>'
					 +'<img src='+response.avatar_url+' alt="Image of user" />');
// Retrieve info on the users public repositories
	$.get(response.repos_url).then(function(repos){
		$('.publicRepos').append('<h2>Public Repositories</h2>');
		//loop through and display all the users repos
		// Set condition for loop as the number of public repos (retrieved using response.public_repos )
		for (var i = 0; i <= response.public_repos-1; i++) {
			
		var index= i+1;
		// Use moment.js to format the date of repo creation
		var creation = moment(repos[i].created_at).format('Do MMM YYYY h:mm a');

// Change the displayed value of the repos info if current value is null
		if (repos[i].description === null){
			repos[i].description = "This repository has no description.";
			}
			else {
				repos[i].description
				
			}
		if (repos[i].homepage === null){
			repos[i].homepage = "Deployed site unavailable"
			var deployedSite = repos[i].homepage
		}
		else{
			repos[i].homepage;
			var deployedSite = '<a target="_blank" href="'+repos[i].homepage + '">'+repos[i].homepage+'</a>'
		}


// Display the users rep details by appending it inside the div publicRepos
		$('.publicRepos').append('<p>'+index+'. '+repos[i].name + '</p>'
		+'<p> Created on: '+creation + '</p>'
		+'<p>Description: '+repos[i].description + '</p>'
		+'<p>Repository Url: '+'<a target="_blank" href="'+repos[i].html_url + '">'+repos[i].html_url+'</a></p>'
		+'<p>Deployed Site: '+deployedSite+'</p>'
		)
					
	}

	})
}).fail(function(error){
    $('.userInfo').append(error.responseJSON.message);
  });
};


// A function to clear input fields and previous output fields
exports.clearFields = function(){
	$('#name').val('');
	$('.userInfo').empty();
	$('.publicRepos').empty();
};
},{"./../.env":1}],3:[function(require,module,exports){
var getRepos = require('./../js/lookup.js').getRepos;
var clearFields = require('./../js/lookup.js').clearFields;

$(document).ready(function(){

$('#submitName').click(function(event){  // actions to be taken when username is submitted
	event.preventDefault();
	// Insert inputted username into a variable
	var name = $('#name').val();

	$('#aboutSection').hide();
	// Clear previous input fields
	clearFields();
	$('.output').show();
	$('#userNameSection').removeClass('input');
	$('#userNameSection').addClass('userNameForm');


	// Parse the inputted username into the getRepos function for processing
	getRepos(name);


});

});
},{"./../js/lookup.js":2}]},{},[3]);
