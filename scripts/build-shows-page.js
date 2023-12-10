// Functions, etc.
let tempInfo;

function createAndAppendElement(parent, elementInfo) {
    let element = newElement(elementInfo);
    parent.appendChild(element);
    return element
}

function newElement(elementInfo) {
    let element = document.createElement(elementInfo.tag);
    elementInfo.classes.forEach((classItem) => {element.classList.add(classItem)})
    element.textContent = elementInfo.content;
    return element;
}

function appendShow(parent, showInfo) {
    let show = createShow(showInfo);
    parent.appendChild(show);
}

function createShow(showInfo) {
    let tempInfo;
    tempInfo = {tag: "div", classes: ["show"], content: ''};
    const container = newElement(tempInfo);  

    for(label of ["date", "venue", "location"]) {
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

function formatDate(date, format) {
    let options;

    if (format === 'relative') {
        let today = new Date();
        let day = 1000 * 3600 * 24;

        let difference = (today - date) / day;

        if (difference <= 1) {
            return 'Today';
        }
        if (difference <= 7) {
            return `${Math.round(difference)}d`;
        }
        format = 'MM/DD/YYYY';

    }

    if (format === 'MM/DD/YYYY') {
        options = {
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric',
        }
    }

    if (format === 'Week Mon DD YYYY') {
        options = {
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
        };
    }

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date).replace(/,/g, '');
}

// Shows
const main = document.querySelector("main");

tempInfo = {tag: "h2", classes: ["shows__title"], content: "Shows"};
createAndAppendElement(main, tempInfo);

tempInfo = {tag: "div", classes: ["shows__container"], content: ''};
const showsContainer = createAndAppendElement(main, tempInfo);

tempInfo = {tag: 'div', classes: ['shows__header'], content: ''}
const tableHeader = createAndAppendElement(showsContainer, tempInfo)

for(label of ["date", "venue", "location"]){
    tempInfo = {tag: "h4", classes: ['show__label', 'show__label--header'], content: label};
    createAndAppendElement(tableHeader, tempInfo)
}

// to do: change date to dateTime format

const dates = [
    new Date(Date.parse('Mon Sept 06 2021')),
    new Date(Date.parse('Tue Sept 21 2021')),
    new Date(Date.parse('Fri Oct 15 2021')),
    new Date(Date.parse('Sat Nov 06 2021')),
    new Date(Date.parse('Fri Nov 26 2021')),
    new Date(Date.parse('Wed Dec 15 2021')),
]


const shows = [
    {date: dates[0], venue: 'Ronald Lane', location: 'San Francisco, CA'},
    {date: dates[1], venue: 'Pier 3 East', location: 'San Francisco, CA'},
    {date: dates[2], venue: 'View Lounge', location: 'San Francisco, CA'},
    {date: dates[3], venue: 'Hyatt Agency', location: 'San Francisco, CA'},
    {date: dates[4], venue: 'Moscow Center', location: 'San Francisco, CA'},
    {date: dates[5], venue: 'Press Club', location: 'San Francisco, CA'}
]

// const shows = [
//     {date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA'},
//     {date: 'Tue Sept 21 2021', venue: 'Pier 3 East', location: 'San Francisco, CA'},
//     {date: 'Fri Oct 15 2021', venue: 'View Lounge', location: 'San Francisco, CA'},
//     {date: 'Sat Nov 06 2021', venue: 'Hyatt Agency', location: 'San Francisco, CA'},
//     {date: 'Fri Nov 26 2021', venue: 'Moscow Center', location: 'San Francisco, CA'},
//     {date: 'Wed Dec 15 2021', venue: 'Press Club', location: 'San Francisco, CA'}
// ]


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
