// Get a reference to the database service
var database = firebase.database();

main();

// gets user input to create the beacon
function main()
{
	host = prompt("Please enter your name:");
	school = prompt("Please enter your school:");
	course = prompt("Please enter your course code:");
	members = [];
	tags = "0000";
	
	// randomly generate position and start / end time for convenience
	lat = 43.4724 + (Math.random()-0.5);
	lng = 80.526 + (Math.random()-0.5);
	startTime = 3 + Math.floor(Math.random() * 8) + ":00AM";
	endTime = 1 + Math.floor(Math.random() * 8) + ":00PM";
	
	// passes the user data to create a beacon
	createBeacon(school, course, startTime, endTime, host, tags, members, lat, lng);
	
	// updates page to show beacon was created
	document.body.innerHTML = "beacon created successfully!";
}

// creates the beacon
// inserting using .push() means key is automatically generated
function createBeacon(school, course, startTime, endTime, host, tags, members, lat, lng) {
  database.ref('/beacon/').push({
    school: school,
    course: course,
		startTime: startTime,
		endTime: endTime,
		host: host,
		tags: tags,
		members: members,
		lat: lat,
		lng: lng
  });
}

