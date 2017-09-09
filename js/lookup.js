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