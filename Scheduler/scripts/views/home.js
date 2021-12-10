(app => {

    var isLoaded;

    // Add the following method to app.homeView....
    // ** load()
    //      - if !isLoaded
    //            - get list of tutors from app.scheduler
    //            - select profiles container from html
    //            - select profiles template from html
    //            - iterate through tutors
    //                  for each tutur:
    //                  - create clone of profile template's content
    //                      - hint: let newNode = profileTemplate.content.cloneNode(true);
    //                  - select and populate clone's h2 element with tutor's name
    //                  - select and populate clone's p element with tutor's skills array
    //                      - hint: tutor.skills.map(x => `<span>${x}</span>`).join('')
    //                          - (individual spans allow for styling) 
    //                  - select clone's button element and bind click event to app.calendarView.load() (passing tutorId)
    //                  - append clone to profiles container
    //            - set isLoaded to true so the const list does not have to be loaded again 
    //      - invoke app._changeView to show homeView (regardless of isLoaded status)

    app.homeView = {
        load: function () {
            if (!isLoaded) {
                let tutors = app.scheduler.getTutors();

                let container = document.querySelector('#tutors-grid');
                let profile_template = document.querySelector('#tutor-card-template').content;

                for (const tutor of tutors) {
                    let newNode = profile_template.cloneNode(true);
                    newNode.querySelector('.tutor-name').innerHTML = tutor.name;

                    let skillPill = newNode.querySelector('.tutor-skill');

                    for (const skill of tutor.skills) {
                        let newSkill = skillPill.cloneNode(true);
                        newSkill.innerText = skill;
                        newNode.querySelector('.tutor-skills').appendChild(newSkill);
                    }

                    skillPill.classList.add('is-hidden');

                    let scheduleButton = newNode.querySelector('#scheduleButton');
                    scheduleButton.onclick = function () {
                        app.calendarView.load(tutor.id);
                    }

                    container.appendChild(newNode); 
                }
                isLoaded = true;
            }
        }
    };

})(app || (app = {}));