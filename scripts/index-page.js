
// Functions

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

function createComment(name, date, commentText, commentArray) {
    commentArray.push({
        name: name,
        date: date,
        comment: commentText,
    })
}

function displayComment(commentInfo) {
    const commentsContainer = document.querySelector(".comments__container");

    const comment = createAndAppendElement(commentsContainer, {tag: 'article', classes: ['comment'], content: ''});

    createAndAppendElement(comment, {tag: 'div', classes: ['comment__img'], content: ''})

    const commentContainer = createAndAppendElement(comment, {tag: 'div', classes: ['comment__container'], content: ''})
    const commentHeader = createAndAppendElement(commentContainer, {tag: 'div', classes: ['comment__header'], content: ''})

    createAndAppendElement(commentHeader, {tag: 'p', classes: ['comment__name'], content: commentInfo.name});
    createAndAppendElement(commentHeader, {tag: 'p', classes: ['comment__date'], content: commentInfo.date});
    createAndAppendElement(commentContainer, {tag: 'p', classes: ['comment_text'], content: commentInfo.comment});
}

function displayAllComments(commentInfo) {
    commentInfo.toReversed().forEach((comment) => displayComment(comment))
}

// Initial generation

// to do: change dates to datetime format
const commentInfo = [
    {name: "Miles Acosta", date: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
    {name: "Emilie Beach", date: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name: "Connor Walton", date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."}
]

displayAllComments(commentInfo)

// Event Handlers and Listeners
const form = document.querySelector(".form");
function formSubmitHandler(event) {
    event.preventDefault()

    // this formatter will be used in display comment, creating a comment will use a Date object
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedDate = formatter.format(date);
    console.log(formattedDate);

    createComment(event.target.name.value, formattedDate, event.target.comment.value, commentInfo)

    const commentsContainer = document.querySelector(".comments__container");
    commentsContainer.innerHTML = '';

    displayAllComments(commentInfo)

    event.target.reset();
}

form.addEventListener('submit', formSubmitHandler);