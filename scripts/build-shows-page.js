import bandSiteApi from "./modules/band-site-api.js";
import {newElement, createAndAppendElement} from "./modules/create-element.js";
import formatDate from "./modules/dates.js";

// Functions, etc.
let tempInfo;

function appendShow(parent, showInfo) {
    let show = createShow(showInfo);
    parent.appendChild(show);
}

function createShow(showInfo) {
    let tempInfo;
    tempInfo = {tag: "div", classes: ["show"], content: ''};
    const container = newElement(tempInfo);  

    for(let label of ["date", "venue", "location"]) {
        tempInfo = {tag: "h4", classes: ["show__label"], content: label};
        createAndAppendElement(container,  tempInfo);

        let contentClasses = ["show__content"];

        tempInfo = {tag: "p", classes: contentClasses, content: showInfo[label]};

        if(label === "date") {
            contentClasses.push("show__content--bold");
            tempInfo.content = formatDate(showInfo[label], 'Week Mon DD YYYY')
        }

        createAndAppendElement(container,  tempInfo);
    }

    tempInfo = {tag: "button", classes: ["show__button"], content: "Buy Tickets"};
    createAndAppendElement(container,  tempInfo);

    return container;
}

// Shows
const main = document.querySelector("main");

tempInfo = {tag: "h2", classes: ["shows__title"], content: "Shows"};
createAndAppendElement(main, tempInfo);

tempInfo = {tag: "div", classes: ["shows__container"], content: ''};
const showsContainer = createAndAppendElement(main, tempInfo);

tempInfo = {tag: 'div', classes: ['shows__header'], content: ''}
const tableHeader = createAndAppendElement(showsContainer, tempInfo)

for(let label of ["date", "venue", "location"]){
    tempInfo = {tag: "h4", classes: ['show__label', 'show__label--header'], content: label};
    createAndAppendElement(tableHeader, tempInfo)
}

const shows = await bandSiteApi.getShows();
console.log(shows);

shows.forEach((show) => {appendShow(showsContainer, show)})

const showsList = document.querySelectorAll(".show");

function showsClickHandler(event, listeningShow) {
    event.stopPropagation()
    showsList.forEach((showItem) => {
        if (showItem.classList.contains('show--selected')) {
            showItem.classList.remove('show--selected');
        }
    })
    listeningShow.classList.add('show--selected');
}

function showsUnclickHandler(event) {
    showsList.forEach((showItem) => {
        if (showItem.classList.contains('show--selected')) {
            showItem.classList.remove('show--selected');
        }
    })
}

showsList.forEach((showItem) => {
    showItem.addEventListener('click', (event) => {
        showsClickHandler(event, showItem)
    })
})

window.addEventListener('click', showsUnclickHandler)
