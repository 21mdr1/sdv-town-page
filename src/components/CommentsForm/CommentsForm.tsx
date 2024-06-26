import formBackground from '../../assets/backgrounds/form.png';
import buttonBackground from '../../assets/backgrounds/button.png';
import avatar from '../../assets/avatars/user.png';
import { saveComment } from '../../utils/storageUtils';
import { useState } from 'react';
import './CommentsForm.scss';

function CommentForm({ getData }: {
    getData(): Promise<void>
}) {
    const [ inputs, setInputs ] = useState({name: '', comment: ''});
    const { name, comment } = inputs;

    type inputElement = HTMLInputElement | HTMLTextAreaElement;

    function handleInputChange(event: React.ChangeEvent<inputElement>) {
        const { name, value } = event.target;
        setInputs(prev => ({ ...prev, [name]: value}))
    }

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        saveComment({name: name, comment: comment});
        await getData();
        setInputs({name: '', comment: ''});
    }

    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <div className="form__container" style={{backgroundImage: `url(${formBackground}`}}>
                <img className="form__img" src={avatar} alt="user avatar" />
                <input 
                    className="form__input" 
                    id="form__name" 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"  
                />
                <textarea 
                    className="form__textarea" 
                    id="from__comment" 
                    name="comment" 
                    value={comment}
                    onChange={handleInputChange}
                    placeholder="Add a new comment" 
                ></textarea>
            </div>
            <button className="form__button" type="submit" style={{backgroundImage: `url(${buttonBackground})`}}>Comment</button>
        </form>
    );
}

export default CommentForm;