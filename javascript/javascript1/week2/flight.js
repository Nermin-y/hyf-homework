
function getFullName(firstName, lastName, useFormalName, gender) {

    if (useFormalName==true && gender=="male"){
        return "Lord " + " " + firstName + " " + lastName;
    }
    else if (useFormalName==true && gender=="female"){
        return `Lady  ${firstName} ${lastName}`;
    }
    else {
        return firstName + " " + lastName;
    }
 }

const fullname1 = getFullName("Benja", "Hughes",true,"male");
const fullname2 = getFullName("Anna", "nilasen",true,"female");

console.log(fullname1);
console.log(fullname2);
