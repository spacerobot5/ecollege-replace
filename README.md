# ecollege-replace
This is a simple script that will replace text snippets with the currently logged-in user and course info in Pearson LearningStudio (eCollege).

The script will fetch details for the currently logged-in user, as well as info about the current course being accessed. It will then replace placeholder text tags in your page with the appropriate info.

## Setup:
1. Upload the replace.js javascript file to your Web server of choice. 
2. Include the script in your eCollege page usin the WYSIWYG editor: 
	<script src="WEBSERVERPATH/replace.js"></script>
3. Profit.

## Tags:
The script will replace the following tags in your HTML:

**[fullname]** = "Harry Potter"

**[firstname]** = "Harry"

**[lastname]** = "Potter"

**[cfirstname]** = ", Harry"

**[email]** = "harry_potter@pba.edu"

**[coursetitle]** = "Defense Against the Dark Arts"
