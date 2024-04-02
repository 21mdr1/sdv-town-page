import formBackground from '../../assets/backgrounds/form.png';
import avatar from '../../assets/avatars/user.png';
import './CommentsForm.scss';

function CommentForm() {
    return (
        <form className="form">
            <div className="form__container" style={{backgroundImage: `url(${formBackground}`}}>
                <img className="form__img" src={avatar} alt="user avatar" />
                <input 
                    className="form__input" 
                    id="form__name" 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name"  
                />
                <textarea 
                    className="form__textarea" 
                    id="from__comment" 
                    name="comment" 
                    placeholder="Add a new comment" 
                ></textarea>
            </div>
            <button className="form__button" type="submit">comment</button>
        </form>
    );
}

export default CommentForm;