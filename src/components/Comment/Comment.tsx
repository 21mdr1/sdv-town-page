import commentBackground from '../../assets/backgrounds/comment.png';
import './Comment.scss';

function Comment({ name, timestamp, comment, image }: {
    name: string;
    timestamp: string;
    comment: string;
    image: string;
}) {
    return (
        <article className="comment" style={{backgroundImage: `url(${commentBackground})`}}>
            <p className="comment__text">{comment}</p>
            <img className="comment__img" src={image} alt="avatar"/>
            <p className="comment__name">{name}</p>
        </article>
    );
}

export default Comment;