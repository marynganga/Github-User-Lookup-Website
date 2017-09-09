var apiKey = require('./../.env').apiKey;

exports.getRepos = function(name){
  $.get('https://api.github.com/users/'+name+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(response.followers);
    console.log(response.following);
    console.log(response.public_repos);
    console.log(response.url);
$('.userName').append('<p>The username entered is: '+name + '</p>'
					 +'<p>The user\'s name is: '+response.name + '</p>');
// $('.publicRepos').append('<p>The username entered is:'+name + '</p>');

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};