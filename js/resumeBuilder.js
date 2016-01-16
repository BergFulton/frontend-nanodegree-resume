var bio = {
    "name": "Tracey Berg-Fulton",
    "role": "Lady who does stuff",
    "welcomeMessage": "Cuppa tea and a chat?",
    "contacts": {
        "mobile": "412-443-2654",
        "email": "traceybergfulton@gmail.com",
        "github": "BergFulton",
        "twitter": "@BergFulton",
        "location": "Pittsburgh, PA"
    },
    "skills": [
        "HTML ", "CSS", "JavaScript", "digital strategy for cultural heritage", "project management","cat herding",
    ],
    "bioPic": "images/headshot_crop.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $('#header').prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $('#header').prepend(formattedName);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#header').append(formattedWelcomeMessage);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $('#topContacts').append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $('#topContacts').append(formattedTwitter);

        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $('#topContacts').append(formattedGitHub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $('#topContacts').append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBioPic);
    }
}

bio.display();

function printSkills(){
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i += 1) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

printSkills();


var work = {
    "jobs": [{
        "employer": "Carnegie Museum of Art",
        "title": "Provenance Researcher and Collections Database Associate",
        "location": "Pittsburgh, PA",
        "dates": "July 2014-present",
        "description": "Provenance researcher and data lead for the Art Tracks project."
    }, {
        "employer": "Shoefitr",
        "title": "Data Manager",
        "location": "Pittsburgh, PA",
        "dates": "July 2013-July 2014",
        "description": "Managed data intake, data quality, and supervised team of 10."
    }, {
        "employer": "August Wilson Center for African American Culture",
        "title": "Registrar and Collections Specialist",
        "location": "Pittsburgh, PA",
        "dates": "2012-July 2013",
        "description": "Responsible for all collections activity, loans, exhibitions, and inventory."
    }, {
        "employer": "BergFulton, LLC",
        "title": "Contract Registrar",
        "location": "Greater Pittsburgh Area",
        "dates": "2011-2012",
        "description": "Collections management, arts management, and exhibition work for a variety of private clients and organizations."
    }, {
        "employer": "Fred Jones Jr. Art Museum, University of Oklahoma",
        "title": "Assistant Registrar",
        "location": "Norman, OK",
        "dates": "2010-2011",
        "description": "Assist with all aspects of art collection stewardship, opening of new wing, and intake of new collection."
    }],
    "display": function () {
        for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
       
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
       
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
    }
}

work.display();


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
})


var projects = {
    "projects": [{
        "title": "#MuseumSwearJar",
        "dates": "2015-present",
        "description":"<a href='http://www.twitter.com/MuseumSwearJar'>The Museum Swear Jar</a> is the museum industry's cathartic outlet, soon to be a benevolent overloard for change.",
        "images": ["images/SwearJar.jpg"]
    }, {
        "title": "Pittsburgh Punk Archive",
        "dates": "2015-present",
        "description": "Building a community driven online archive of the Pittsburgh punk scene.",
        "images": ["images/BetterOffDead_MonacaVFW.jpg", "images/PeachPitt_basement.jpg"]
    }, {
        "title": "1000 Mile Challenge",
        "dates": "2016",
        "description": "I'm attempting to run 1,000 miles (1,609 k) in 2016.",
        "images": ["images/Running.jpg"]
    }],
    "display": function() {
        for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",
            projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",
            projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",
            projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0)
            for (image in projects.projects[project].images)
                var formattedImage = HTMLprojectImage.replace("%data%",
                    projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
        }
    }
}
projects.display();

var speaking = {
    "conf": [{
        "name":"ARCS Conf",
        "dates": "November 12-15, 2015",
        "topic": "Be Excellent to Each Other",
        "location": "New Orleans, LA"
        // "slides":""
    }, {
        "name": "Museum Computer Network",
        "dates": "November 4-8, 2015",
        "topic": "Be Excellent to Each Other; The Future of Provenance Research",
        "location": "Minneapolis, MN"
        // "slides":""
    }, {
        "name": "Keystone DH",
        "dates": "June 4-6, 2015",
        "topic": "Art Tracks:Visualizing the Lives of Artwork",
        "location": "University of Pennsylvania, Philadelphia, PA",
        // "slides": ""
    }, {
        "name": "European Registrars Conference",
        "dates": "June 8-10, 2014",
        "topic": "Registrars of the Future",
        "location": "Helsinki, Finland"
        // "slides":""
    }, {
        "name": "European Registrars Conference",
        "dates": "December 2012",
        "topic": "The World Needs to See This!; Registrars and Social Media",
        "location": "Edinburgh, Scotland",
        // "slides": ""
    }],
    "display": function() {
        for (conf in speaking.conf) {
        $("#speaking").append(HTMLspeakingStart);
        
        var formattedName = HTMLspeakingName.replace("%data%", speaking.conf[conf].name);
        $(".speaking-entry:last").append(formattedName);

        var formattedLocation = HTMLspeakingLocation.replace("%data%", speaking.conf[conf].location);
        $(".speaking-entry:last").append(formattedLocation);


        var formattedDates = HTMLspeakingDates.replace("%data%", speaking.conf[conf].dates);
        $(".speaking-entry:last").append(formattedDates);

               
        var formattedTopic = HTMLspeakingTopic.replace("%data%", speaking.conf[conf].topic);
        $(".speaking-entry:last").append(formattedTopic);

       }
    }
};
speaking.display();


var education = {
    "schools": [{
        "name": "University of Glasgow",
        "location": "Glasgow, Scotland",
        "degree": "MLitt, with Merit",
        "major": "Decorative Arts and Design History",
        "dates": "2008"

    }, {
        "name": "Otterbein College",
        "location": "Westerville, OH",
        "degree": "BA, magna cum laude with honors",
        "major": ["Art", " Journalism"],
        "dates": "2007"
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
    }],
    "display": function(){
        for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);


        }
    }
}

education.display();




function displayOnlineEducation() {
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedUrl);
    }

}

displayOnlineEducation();



function displayFooterContacts() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $('#footerContacts').append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $('#footerContacts').append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $('#footerContacts').append(formattedTwitter);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $('#footerContacts').append(formattedGitHub);

}

displayFooterContacts();

function inName(name) {
    name = bio.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

//adding the Google map
$("#mapDiv").append(googleMap);