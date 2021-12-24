
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
    addStudentToClass('Dronning');
    
    console.log (class07Students);
  console.log (getNumberOfStudents());

   
   
}