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
        "HTML ", " CSS", " JavaScript", " RWD", " project management",
        " cat herding"
    ],
    "bioPic": "images/fry.jpg"
    // "display": (),
}


function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
};

displayBio();

function displayContacts() {
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('#header').append(formattedWelcomeMessage);

    var formattedGenericContact = HTMLcontactGeneric.replace("%data%", "Schnauzer");
    $("#topContacts").append(HTMLcontactGeneric);

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

};

displayContacts();



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
    },
    // "display":()
    ]
}

function displaywork() {
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
displaywork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
})


var projects = {
    "projects": [{
        "title": "A Title",
        "dates": 2015,
        "description": "A description!",
        "images": []
    }]
}

projects.display = function() {
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

projects.display();



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
    },
    // "display":(),
    ]
}

function displayEducation() {
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
    };
};
displayEducation();



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



if (bio.skills.length > 0) {
    $("#skills").append(HTMLskillsStart);

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