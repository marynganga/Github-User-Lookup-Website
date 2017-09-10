var apiKey = require('./../.env').apiKey;

// Create and export a fuction getRepos which gets user's info and displays it on the webpage
exports.getRepos = function(name){
  $.get('https://api.github.com/users/'+name+'?access_token=' + apiKey).then(function(response){
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
					 +'<p>Github Url: '+'<a target="_blank" class="links" href="'+response.html_url + '">'+response.html_url+'</a></p>'
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
			var deployedSite = '<a target="_blank" class="links" href="'+repos[i].homepage + '">'+repos[i].homepage+'</a>'
		}


// Display the users rep details by appending it inside the div publicRepos
		$('.publicRepos').append('<h4 class="text-uppercase">'+index+'. '+repos[i].name + '</h4>'
		+'<p> Created on: '+creation + '</p>'
		+'<p>Description: '+repos[i].description + '</p>'
		+'<p>Repository Url: '+'<a target="_blank" class="links" href="'+repos[i].html_url + '">'+repos[i].html_url+'</a></p>'
		+'<p>Deployed Site: '+deployedSite+'</p>'
		)
					
	}

	})
}).fail(function(error){
    $('.userInfo').append(error.responseJSON.message);
    $('.publicRepos').append('<h2 class="text-center"> Username entered is not on the database.</h2>');
  });
};


// A function to clear input fields and previous output fields
exports.clearFields = function(){
	$('#name').val('');
	$('.userInfo').empty();
	$('.publicRepos').empty();
};