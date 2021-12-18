
const class07Students = [];
function addStudentToClass(studentName) {
    if  (studentName === "Dronning"){
    class07Students.push(studentName);
    }
    else if (class07Students.length>=6) {
     console.log("Cannot add more students to class 07");
    }
     else if (class07Students.includes(studentName) === true) {
        console.log('You are allready in the class');
    }
      
    else {
 class07Students.push(studentName);
}
}
function getNumberOfStudents(){
    return class07Students.length;
}
    addStudentToClass('Basma');
addStudentToClass('Basma');
    addStudentToClass('Omar');
    addStudentToClass('Rem'); 
    addStudentToClass('maria');
    addStudentToClass('Asia');
    addStudentToClass('Aya');
    addStudentToClass('loucas');
    
    addStudentToClass('Dronning');
    
    console.log (class07Students);
  console.log (getNumberOfStudents());

    function getEventWeekday(daysFromToday) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array with weekdays
    const day = new Date();
    let todaysDay = day.getDay(); //js method which returns eact today's day by it's number begins from 0 Sunday
    let eventDay = todaysDay + daysFromToday; //calculates number of event day
    let weekdayOfEvent = eventDay.getDag; //transform number of the event day from 0 to 6
    console.log("Todays is " + weekdays[todaysDay] + ".");
    console.log("Event will be on " + weekdays[weekdayOfEvent] + ".");
   
}