(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f010f67f05b83d59f2f17f614edcd547d7291eb6";
},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(name){
  $.get('https://api.github.com/users/'+name+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(response.email);

if (response.email === null){
	response.email = "email unavailable";
}
else {
	return response.email;
};

$('.userName').append('<p>Username: '+name + '</p>'
					 +'<p>Full Name: '+response.name + '</p>'
					 +'<p>Github Url: '+'<a target="_blank" href="'+response.html_url + '">'+response.html_url+'</a></p>'
					 +'<p>Email: '+response.email + '</p>'
					 +'<p>Following: '+response.following + '</p>'
					 +'<p>Followers: '+response.followers + '</p>'
					 +'<img src='+response.avatar_url+' alt="Image of user" />');

	$.get(response.repos_url).then(function(repos){
		for (var i = 0; i <= response.public_repos-1; i++) {
			
		var index= i+1;
		if (repos[i].description === null){
			repos[i].description = "This repository has no description.";
			}
			else {
				repos[i].description;
			};
		$('.publicRepos').append('<p>'+index+'. Name: '+repos[i].name + '</p>'
					 +'<p>Description: '+repos[i].description + '</p>');
	}

	})
}).fail(function(error){
    $('.userName').append(error.responseJSON.message);
  });
};
},{"./../.env":1}],3:[function(require,module,exports){
var getRepos = require('./../js/lookup.js').getRepos;


$(document).ready(function(){

$('#submitName').click(function(event){
	event.preventDefault();
	var name = $('#name').val();
	console.log(name);
	getRepos(name);
});



});
},{"./../js/lookup.js":2}]},{},[3]);
