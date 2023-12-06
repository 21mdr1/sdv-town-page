// Functions, etc.
let tempInfo;

const createAndAppendElement = function(parent, elementInfo) {
    let element = newElement(elementInfo);
    parent.appendChild(element);
    return element
}

const newElement = function(elementInfo) {
    let element = document.createElement(elementInfo.tag);
    for(classItem of elementInfo.classes) {
        element.classList.add(classItem);
    }
    element.textContent = elementInfo.content;
    return element;
}

const appendShow = function(parent, showInfo) {
    let show = createShow(showInfo);
    parent.appendChild(show);
}

const createShow = function(showInfo) {
    let tempInfo;
    tempInfo = {tag: "div", classes: ["show"], content: ''};
    const container = newElement(tempInfo);  

    for(label of ["date", "venue", "location"]) {
        tempInfo = {tag: "h4", classes: ["show__label"], content: label};
        createAndAppendElement(container,  tempInfo);

        tempInfo = {tag: "p", classes: ["show__content"], content: showInfo[label]};
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

// to do: change date to dateTime format
let shows = [
    {date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA'},
    {date: 'Tue Spet 21 2021', venue: 'Pier 3 East', location: 'San Francisco, CA'},
    {date: 'Fri Oct 15 2021', venue: 'View Lounge', location: 'San Francisco, CA'},
    {date: 'Sat Nov 06 2021', venue: 'Hyatt Agency', location: 'San Francisco, CA'},
    {date: 'Fri Nov 26 2021', venue: 'Moscow Center', location: 'San Francisco, CA'},
    {date: 'Wed Dec 15 2021', venue: 'Press Club', location: 'San Francisco, CA'}
]

for(show of shows) {
    appendShow(showsContainer, show);
}