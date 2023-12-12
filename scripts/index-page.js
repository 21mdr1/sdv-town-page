import bandSiteApi from "./modules/band-site-api.js";
import {createAndAppendElement} from "./modules/create-element.js";
import formatDate from "./modules/dates.js";


// Functions

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

    const social = createAndAppendElement(comment, {tag: 'div', classes: ['comment__social'], content: ''})

    const likes = createAndAppendElement(social, {tag: 'div', classes: ['comment__likes'], content: ''})
    const likeButton = createAndAppendElement(likes, {tag: 'button', classes: ['comment__like-button'], content: ''})
    likeButton.value = commentInfo.id;
    likeButton.addEventListener('click', likeHandler);
    createAndAppendElement(likes, {tag: 'span', classes: ['comment__like-number'], content: commentInfo.likes})

    const deleteButton = createAndAppendElement(social, {tag: 'button', classes: ['comment__delete'], content: ''})
    deleteButton.value = commentInfo.id;
}

function displayAllComments(commentInfo) {
    const commentsContainer = document.querySelector(".comments__container");
    commentsContainer.innerHTML = '';
    commentInfo.forEach((comment) => displayComment(comment))
}

// Event Handlers

const form = document.querySelector(".form");
async function formSubmitHandler(event) {
    event.preventDefault()

    await bandSiteApi.postComment({
            name: event.target.name.value,
            comment: event.target.comment.value,
    });

    displayAllComments(await bandSiteApi.getComments());

    event.target.reset();
}

async function likeHandler(event) {
    const id = this.value;
    await bandSiteApi.likeComment(id);
    displayAllComments(await bandSiteApi.getComments());
}

// Initial generation

displayAllComments(await bandSiteApi.getComments())

form.addEventListener('submit', formSubmitHandler);