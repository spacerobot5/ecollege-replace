/* 
	ecollege-replace v1.1 <https://github.com/spacerobot5/ecollege-replace>
	Copyright (c) 2015 Andrew Peeling
*/

// Inject <script> tag to include user data .js file from Pearson.
var userSrc = document.createElement('script');
// Use the dynamic pearson JSON provided and use a callback to run the parseUser function.
userSrc.src = 'http://dynamiccoursedata.next.ecollege.com/userinfo/json.ed?callback=parseUser';
// Attach the script to the document body.
document.getElementsByTagName('body')[0].appendChild(userSrc);

// Un-comment the code below to parse course data, too.
var courseSrc = document.createElement('script');
courseSrc.src = 'http://dynamiccoursedata.next.ecollege.com/courseinfo/json.ed?callback=parseCourse';
document.getElementsByTagName('body')[0].appendChild(courseSrc);

function parseUser(user) {
	// Do user info replacements
	//console.log(user);
	var text = document.body.innerHTML;
	
	text = text.replace(/\<fullname\>\<\/fullname\>/g, user.userInfo.firstName + " " + user.userInfo.lastName);
	text = text.replace(/\<firstname\>\<\/firstname\>/g, user.userInfo.firstName);
	text = text.replace(/\<cfirstname\>\<\/cfirstname\>/g, ", " + user.userInfo.firstName);
	text = text.replace(/\<lastname\>\<\/lastname\>/g, user.userInfo.lastName);
	text = text.replace(/\<email\>\<\/email\>/g, user.userInfo.email);	
	document.body.innerHTML = text;

	text = text.replace(/\[fullname\]/g, user.userInfo.firstName + " " + user.userInfo.lastName);
	text = text.replace(/\[firstname\]/g, user.userInfo.firstName);
	text = text.replace(/\[cfirstname\]/g, ", " + user.userInfo.firstName);
	text = text.replace(/\[lastname\]/g, user.userInfo.lastName);
	text = text.replace(/\[email\]/g, user.userInfo.email);
	
	document.body.innerHTML = text;
}

function parseCourse(course) {
	// Do course replacements
	//console.log(course);
	var text = document.body.innerHTML;

	text = text.replace(/\<coursetitle\>\<\/coursetitle\>/g, course.courseInfo.courseTitle);
	text = text.replace(/\<startdate\>\<\/startdate\>/g, course.courseInfo.startDate);
	text = text.replace(/\<enddate\>\<\/enddate\>/g, course.courseInfo.endDate);
	text = text.replace(/\<termname\>\<\/termname\>/g, course.courseInfo.termName);
	text = text.replace(/\<coursecode\>\<\/coursecode\>/g, course.courseInfo.dispCourseCode);		

	document.body.innerHTML = text;
	
	text = text.replace(/\[coursetitle\]/g, course.courseInfo.courseTitle);
	text = text.replace(/\[startdate\]/g, course.courseInfo.startDate);
	text = text.replace(/\[enddate\]/g, course.courseInfo.endDate);
	text = text.replace(/\[termname\]/g, course.courseInfo.termName);
	text = text.replace(/\[coursecode\]/g, course.courseInfo.dispCourseCode);	
	
	document.body.innerHTML = text;
}