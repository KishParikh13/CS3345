(app => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

    // Add the following method to app.calendarView....
    // ** load(tutorId)
    //      - load tutor from app.scheduler using tutorId 
    //      - select h2 tag and set it's text to 'Schedule for [[Tutor Name]]'
    //      - iteral through days collection (above)
    //            for each day:
    //              - get appointment (if there is one) from app.scheduler using tutor.id and day
    //              - select td from DOM (day should be the ID)
	//				- clear the contents of the td (needed later when navigating back to this screen)
    //              - if appt exists, bind name and notes to td's innerHTML
    //                  - else add 'Book Appointment' button to td that call app.appointmentView.load() (with tutorId and day)
    //      - invoke app._changeView to show calendarView


    app.calendarView = {
        load: function (tutorId) {

            let tutor = app.scheduler.getTutor(tutorId);
            console.log(tutor);

            let heading = document.getElementById('calendar-heading');
            heading.innerText = 'Schedule for ' + tutor.name;


            for (const day of days) {

                let appointmentOutput = document.getElementById(day);
                let appointmentOnDay = app.scheduler.getAppointment(tutorId, day);

                console.log(appointmentOnDay);

                if (appointmentOnDay != undefined) {
                    if (appointmentOnDay.day === day && appointmentOnDay.tutorId === tutorId) {

                        appointmentOutput.querySelector('.person-name').innerText = appointmentOnDay.name;
                        appointmentOutput.querySelector('.person-notes').innerText = appointmentOnDay.notes;
                        appointmentOutput.querySelector('.booked-person-info').classList.remove("is-hidden");
                        appointmentOutput.querySelector('.button').classList.add("is-hidden");

                    }
                }   else {
                    appointmentOutput.querySelector('.booked-person-info').classList.add("is-hidden");
                    appointmentOutput.querySelector('.button').classList.remove("is-hidden");
                }

                let bookButton = appointmentOutput.querySelector('.button');
                bookButton.onclick = function () {
                    app.appointmentView.load(tutorId, day);
                }
            }

            app._changeView("calendarView");
        }
    };

})(app || (app = {}));