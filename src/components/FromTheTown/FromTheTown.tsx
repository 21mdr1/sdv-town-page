import scroll from '../../assets/backgrounds/scroll-background.png';
import Comments from '../Comments/Comments';
import CommentsForm from '../CommentsForm/CommentsForm';
import { icomment, getComments } from '../../utils/storageUtils';
import { useState, useEffect } from 'react';
import './FromTheTown.scss';

function FromTheTown() {
    const [ comments, setComments ] = useState<icomment[]>([]);

    async function getData() {
        let data = await getComments();
        setComments(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <section className="comments">
            <h2 className="comments__title" style={{backgroundImage: `url(${scroll})`}}>From the Town</h2>
            <CommentsForm getData={getData}/>
            <Comments comments={comments}/>
        </section>
    );
}

export default FromTheTown;