# ecollege-replace
This is a simple script that will replace text snippets with the currently logged-in user and course info in Pearson LearningStudio (eCollege).

The script will fetch details for the currently logged-in user based on the current course being accessed. It will then replace placeholder text tags in your page with the appropriate info.

Data is pulled from these pages, which dynamically pull data for the current user if they are in an ecollege course in their browser:

http://dynamiccoursedata.next.ecollege.com/userinfo/json.ed?callback=?

http://dynamiccoursedata.next.ecollege.com/courseinfo/json.ed?callback=?

NOTE: This script MAY fail if your Learning Studio is running on an https domain, as Pearson only provides this script with an http connection.

## Setup:
1. Download the ecollege-replace.js javascript file and upload it to your Web server.
2. Include the script in the HTML of your Learning Studio Text/Multimedia content item using the WYSIWYG editor: 
`<script src="http://WEB-SERVER-PATH/ecollege-replace.js"></script>`
3. Use the following placeholder tags anywhere in your content item for replacement:

## User Tags:
The script will replace the following tags in your HTML with user info.  Using full HTML tags will allow replacements to gracefully degrade upon error and will not show placeholder text before replacement.

**[fullname]** = "Harry Potter"

**[firstname]** = "Harry"

**[lastname]** = "Potter"

**[cfirstname]** = ", Harry"

**[email]** = "harry_potter@pba.edu"

`<fullname></fullname>` = "Harry Potter"

`<firstname></firstname>` = "Harry"

`<lastname></lastname>` = "Potter"

`<cfirstname></cfirstname>` = ", Harry"

`<email></email>` = "harry_potter@pba.edu"

## User Tags:
The script will replace the following tags in your HTML with course info. Using full HTML tags will allow replacements to gracefully degrade upon error and will not show placeholder text before replacement.

**[coursetitle]** = "Defense Against the Dark Arts"

**[startdate]** = "1/18/2015 12:00:00 AM"

**[enddate]** = "4/30/2015 12:00:00 AM"

**[termname]** = "SOM Online Program_Master Term"

**[coursecode]** = "MIN 4403"

`<coursetitle></coursetitle>` = "Defense Against the Dark Arts"

`<startdate></startdate>` = "1/18/2011 12:00:00 AM"

`<enddate></enddate>` = "4/30/2015 12:00:00 AM"

`<termname></termname>` = "SOM Online Program_Master Term"

`<coursecode></coursecode>` = "MIN 4403"


Contact andrew_peeling@pba.edu with questions/comments.