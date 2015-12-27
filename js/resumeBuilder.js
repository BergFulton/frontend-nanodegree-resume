var name = "Tracey Berg-Fulton";
var formattedName = HTMLheaderName.replace("%data%", name);
console.log(formattedName);
console.log(HTMLheaderName);

var role = "Creative Techologist";
var formattedRole = HTMLheaderRole.replace("%data%", role);
console.log(formattedRole);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["HTML", "CSS", "provenance research", "dog snuggling"];

$("#main").append(skills);

