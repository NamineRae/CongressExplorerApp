import {senators} from '.senators'
import {representatives} from '.representatives'

//combine the data in senators.js and represntatives.js
function simplifyCongress(reps, sens) {
console.log(reps)
let finalArray = [];

    //combine the arrays
    reps.forEach(rep) => {
        

        //info we want
        let simpleRep = {
            fullName: ${rep.first_name} ${rep.last_name},
            shortTitle: rep.short_title;
            seniority: rep.seniority;
        }

    finalArray.push(simpleRep)
    }

    sens.forEach(rep) => {
        

        //info we want
        let simpleSen = {
            fullName: ${sen.first_name} ${sen.last_name},
            shortTitle: sen.short_title;
            seniority: sen.seniority;
        }

    finalArray.push(simpleSen)
    }

    //return the final array
    return finalArray
}

//set chosen data array 
let simpleCongressPeople = simplifyCongress(representatives, senators);

console.log(simpleCongressPeople)


//seniority sorting function
const congressGrid = document.querySelector('#congressGrid');