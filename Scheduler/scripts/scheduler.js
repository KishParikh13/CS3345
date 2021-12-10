(app => {
    
    // The "scheduler" is in charge of managing tutor schedules.

    // set properties: id, name and skills
    class Tutor {
        constructor (id, name, skills) {
            this.id = id;
            this.name = name;
            this.skills = skills;
        }
    };

    // set properties: tutorId, day, name and notes
    class Appointment {
        constructor (tutorId, day, name, notes) {
            this.tutorId = tutorId;
            this.day = day;
            this.name = name;
            this.notes = notes;
        }
    };

    app.Tutor = Tutor;
    app.Appointment = Appointment;

    const tutors = [
        new Tutor(1, "John", [".NET", "Angular"]),
        new Tutor(2, "David", ["React", "Node"]),
        new Tutor(3, "Karen", ["Angular", "View"]),
        new Tutor(4, "Janet", ["REST Services", "SQL"]),
        new Tutor(5, "David", [".NET"])
    ];

    let appointments = [
        new Appointment(1, 'Monday', 'Sally', 'I need lots of Angular help!'),
        new Appointment(2, 'Monday', 'Edwin', 'I need lots of React help!'),
        new Appointment(2, 'Wednesday', 'Elmer', 'I need lots of help!'),
        new Appointment(3, 'Tuesday', 'Roger', 'I need lots of Web help!')
    ];

    // Add the following methods to app.scheduler....
    // ** getTutors() - returns all tutors
    // ** getTutor(tutorId) - return tutor with given Id
    // ** getAppointments() - return all appointments
    // ** getAppointment(tutorId, day) - return all appointments for given tutor and day
    // ** saveAppointment(appt) - add passed appointment to local variable

    app.scheduler = {
        getTutors: function () {
            return tutors;
        },

        getTutor: function (tutorId) {
            return tutors.find(tutor => tutor.id === tutorId);
        },

        getAppointments: function () {
            return appointments;
        },

        getAppointment: function (tutorId, day) {
            return appointments.find(appointment => ((appointment.tutorId === tutorId) && (appointment.day === day)));
        },

        saveAppointment: function (appt) {
            appointments.push(appt);
        }
    };

})(app || (app = {}));