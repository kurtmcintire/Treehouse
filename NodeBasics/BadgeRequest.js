// We need a simple way to get a user's badge count and Javascript points.
// Use Node.js to connect to Treehouse's API to print out points count.
// Connect to the API URL (https://teamtreehouse.com/kurtismcintire.json)

const https = require('https');
var username = "kurtmcintire";


// Print out success messages
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
  console.log(message);
}

// Print out error messages
function printError(error) {
  console.error(error.message);
}

var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {

  var body = "";

  response.on("data", function(chunk) {
    body += chunk;
  });

  response.on("end", function() {

    if (response.statusCode == 200) {
      try {
        var profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);

      } catch(error) {
          // parse error
          printError(error);
        }

    } else {
      // status code != 200
      printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] +")"});
    }
  });

});

request.on("error", printError);
