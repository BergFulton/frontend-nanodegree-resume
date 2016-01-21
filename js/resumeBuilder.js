var bio = {
    "name": "Tracey Berg-Fulton",
    "role": "Lady who does stuff",
    "welcomeMessage": "Cuppa tea and a chat?",
    "contacts": {
        "mobile": "412-443-2654",
        "email": "traceybergfulton@gmail.com",
        "github": {
            "username": "BergFulton",
            "url": "http://github.com/bergfulton"
        },
        "twitter": {
            "username": "@BergFulton",
            "url": "http://twitter.com/bergfulton"
        },
        "location": "Pittsburgh, PA"
    },
    "skills": [
        "social media",
        "HTML",
        "CSS",
        "JavaScript",
        "digital strategy",
        "cat herding"
    ],
    "bioPic": "images/headshot_crop.jpg",
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    "display": function() {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedRole);

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedName);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcomeMessage);

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
        $('#footerContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(formattedEmail);
        $('#footerContacts').append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter.username).replace('%url%', bio.contacts.twitter.url);
        $('#topContacts').append(formattedTwitter);
        $('#footerContacts').append(formattedTwitter);

        var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github.username).replace('%url%', bio.contacts.github.url);
        $('#topContacts').append(formattedGitHub);
        $('#footerContacts').append(formattedGitHub);

        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
        $('#header').append(formattedBioPic);

        function printSkills() {
            $('#header').append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i += 1) {
                var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
                $('#skills').append(formattedSkill);
            }
        }
        printSkills();
    }
};

var work = {
    "jobs": [{
        "employer": "Carnegie Museum of Art",
        "title": "Provenance Researcher and Collections Database Associate",
        "location": "Pittsburgh, PA",
        "dates": "July 2014-present",
        "description": "Provenance researcher and data lead for the <a class=\"project-link\" href='http://blog.cmoa.org/category/series/art-tracks/'>Art Tracks project."
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
        "location": "Pittsburgh, PA",
        "dates": "2011-2012",
        "description": "Collections management, arts management, and exhibition work for a variety of private clients and organizations."
    }, {
        "employer": "Fred Jones Jr. Art Museum, University of Oklahoma",
        "title": "Assistant Registrar",
        "location": "Norman, OK",
        "dates": "2010-2011",
        "description": "Assist with all aspects of art collection stewardship, opening of new wing, and intake of new collection."
    }],
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            if (work.jobs.hasOwnProperty(i)) {
                $('#workExperience').append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);

                var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);

                var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
                $('.work-entry:last').append(formattedLocation);

                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $('.work-entry:last').append(formattedEmployerTitle);

                var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
                $('.work-entry:last').append(formattedDates);

                var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
                $('.work-entry:last').append(formattedDescription);
            }
        }
    }
};

var projects = {
    "projects": [{
        "title": "#MuseumSwearJar",
        "dates": "2015-present",
        "description": "<a class=\"project-link\" href='http://www.twitter.com/MuseumSwearJar'>The Museum Swear Jar</a> is the museum industry's cathartic outlet, soon to be a benevolent overlord for change.",
        "images": ["images/SwearJar.jpg"]
    }, {
        "title": "Pittsburgh Punk Archive",
        "dates": "2015-present",
        "description": "Building a community driven online archive of the Pittsburgh punk scene. Built using Omeka, HTML, CSS, and little bit of hope.",
        "images": ["images/PeachPitt_basement.jpg"]
    }, {
        "title": "1000 Mile Challenge",
        "dates": "2016",
        "description": "I'm attempting to run 1,000 miles (1,609 k) in 2016. There will be hills, blisters, and a marathon for good measure. Why? Because it's there.",
        "images": ["images/Running.jpg"]
    }],
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {
            if (projects.projects.hasOwnProperty(i)) {
                $('#projects').append(HTMLprojectStart);

                var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
                $('.project-entry:last').append(formattedTitle);

                var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
                $('.project-entry:last').append(formattedDates);

                var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
                $('.project-entry:last').append(formattedDescription);

                if (projects.projects[i].images.length > 0)
                    for (var image in projects.projects[i].images) {
                        if (projects.projects.hasOwnProperty(image)) {
                            var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[image]);
                            $('.project-entry:last').append(formattedImage);
                        }
                    }
            }
        }
    }
};

var speaking = {
    "conf": [{
        "name": "ARCS Conf",
        "dates": "November 12-15, 2015",
        "topic": "Be Excellent to Each Other",
        "location": "New Orleans, LA"
    }, {
        "name": "Museum Computer Network",
        "dates": "November 4-8, 2015",
        "topic": "Be Excellent to Each Other; The Future of Provenance Research",
        "location": "Minneapolis, MN"
    }, {
        "name": "Keystone DH",
        "dates": "June 4-6, 2015",
        "topic": "Art Tracks:Visualizing the Lives of Artwork",
        "location": "University of Pennsylvania, Philadelphia, PA"
    }, {
        "name": "European Registrars Conference",
        "dates": "June 8-10, 2014",
        "topic": "We Were Promised Jetpacks",
        "location": "Helsinki, Finland"
    }, {
        "name": "European Registrars Conference",
        "dates": "December 2012",
        "topic": "The World Needs to See This!; Registrars and Social Media",
        "location": "Edinburgh, Scotland"
    }],
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    "display": function() {
        for (var i = 0; i < speaking.conf.length; i++) {
            if (speaking.conf.hasOwnProperty(i)) {
                $('#speaking').append(HTMLspeakingStart);

                var formattedName = HTMLspeakingName.replace('%data%', speaking.conf[i].name);
                $('.speaking-entry:last').append(formattedName);

                var formattedLocation = HTMLspeakingLocation.replace('%data%', speaking.conf[i].location);
                $('.speaking-entry:last').append(formattedLocation);

                var formattedDates = HTMLspeakingDates.replace('%data%', speaking.conf[i].dates);
                $('.speaking-entry:last').append(formattedDates);

                var formattedTopic = HTMLspeakingTopic.replace('%data%', speaking.conf[i].topic);
                $('.speaking-entry:last').append(formattedTopic);
            }
        }
    }
};

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
    }, {
        "name": "Irish|American Scholars Exchange",
        "location": "Belfast, Northern Ireland",
        "degree": "Independent study abroad",
        "major": "Honors thesis research and writing",
        "dates": "2006"

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
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    "display": function() {
        for (var i = 0; i < education.schools.length; i++) {
            if (education.schools.hasOwnProperty(i)) {
                $('#education').append(HTMLschoolStart);

                var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);

                $('.education-entry:last').append(formattedName + formattedDegree);

                var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
                $('.education-entry:last').append(formattedLocation);

                var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
                $('.education-entry:last').append(formattedDates);

                var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].major);
                $('.education-entry:last').append(formattedMajor);
            }
        }

        $('#education').append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            if (education.onlineCourses.hasOwnProperty(j)) {
                $('#education').append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title);
                var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);
                $('.education-entry:last').append(formattedTitle + formattedSchool);

                var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates);
                $('.education-entry:last').append(formattedOnlineDates);

                var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[j].url);
                $('.education-entry:last').append(formattedUrl);
            }
        }
    }
};

//adding the Google map
$('#mapDiv').append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

bio.display();
work.display();
projects.display();
speaking.display();
education.display();