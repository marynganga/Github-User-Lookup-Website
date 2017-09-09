var apiKey = require('./../.env').apiKey;

exports.getRepos = function(name){
  $.get('https://api.github.com/users/'+name+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    // console.log(response.followers);
    // console.log(response.following);
    // console.log(response.public_repos);
    console.log(response.html_url);
    // console.log(response.avatar_url);


$('.userName').append('<p>Username: '+name + '</p>'
					 +'<p>Full Name: '+response.name + '</p>'
					 +'<p>Github Url: '+'<a target="_blank" href="'+response.html_url + '">'+response.html_url+'</a></p>'
					 +'<p>Following: '+response.following + '</p>'
					 +'<p>Followers: '+response.followers + '</p>'
					 +'<img src='+response.avatar_url+' alt="Image of user" />');

	$.get(response.repos_url).then(function(repos){

		for (var i = 0; i <= response.public_repos-1; i++) {
		// console.log(repos[i].name);
		// console.log(repos[i].description);
		var index= i+1;
		$('.publicRepos').append('<p>'+index+'. The repository\'s name: '+repos[i].name + '</p>'
					 +'<p>The repository\'s description: '+repos[i].description + '</p>');
	}

	})
}).fail(function(error){
    console.log(error.responseJSON.message);
  });
};