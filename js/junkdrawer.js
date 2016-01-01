var educationCity = HTMLschoolLocation.replace("%data%", education["city"]);
$("#education").append(educationCity);

var formattedPosition = HTMLworkTitle.replace("%data%", work.currentPosition);
$("#workExperience").append(formattedPosition);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer)
$('#workExperience').append(formattedEmployer);



var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$('#header').append(formattedWelcome); 

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$('#header').append(formattedSkills);

var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact);
$('#topContacts').append(formattedContact);

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

var name = "Tracey Berg-Fulton";
var formattedName = HTMLheaderName.replace("%data%", name);
console.log(formattedName);
console.log(HTMLheaderName);

var role = "Creative Techologist";
var formattedRole = HTMLheaderRole.replace("%data%", role);
console.log(formattedRole);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);