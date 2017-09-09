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