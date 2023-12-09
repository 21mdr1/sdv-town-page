
// Functions

function createAndAppendElement(parent, elementInfo) {
    let element = newElement(elementInfo);
    parent.appendChild(element);
    return element
}

function newElement(elementInfo) {
    let element = document.createElement(elementInfo.tag);
    elementInfo.classes.forEach((classItem) => element.classList.add(classItem))
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
    const date = formatDate(commentInfo.date, 'MM/DD/YYYY');
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

function formatDate(date, format) {
    let options;

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
    return formatter.format(date);
    
    // calculate, relative date
    //  the rules are if < a day, say today, if < a week, say days ago, if > say date

    //You are correct. The (arguably) best modern way to do relative dates is to use a simple function combined with the Intl.RelativeTimeFormat object. Was able to create a robust relative time formatter in less than 20 lines of code. Look into Intl.RelativeTimeFormat if you're interested in building it

}

// Initial generation

const commentInfo = [
    {name: "Miles Acosta", date: Date.parse("12/20/2020"), comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
    {name: "Emilie Beach", date: Date.parse("01/09/2021"), comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name: "Connor Walton", date: Date.parse("02/17/2021"), comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."}
]

displayAllComments(commentInfo)

// Event Handlers and Listeners
const form = document.querySelector(".form");
function formSubmitHandler(event) {
    event.preventDefault()

    createComment(event.target.name.value, Date(), event.target.comment.value, commentInfo)

    const commentsContainer = document.querySelector(".comments__container");
    commentsContainer.innerHTML = '';

    displayAllComments(commentInfo)

    event.target.reset();
}

form.addEventListener('submit', formSubmitHandler);