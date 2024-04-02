import Comment from '../Comment/Comment';
import { icomment } from '../../utils/storageUtils';
import './Comments.scss';

function Comments({ comments }: {
    comments: icomment[];
}) {

    return (
        <div className="comments__container">
            {
                comments.map(comment => 
                    <Comment 
                        key={comment.id}
                        name={comment.name} 
                        timestamp={comment.timestamp} 
                        comment={comment.comment} 
                        image={comment.image}
                    />
                )
            }
        </div>
    );
}

export default Comments;