import './FestivalItem.scss';

function FestivalItem({ date, name, location }: {
    date: string;
    name: string;
    location: string;
}) {
    return (
        <div className="show">
            <h4 className="show__label">date</h4>
            <p className="show__content show__content--bold">{date}</p>
            <h4 className="show__label">festival</h4>
            <p className="show__content">{name}</p>
            <h4 className="show__label">location</h4>
            <p className="show__content">{location}</p>
            <button className="show__button">More Info</button>
        </div>
    );
}

export default FestivalItem;