document.body.style.visibility = "none";

// Inject <script> tag to include user data .js file from Pearson.
var userSrc = document.createElement('script');
// Use the dynamic pearson JSON provided and use a callback to run the parseUser function.
userSrc.src = 'http://dynamiccoursedata.next.ecollege.com/userinfo/json.ed?callback=parseUser';
// Attach the script to the document body.
document.getElementsByTagName('body')[0].appendChild(userSrc);

// Do the same steps for the course data, running the parseCourse function as a callback
var courseSrc = document.createElement('script');
courseSrc.src = 'http://dynamiccoursedata.next.ecollege.com/courseinfo/json.ed?callback=parseCourse';
document.getElementsByTagName('body')[0].appendChild(courseSrc);

function parseUser(user) {
	// Do user info replacements
	//console.log(user);
	var text = document.body.innerHTML;
	text = text.replace(/\[fullname\]/g, user.userInfo.firstName + " " + user.userInfo.lastName);
	text = text.replace(/\[firstname\]/g, user.userInfo.firstName);
	text = text.replace(/\[cfirstname\]/g, ", " + user.userInfo.firstName);
	text = text.replace(/\[lastname\]/g, user.userInfo.lastName);
	text = text.replace(/\[email\]/g, user.userInfo.email);
	document.body.innerHTML = text;

	// Run function after completing info replacements
	revealbody();
}

function parseCourse(course) {
	// Do course replacements
	//console.log(course);	
	var text = document.body.innerHTML;
	text = text.replace(/\[coursetitle\]/g, course.courseInfo.courseTitle);
	document.body.innerHTML = text;

	revealbody();	
}

function revealbody(){
	document.body.style.visibility = "visible";
	return false;
}