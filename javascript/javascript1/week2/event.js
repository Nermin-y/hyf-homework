function getEventWeekday(eventDay){
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    const day= new Date();
    let todaysDay= day.getDay();
    let weekdayOfEvent = todaysDay + eventDay;
}

console.log(getEventWeekday(9));
