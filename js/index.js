import {senators} from '.senators'
import {representatives} from '.representatives'

//combine the data in senators.js and represntatives.js
function simplifyCongress(reps, sens) {
console.log(reps)
let finalArray = [];

    //combine the arrays
    reps.forEach((rep) => {
        

        //info we want
        let simpleRep = {
            fullName: ${rep.first_name} ${rep.last_name},
            shortTitle: rep.short_title;
            seniority: rep.seniority;
            imgUrl: https://www.govtrack.us/static/legislator-photos/${rep.govtrack_id}-100px.jpeg
        })

    finalArray.push(simpleRep)
    }

    sens.forEach((rep) => {
        

        //info we want
        let simpleSen = {
            fullName: ${sen.first_name} ${sen.last_name},
            shortTitle: sen.short_title;
            seniority: sen.seniority;
            imgUrl: https://www.govtrack.us/static/legislator-photos/${sen.govtrack_id}-100px.jpeg
        })

    finalArray.push(simpleSen)
    }

    //return the final array
    return finalArray
}

//set chosen data array 
let simpleCongressPeople = simplifyCongress(representatives, senators);

console.log(simpleCongressPeople[0])

//function to select html elements
function selectElement(selectorString) {
    return document.querySelector(selectorString)
}

//function to create html elements
function createElement(elementTypeString) {
    return document.createElement(elementTypeString)
}

//function to append
function appendElement(elementToAppendTo, content) {
    elementToAppendTo.append(content)
}

//create text node
function createTextNode(text) {
    return document.createTextNode(text);
}

//grab div location, get info, append it
const congressGrid = document.querySelector('#congressGrid');

let personDiv = createElement('div');
let personText = createTExtNode(simpleCongressPeople[0].fullName)

let personImg = createElement('img');
personImg.setAttribute('src', simpleCongressPeople[0].imgUrl)

console.log(personImg)

appendElement(personDiv, personText)

appendElement(congressGrid, personImg)

//sort by seinority
let sortedCongress = simpleCongressPeople.sort((a, b) => {
    return b.seniority - a.seniority
})

console.log(sortedCongress)