(app => {

    let selectedTutor, selectedDay;

    // Add the following methods to app.appointmentView....
    // ** load(tutorId, day)
    //      - store tutorId and day on selected variable above 
    //      - load appointmentView using app._changeView 
    // ** save()
    //      - select DOM elements for name (input) and notes (textarea)
    //      - create new Appointment using values on selected variables and the form values submitted 
    //      - pass appointment to app.scheduler.saveAppointment
    //      - clear the two form element values
    //      - navigate back to calendar using app.calendarView.load with the selected tutorId

    app.appointmentView = {
        load: function (tutorId, day) {
            selectedTutor = tutorId;
            selectedDay = day;

            app._changeView("appointmentView");
        },
        save: function () {
            let nameField = document.getElementById('name');
            let notesField = document.getElementById('notes');

            if (nameField.value && notesField.value) {
                console.log("has values");

                let appt = new app.Appointment(selectedTutor, selectedDay, nameField.value, notesField.value);
                app.scheduler.saveAppointment(appt);

                nameField.value = "";
                notesField.value = "";

                app.calendarView.load(selectedTutor);
            }
            else {
                alert("Add your name and some notes to book.");
            }
        }

    };

})(app || (app = {}));