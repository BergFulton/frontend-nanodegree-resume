var name = "Tracey Berg-Fulton";
var formattedName = HTMLheaderName.replace("%data%", name);
console.log(formattedName);
console.log(HTMLheaderName);

var role = "Creative Techologist";
var formattedRole = HTMLheaderRole.replace("%data%", role);
console.log(formattedRole);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio ={
	"name" : 'Tracey',
	"role" :'Lady who does stuff',
	"contact" : {
		"mobile": '412-443-2654',
		"email":'traceybergfulton@gmail.com',
		"github": 'BergFulton',
		"twitter": '@BergFulton',
		"location": 'Pittsburgh, PA'
	},
	
	"welcomeMessage": "Cuppa tea and a chat?",
	"skills": [
	"HTML ", " CSS", " JavaScript", " RWD", " project management", 
	" cat herding"],
	"bioPic": "images/headshot.jpg"
};

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$('#header').prepend(formattedBioPic);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$('#header').append(formattedWelcome); 

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$('#header').append(formattedSkills);

// var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact);
// $('#topContacts').append(formattedContact);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
$('#topContacts').append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
$('#topContacts').append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
$('#topContacts').append(formattedTwitter);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
$('#topContacts').append(formattedGitHub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
$('#topContacts').append(formattedLocation);

var work = {
};
work.currentPosition = 'Provenance Researcher and Collections Database Associate';
work.employer = 'Carnegie Museum of Art';
work.yearsWorked = '2014-present';
work.city = 'Pittsburgh, PA';

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer)
$('#workExperience').append(formattedEmployer);