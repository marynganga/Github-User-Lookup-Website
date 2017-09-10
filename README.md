# Github User Lookup Website

#### A website where users may enter a GitHub username into a form, submit it, and see the names and descriptions of that person's public repositories.

## Created by [Mary Ng'ang'a](https://github.com/marynganga)

## Description
This is a website where users enter a GitHub username into a form, submit it, and can then see the names and descriptions of that person's public repositories.
It uses Github's personal access tokens to search through it's databases and retrieve information on a user. 

## Specifications
| Behaviour | Input | Output |
| ------------- |:-------------:| -----:|
| Display User's Full Names | Github username | Full Name of User |
| Display User's Public Repositories | Github username | A list of user's repos including the names, date created, description and links. |
| Display Error Message if no such user exists | Github username | Username entered is not on the database.| 

## Setup/Installation Instructions
#### To view the site:
* Click [Github User Lookup](https://marynganga.github.io/Github-User-Lookup-Website/) <br/>
  or <br/>
* Copy https://marynganga.github.io/Github-User-Lookup-Website/ to your browser and load it.
#### To clone the site:
* On your terminal type
      
      git clone https://github.com/marynganga/Github-User-Lookup-Website.git

* For the site to work, you will require an Access Token from Github which you will then place into an .env file.
#### To create a Personal Access Token
* Visit the Settings area of your GitHub account.
* Select Personal Access Tokens from the sidebar, and hit Generate New Token.
* GitHub will offer a list of options Do not select any. These grant read/write permissions and access to personal data. 
* Finally, select Generate Token.
#### Placing the access token 
* Create an .env file at the top level of your directory and place your access token there.
* Create a .gitignore file.
* Include .env file in .gitignore.

## Known Bugs
* There are no known bugs.

## Technologies Used
* HTML
* CSS
* BOOTSTRAP
* JAVASCRIPT
* JQUERY
* NODE
* NPM
* BOWER

## Licence
MIT &copy;2017 **[Mary Ng'ang'a](https://github.com/marynganga)**

