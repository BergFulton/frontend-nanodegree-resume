var bio = {
    'name': 'Tracey Berg-Fulton',
    'role': 'Lady who does stuff',
    'welcomeMessage': 'Cuppa tea and a chat?',
    'contacts': {
        'mobile': '412-443-2654',
        'email': 'traceybergfulton@gmail.com|mailto:traceybergfulton@gmail.com',
        'github': 'BergFulton|http://www.github.com/bergfulton',
        'twitter': '@BergFulton|http://www.twitter.com/bergfulton',
        'location': 'Pittsburgh, PA'
    },
    'skills': [
        'social media',
        'HTML',
        'CSS',
        'JavaScript',
        'digital strategy',
        'cat herding'
    ],
    'biopic': 'images/headshot_crop.jpg',
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    'display': function() {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedRole);

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedName);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcomeMessage);

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
        $('#footerContacts').append(formattedMobile);

        var emailInfo = bio.contacts.email.split('|');

        var formattedEmail = HTMLemail.replace('%data%', emailInfo[0]).replace('%url%', emailInfo[1]);
        $('#topContacts').append(formattedEmail);
        $('#footerContacts').append(formattedEmail);

        var twitterInfo = bio.contacts.twitter.split('|');
        //Adding active links to Twitter handle in header/footer. 

        var formattedTwitter = HTMLtwitter.replace('%data%', twitterInfo[0]).replace('%url%', twitterInfo[1]);
        $('#topContacts').append(formattedTwitter);
        $('#footerContacts').append(formattedTwitter);

        var githubInfo = bio.contacts.github.split('|');
        //Adding active links to GitHub handle in header/footer.

        var formattedGitHub = HTMLgithub.replace('%data%', githubInfo[0]).replace('%url%', githubInfo[1]);
        $('#topContacts').append(formattedGitHub);
        $('#footerContacts').append(formattedGitHub);

        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').append(formattedBioPic);

        function printSkills() {
            $('#header').append(HTMLskillsStart);
            for (var i = 0, len = bio.skills.length; i < len; i++) {
                var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
                $('#skills').append(formattedSkill);
            }
        }
        printSkills();
    }
};

var work = {
    'jobs': [{
        'employer': 'Carnegie Museum of Art',
        'title': 'Provenance Researcher and Collections Database Associate',
        'location': 'Pittsburgh, PA',
        'dates': 'July 2014-present',
        'url': 'http://www.cmoa.org',
        'description': 'Provenance researcher and data lead for the <a class="project-link" href="http://blog.cmoa.org/category/series/art-tracks/">Art Tracks project.'
    }, {
        'employer': 'Shoefitr',
        'title': 'Data Manager',
        'location': 'Pittsburgh, PA',
        'url': 'http://www.shoefitr.com',
        'dates': 'July 2013-July 2014',
        'description': 'Managed data intake, data quality, and supervised team of 10.'
    }, {
        'employer': 'August Wilson Center for African American Culture',
        'title': 'Registrar and Collections Specialist',
        'location': 'Pittsburgh, PA',
        'url': 'http://culturaldistrict.org/pages/aacc',
        'dates': '2012-July 2013',
        'description': 'Responsible for all collections activity, loans, exhibitions, and inventory.'
    }, {
        'employer': 'BergFulton, LLC',
        'title': 'Contract Registrar',
        'location': 'Pittsburgh, PA',
        'url': 'http://traceybergfulton.com',
        'dates': '2011-2012',
        'description': 'Collections management, arts management, and exhibition work for a variety of private clients and organizations.'
    }, {
        'employer': 'Fred Jones Jr. Art Museum, University of Oklahoma',
        'title': 'Assistant Registrar',
        'location': 'Norman, OK',
        'url': 'http://www.ou.edu/fjjma.html',
        'dates': '2010-2011',
        'description': 'Assist with all aspects of art collection stewardship, opening of new wing, and intake of new collection.'
    }],
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    'display': function() {
        for (var i = 0, len = work.jobs.length; i < len; i++) {
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

                var formattedUrl = $('.work-entry .employer-link').attr('href', work.jobs[i].url);
            }
        }
    }
};

