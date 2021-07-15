import {senators} from './senators.js'
import {representatives} from './representatives.js'

//combine the data in senators.js and represntatives.js
function simplifyCongress(reps, sens) {
console.log(reps)
let finalArray = [];

    //combine the arrays
    reps.forEach((rep) => {
        
        //info we want
        let simpleRep = {
            fullName: `${rep.first_name} ${rep.last_name}`,
            shortTitle: rep.short_title,
            seniority: rep.seniority,
            imgUrl: `https://www.govtrack.us/static/legislator-photos/${rep.govtrack_id}-100px.jpeg`
        }

    finalArray.push(simpleRep)
    })

    sens.forEach((sen) => {
        
        //info we want
        let simpleSen = {
            fullName: `${sen.first_name} ${sen.last_name}`,
            shortTitle: sen.short_title,
            seniority: sen.seniority,
            imgUrl: `https://www.govtrack.us/static/legislator-photos/${sen.govtrack_id}-100px.jpeg`
        }

    finalArray.push(simpleSen)
    })

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


function renderCongress(congressArray, congressGrid) {

    // <div class="congressPerson">
    //     <img class="profilePic" src="https://www.govtrack.us/static/legislator-photos/300002-100px.jpeg" alt="profilePic">
    //     <h3>Lamar Alexander</h3>
    // </div>
    //rebuild this structure inside the loop

    congressArray.forEach((person) => {

        let personDiv = createElement('div');
        let personText = createTextNode(person.fullName)
        
        let personImg = createElement('img');
        personImg.setAttribute('src', person.imgUrl)
        
        console.log(personImg)
        
        appendElement(personDiv, personText)

        appendElement(congressGrid, personDiv)
        appendElement(congressGrid, personImg)

        //let congressPerson = createElement('div');
        //let profilePic = createElement('img');
        // profilePic.setAttribute('src', person.imgUrl)
    });
}


//sort by seinority
function sortBySenority(congressArray) {
return congressArray.sort((a, b) => b.seniority - a.seniority)
} 

let orgArr = simplifyCongress(representatives, senators);

console.log(orgArr)

//more div/info stuff? I'm kina lost at this point...
const congressGrid = selectElement('#congressGrid');
const sortButton = selectElement('#sortBySen')

renderCongress(orgArr, congressGrid)

sortButton.addEventListener('click', () => {
    let sortedCongress = sortBySenority(simpleCongressPeople)
    renderCongress(sortedCongress)
})

//I've gone through all of my notes on how to do this and its still a mess. I don't know how to fix it.