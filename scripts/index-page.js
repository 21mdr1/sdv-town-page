import bandSiteApi from "./band-site-api.js";
import {newElement, createAndAppendElement} from "./create-element.js";
import formatDate from "./dates.js";


// Functions

// function createAndAppendElement(parent, elementInfo) {
//     let element = newElement(elementInfo);
//     parent.appendChild(element);
//     return element
// }

// function newElement(elementInfo) {
//     let element = document.createElement(elementInfo.tag);
//     elementInfo.classes.forEach((classItem) => element.classList.add(classItem))
//     element.textContent = elementInfo.content;
//     return element;
// }

function createComment(name, date, commentText, commentArray) {
    commentArray.push({
        name: name,
        date: date,
        comment: commentText,
    })
}

function displayComment(commentInfo) {
    const date = formatDate(commentInfo.date, 'relative');
    const commentsContainer = document.querySelector(".comments__container");

    const comment = createAndAppendElement(commentsContainer, {tag: 'article', classes: ['comment'], content: ''});

    createAndAppendElement(comment, {tag: 'div', classes: ['comment__img'], content: ''})

    const commentContainer = createAndAppendElement(comment, {tag: 'div', classes: ['comment__container'], content: ''})
    const commentHeader = createAndAppendElement(commentContainer, {tag: 'div', classes: ['comment__header'], content: ''})

    createAndAppendElement(commentHeader, {tag: 'p', classes: ['comment__name'], content: commentInfo.name});
    createAndAppendElement(commentHeader, {tag: 'p', classes: ['comment__date'], content: date});
    createAndAppendElement(commentContainer, {tag: 'p', classes: ['comment_text'], content: commentInfo.comment});
}

function displayAllComments(commentInfo) {
    commentInfo.toReversed().forEach((comment) => displayComment(comment))
}

// function formatDate(date, format) {
//     let options;

//     if (format === 'relative') {
//         let today = new Date();
//         let day = 1000 * 3600 * 24;

//         let difference = (today - date) / day;

//         if (difference <= 1) {
//             return 'Today';
//         }
//         if (difference <= 7) {
//             return `${Math.round(difference)}d`;
//         }
//         format = 'MM/DD/YYYY';

//     }

//     if (format === 'MM/DD/YYYY') {
//         options = {
//             day: '2-digit', 
//             month: '2-digit', 
//             year: 'numeric',
//         }
//     }

//     if (format === 'Week Mon DD YYYY') {
//         options = {
//             weekday: "short",
//             month: "short",
//             day: "2-digit",
//             year: "numeric",
//         };
//     }

//     const formatter = new Intl.DateTimeFormat('en-US', options);
//     return formatter.format(date).replace(/,/g, '');
// }


// Initial generation

const commentInfo = [
    {name: "Miles Acosta", date: new Date(Date.parse("2020-12-20")), comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
    {name: "Emilie Beach", date: new Date(Date.parse("2021-01-09")), comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name: "Connor Walton", date: new Date(Date.parse("2021-02-17")), comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."}
]

displayAllComments(commentInfo)

// Event Handlers and Listeners
const form = document.querySelector(".form");
function formSubmitHandler(event) {
    event.preventDefault()

    const date = new Date()
    createComment(event.target.name.value, date, event.target.comment.value, commentInfo)

    const commentsContainer = document.querySelector(".comments__container");
    commentsContainer.innerHTML = '';

    displayAllComments(commentInfo)

    event.target.reset();
}

form.addEventListener('submit', formSubmitHandler);