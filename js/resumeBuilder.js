var name = "Tracey Berg-Fulton";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Creative Techologist";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var work = {
	"jobs": [
	{
		"employer":"Carnegie Museum of Art",
		"title":"Provenance Researcher and Collections Database Associate",
		"location":"Pittsburgh, PA",
		"dates": "July 2014-present",
		"description": "Provenance researcher and data lead for the Art Tracks project."
	},
	{
		"employer": "Shoefitr",
		"title": "Data Manager",
		"location": "Pittsburgh, PA",
		"dates": "July 2013-July 2014",
		"description": "Managed data intake, data quality, and supervised team of 10."
	},
	{
		"employer": "August Wilson Center for African American Culture",
		"title": "Registrar and Collections Specialist",
		"location": "Pittsburgh, PA",
		"dates": "2012-July 2013",
		"description": "Responsible for all collections activity, loans, exhibitions, and inventory."
	}
]
}

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation
	+ formattedDates + formattedDescription;
	$(".work-entry:last").append(formattedEmployerTitle);

};

var projects = {
	"projects": [{
		"title": "A Title",
		"dates": 2015,
		"description": "A description!",
		"images": []
	}]
}


var bio ={
	"name" : 'Tracey Berg-Fulton',
	"role" :'Lady who does stuff',
	"welcomeMessage": "Cuppa tea and a chat?",
	"contact" : {
		"mobile": '412-443-2654',
		"email":'traceybergfulton@gmail.com',
		"github": 'BergFulton',
		"twitter": '@BergFulton',
		"location": 'Pittsburgh, PA'
	},
	"skills": [
	"HTML ", " CSS", " JavaScript", " RWD", " project management", 
	" cat herding"],
	"bioPic": "images/headshot.jpg"
};




var education = {
	"schools": [{
		"name": "University of Glasgow",
		"city": "Glasgow, Scotland",
		"degree": "MLitt, with Merit",
		"major": "Decorative Arts and Design History",
		"grad year": "2008"

	}, {
		"name": "Otterbein College",
		"city": "Westerville, Ohio",
		"degree": "BA, magna cum laude with honors",
		"major": ["Art", "Journalism"],
		"grad year": "2007"
	}],
	"onlineCourses": [{
		"title": "Front End Web Development NanoDegree",
		"school": "Udacity",
		"dates": "2015-2016",
		"url": "http://www.udacity.com"
	}, {
		"title": "How to Make a Website",
		"school": "TeamTreehouse",
		"dates": "2015",
		"url": "https://teamtreehouse.com/library/how-to-make-a-website"
	}, {
		"title": "CSS Basics",
		"school": "TeamTreehouse",
		"dates": "2015",
		"url": "https://teamtreehouse.com/library/css-basics"
	}, {
		"title": "JavaScript Basics",
		"school": "TeamTreehouse",
		"dates": "2015",
		"url": "https://teamtreehouse.com/library/javascript-basics"
	}]
}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
}
