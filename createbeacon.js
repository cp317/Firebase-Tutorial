// Get a reference to the database service
var database = firebase.database();

main();

// gets user input to create the beacon
function main()
{
	school = prompt("Please enter your school");
	course_code = prompt("Please enter your course code:");
	start_time = prompt("Please enter the time you will start studying");
	
	// creates a "random" id for the beacon, this is not important and will not be in the final project
	beaconId = new Date().getTime(); 
	
	// passes the user data to create a beacon
	createBeacon(beaconId, school, course_code, start_time);
	
	// updates page to show beacon was created
	document.body.innerHTML = "beacon created successfully!";
}

// creates the beacon
function createBeacon(beaconId, school, course_code, start_time) {
  database.ref('/beacon/' + beaconId).set({
    school: school,
    course_code: course_code,
		start_time: start_time
  });
}