var projects = {
    'projects': [{
        'title': '#MuseumSwearJar',
        'dates': '2015-present',
        'description': '<a class="project-link" href="http://www.twitter.com/MuseumSwearJar">The Museum Swear Jar</a> is the museum industry\'s cathartic outlet, soon to be a benevolent overlord for change.',
        'images': ['images/SwearJar.jpg']
    }, {
        'title': 'Pittsburgh Punk Archive',
        'dates': '2015-present',
        'description': 'Building a community driven online archive of the Pittsburgh punk scene. Built using Omeka, HTML, CSS, and little bit of hope.',
        'images': ['images/PeachPitt_basement.jpg']
    }, {
        'title': '1000 Mile Challenge',
        'dates': '2016',
        'description': 'I\'m attempting to run 1,000 miles (1,609 k) in 2016. There will be hills, blisters, and a marathon for good measure. Why? Because it\'s there.',
        'images': ['images/Running.jpg']
    }],
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    'display': function() {
        for (var i = 0, len = projects.projects.length; i < len; i++) {
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
    'conf': [{
        'name': 'ARCS Conf',
        'date': 'November 12-15, 2015',
        'topic': 'You\'ve got your Social Media in my Collections Data!',
        'location': 'New Orleans, LA'
    }, {
        'name': 'Museum Computer Network',
        'date': 'November 4-8, 2015',
        'topic': 'Be Excellent to Each Other; The Future of Provenance Research',
        'location': 'Minneapolis, MN'
    }, {
        'name': 'Keystone DH',
        'date': 'June 4-6, 2015',
        'topic': 'Art Tracks:Visualizing the Lives of Artwork',
        'location': 'University of Pennsylvania, Philadelphia, PA'
    }, {
        'name': 'European Registrars Conference',
        'date': 'June 8-10, 2014',
        'topic': 'We Were Promised Jetpacks',
        'location': 'Helsinki, Finland'
    }, {
        'name': 'European Registrars Conference',
        'date': 'December 2012',
        'topic': 'The World Needs to See This!; Making your objects tweet, buzz, and go viral',
        'location': 'Edinburgh, Scotland'
    }],
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    'display': function() {
        for (var i = 0, len = speaking.conf.length; i < len; i++) {
            if (speaking.conf.hasOwnProperty(i)) {
                $('#speaking').append(HTMLspeakingStart);

                var formattedName = HTMLspeakingName.replace('%data%', speaking.conf[i].name);
                $('.speaking-entry:last').append(formattedName);

                var formattedLocation = HTMLspeakingLocation.replace('%data%', speaking.conf[i].location);
                $('.speaking-entry:last').append(formattedLocation);

                var formattedDates = HTMLspeakingDates.replace('%data%', speaking.conf[i].date);
                $('.speaking-entry:last').append(formattedDates);

                var formattedTopic = HTMLspeakingTopic.replace('%data%', speaking.conf[i].topic);
                $('.speaking-entry:last').append(formattedTopic);
            }
        }
    }
};

var education = {
    'schools': [{
        'name': 'University of Glasgow|http://www.gla.ac.uk',
        'location': 'Glasgow, Scotland',
        'degree': 'MLitt, with Merit',
        'major': 'Decorative Arts and Design History',
        'dates': '2008'

    }, {
        'name': 'Otterbein College|http://www.otterbein.edu',
        'location': 'Westerville, OH',
        'degree': 'BA, magna cum laude with honors',
        'major': ['Art', ' Journalism'],
        'dates': '2007'
    }, {
        'name': 'Irish|American Scholars Exchange',
        'location': 'Belfast, Northern Ireland',
        'degree': 'Independent study abroad',
        'major': 'Honors thesis research and writing',
        'dates': '2006'

    }],
    'onlineCourses': [{
        'title': 'Front End Web Development NanoDegree',
        'school': 'Udacity',
        'date': '2015-2016',
        'url': 'http://www.udacity.com'
    }, {
        'title': 'How to Make a Website',
        'school': 'TeamTreehouse',
        'date': '2015',
        'url': 'https://teamtreehouse.com/library/how-to-make-a-website'
    }, {
        'title': 'CSS Basics',
        'school': 'TeamTreehouse',
        'date': '2015',
        'url': 'https://teamtreehouse.com/library/css-basics'
    }, {
        'title': 'JavaScript Basics',
        'school': 'TeamTreehouse',
        'date': '2015',
        'url': 'https://teamtreehouse.com/library/javascript-basics'
    }],
    // including display function within the object declaration, despite JSLint not validating it (unless the function is all on one line)
    // https://discussions.udacity.com/t/json-and-display-function/26209
    // http://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results
    // I previously did this in an alternative manner w/valid JSON - see this commit: https://github.com/BergFulton/frontend-nanodegree-resume/commit/b80f12872c174f53f85d6674f8dc1939dafe7cc4
    'display': function() {
        for (var i = 0, len = education.schools.length; i < len; i++) {
            if (education.schools.hasOwnProperty(i)) {
                $('#education').append(HTMLschoolStart);

                var schoolLink = education.schools[i].name.split('|');

                var formattedName = HTMLschoolName.replace('%data%', schoolLink[0]).replace('%url%', schoolLink[1]);
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
        for (var j = 0, OcLen = education.onlineCourses.length; j < OcLen; j++) {
            if (education.onlineCourses.hasOwnProperty(j)) {
                $('#education').append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title);
                var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);
                $('.education-entry:last').append(formattedTitle + formattedSchool);

                var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[j].date);
                $('.education-entry:last').append(formattedOnlineDates);

                var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[j].url).replace('%url%', education.onlineCourses[j].url);
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