import bandSiteApi from "./band-site-api.js";
import {newElement, createAndAppendElement} from "./create-element.js";
import formatDate from "./dates.js";


// Functions

function createComment(name, timestamp, commentText, commentArray) {
    commentArray.push({
        name: name,
        timestamp: timestamp,
        comment: commentText,
    })
}

function displayComment(commentInfo) {
    const date = formatDate(commentInfo.timestamp, 'relative');
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
    commentInfo.forEach((comment) => displayComment(comment))
}

// Initial generation

const commentInfo = await bandSiteApi.getComments();

displayAllComments(commentInfo)

// Event Handlers and Listeners
const form = document.querySelector(".form");
function formSubmitHandler(event) {
    event.preventDefault()

    const timestamp = new Date()
    createComment(event.target.name.value, timestamp, event.target.comment.value, commentInfo)

    const commentsContainer = document.querySelector(".comments__container");
    commentsContainer.innerHTML = '';

    displayAllComments(commentInfo)

    event.target.reset();
}

form.addEventListener('submit', formSubmitHandler);