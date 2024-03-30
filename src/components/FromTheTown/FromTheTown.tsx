
import Comments from '../Comments/Comments';
import CommentsForm from '../CommentsForm/CommentsForm';
import './FromTheTown.scss';

function FromTheTown() {
    return (
        <section className="comments">
            <h2 className="comments__title">Join the Conversation</h2>
            <CommentsForm />
            <Comments />
        </section>
    );
}

export default FromTheTown;