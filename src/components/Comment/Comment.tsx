import './Comment.scss';

function Comment({ name, timestamp, comment}: {
    name: string;
    timestamp: string;
    comment: string;
}) {
    return (
        <article className="comment">
            <div className="comment__img"></div>
            <div className="comment__container">
                <div className="comment__header">
                    <p className="comment__name">{name}</p>
                    <p className="comment__date">{timestamp}</p>
                </div>
                <p className="comment_text">{comment}</p>
            </div>
        </article>
    );
}

export default Comment;