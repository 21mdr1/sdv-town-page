import './CommentsForm.scss';

function CommentForm() {
    return (
        <form className="form">
            <img className="form__img" src="./assets/images/mohan-muruge.jpg" alt="user avatar" />
            <fieldset className="form__container">
                <label htmlFor="form__name" className="form__label">name</label>
                <input 
                    className="form__input" 
                    id="form__name" 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    required 
                />
                <label htmlFor="from__comment" className="form__label">comment</label>
                <textarea 
                    className="form__textarea" 
                    id="from__comment" 
                    name="comment" 
                    placeholder="Add a new comment" 
                    required
                ></textarea>
                <button className="form__button" type="submit">comment</button>
            </fieldset>
        </form>
    );
}

export default CommentForm;