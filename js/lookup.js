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
$('.userName').append('<p>Username: '+name + '</p>'
					 +'<p>Full Name: '+response.name + '</p>'
					 +'<p>Github Url: '+'<a target="_blank" href="'+response.html_url + '">'+response.html_url+'</a></p>'
					 +'<p>Email: '+response.email + '</p>'
					 +'<p>Following: '+response.following + '</p>'
					 +'<p>Followers: '+response.followers + '</p>'
					 +'<img src='+response.avatar_url+' alt="Image of user" />');
// Retrieve info on the users public repositories
	$.get(response.repos_url).then(function(repos){
		//loop through and display all the users repos
		// Set condition for loop as the number of public repos (retrieved using response.public_repos )
		for (var i = 0; i <= response.public_repos-1; i++) {
			
		var index= i+1;
		// Use moment.js to format the date of repo creation
		var creation = moment(repos[i].created_at).format('Do MMM YYYY h:mm a');

// Change the displayed value of the repos description if current value is null
		if (repos[i].description === null){
			repos[i].description = "This repository has no description.";
			}
			else {
				repos[i].description;
			};
// Display the users rep details by appending it inside the div publicRepos
		$('.publicRepos').append('<p>'+index+'. Name: '+repos[i].name + '</p>'
								+'<p> Created on: '+creation + '</p>'
					 			+'<p>Description: '+repos[i].description + '</p>')
					
	}

	})
}).fail(function(error){
    $('.userName').append(error.responseJSON.message);
  });
};