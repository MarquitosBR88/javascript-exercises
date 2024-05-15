



let person = []
const date = new Date();
const currentYear = date.getFullYear();

const findTheOldest = function(array) {
    const oldestAge = array.reduce((age, item) => {
    if (item.yearOfDeath === undefined) {
        age = currentYear - item.yearOfBirth;
    }
    else if (age < (item.yearOfDeath - item.yearOfBirth)) {
            age = item.yearOfDeath - item.yearOfBirth;
        }     
    return age;
    }, 0);
      
    for (const i of array) {
        if (oldestAge === (currentYear - i.yearOfBirth) || oldestAge === (i.yearOfDeath - i.yearOfBirth))  {
            person = i;
        }
    }    
    
    return person;
}



// Do not edit below this line
module.exports = findTheOldest;
