// Get a reference to the database service
var database = firebase.database();

displayBeacon();

// display all beacons on the screen
function displayBeacon()
{
	// get all the beacons from the database
	database.ref('/beacon/').once('value').then(function(b) 
	{
		// iterate through each beacon
		for (var i in b.val())
		{
			// display each of the beacons attributes on the screen
			// b.val()[i] refers to one beacon
			document.body.innerHTML += "<li>school: <b>" + b.val()[i].school + "</b>, course code: <b>" + b.val()[i].course_code + "</b>, start_time: <b>" + b.val()[i].start_time + "</b></li>";
		}
	});
}