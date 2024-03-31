import Comment from '../Comment/Comment';
import './Comments.scss';

function Comments() {
    const comments = [
        {
            id: 1,
            timestamp: '02/17/2021',
            name: 'Connor Walton',
            comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
        },
        {
            id: 2,
            timestamp: '01/09/2021',
            name: 'Emilie Beach',
            comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
        },
        {
            id: 3,
            timestamp: '12/20/2020',
            name: 'Miles Acosta',
            comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        },
    ]
    return (
        <div className="comments__container">
            {
                comments.map(comment => 
                    <Comment 
                        key={comment.id}
                        name={comment.name} 
                        timestamp={comment.timestamp} 
                        comment={comment.comment} 
                    />
                )
            }
        </div>
    );
}

export default Comments;