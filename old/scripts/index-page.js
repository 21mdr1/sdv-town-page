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
    deleteButton.addEventListener('click', deleteHandler);
}

function displayAllComments(commentInfo) {
    const commentsContainer = document.querySelector(".comments__container");
    commentsContainer.innerHTML = '';
    commentInfo.forEach((comment) => displayComment(comment))
}

function createPopup(id) {
    const commentsContainer = document.querySelector(".comments__container");
    const popupBackground = createAndAppendElement(commentsContainer, {tag: 'div', classes: ['popup__background'], content: ''})
    const popup = createAndAppendElement(popupBackground, {tag: 'div', classes: ['popup'], content: ''})

    const popupText = createAndAppendElement(popup, {tag: 'div', classes: ['popup__text'], content: ''})

    createAndAppendElement(popupText, {tag: 'p', classes: ['popup__title'], content: 'Are you sure you want to delete this comment?'})
    createAndAppendElement(popupText, {tag: 'p', classes: ['popup__subtitle'], content: 'This action cannot be undone.'})

    const buttonsContainer = createAndAppendElement(popup, {tag: 'div', classes: ['popup__button-container'], content: ''})
    const cancelButton = createAndAppendElement(buttonsContainer, {tag: 'button', classes: ['popup__button', 'popup__button--cancel'], content: 'Cancel'})

    const confirmButton = createAndAppendElement(buttonsContainer, {tag: 'button', classes: ['popup__button', 'popup__button--confirm'], content: 'Delete'})
    confirmButton.value = id;

    // make event handlers for both buttons
    cancelButton.addEventListener('click', deleteCancelHandler);
    confirmButton.addEventListener('click', deleteConfirmHandler);
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

function deleteCancelHandler(event) {
    const popupBackground = document.querySelector(".popup__background");
    popupBackground.remove();
}

async function deleteConfirmHandler(event) {
    const id = this.value;
    const popupBackground = document.querySelector(".popup__background");
    popupBackground.remove();

    await bandSiteApi.deleteComment(id);
    displayAllComments(await bandSiteApi.getComments())
}

function deleteHandler(event) {
    const id = this.value;
    createPopup(id);
}

// Initial generation

displayAllComments(await bandSiteApi.getComments())

form.addEventListener('submit', formSubmitHandler);