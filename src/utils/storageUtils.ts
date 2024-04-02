import harvey from '../assets/avatars/Harvey.png';
import penny from '../assets/avatars/Penny.png';
import alex from '../assets/avatars/Alex.png';
import user from '../assets/avatars/user.png';

interface icomment {
    id: number;
    timestamp: string;
    name: string;
    image: string;
    comment: string;
}

const comments: icomment[] = [
    {
        id: 1,

        timestamp: '02/17/2021',
        name: 'Harvey',
        image: harvey,
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    },
    {
        id: 2,
        timestamp: '01/09/2021',
        name: 'Penny',
        image: penny,
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    },
    {
        id: 3,
        timestamp: '12/20/2020',
        name: 'Alex',
        image: alex,
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
]

function getComments(): icomment[] {
    return comments;
}

function saveComment(comment: {name: string; comment: string}): void {
    comments.push({
        id: comments.length + 1,
        timestamp: '4/2/2024',
        name: comment.name,
        image: user,
        comment: comment.comment,
    })
}


export { getComments, saveComment };
export type { icomment };