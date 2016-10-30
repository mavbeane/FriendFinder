// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//Start server
app.listen(PORT, function() {
	console.log('ON PORT: ' + PORT);
});



//survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.


/*save the data in your app as an array of objects. Each of these objects should roughly follow the
format below.
{
"name":"Ahmed",
"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
"scores":[
5,
1,
4,
4,
5,
1,
2,
5,
4,
1
]
}*/
//Determine the user's most compatible friend using the following as a guide:
//Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1] ).
//Compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference. Example:
	// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
	// Total Difference: 2 + 1 + 2 = 5
//Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5‐3 and 3‐5 as 2 , and so on.
//The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop‑up.
	//The modal should display both the name and picture of the closest match.
