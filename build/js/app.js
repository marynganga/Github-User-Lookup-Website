(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f010f67f05b83d59f2f17f614edcd547d7291eb6";
},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(name){
  $.get('https://api.github.com/users/'+name+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(response.followers);
    console.log(response.following);
    console.log(response.public_repos);
    console.log(response.url);
    console.log(response.repos_url);


$('.userName').append('<p>The username entered is: '+name + '</p>'
					 +'<p>The user\'s name is: '+response.name + '</p>');

	$.get(response.repos_url).then(function(repos){
		repos.forEach(function(repo){
		console.log(repos[0].name);
		console.log(repos[1].description);
		$('.publicRepos').append('<p>The repository\'s name: '+repos[0].name + '</p>'
					 +'<p>The repository\'s description: '+repos[1].description + '</p>');

	}).fail(function(error){
    console.log(error.reposJSON.message);

	})

});
  }).fail(function(error){
    console.log(error.responseJSON.message);
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
