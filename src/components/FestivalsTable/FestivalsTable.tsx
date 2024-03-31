import FestivalItem from '../FestivalItem/FestivalItem';
import './FestivalsTable.scss';

function FestivalsTable() {

    const festivals = [
        {
            date: "13 Spring",
            name: "Egg Festival",
            location: "Pelican Town Square",
        },
        {
            date: "24 Spring",
            name: "Flower Dance",
            location: "Cindersap Forest",
        },
        {
            date: "11 Summer",
            name: "Luau",
            location: "Beach",
        },
        {
            date: "20-21 Summer",
            name: "Trout Derby",
            location: "Cindersap Forest",
        },
        {
            date: "28 Summer",
            name: "Dance of the Moonlight Jellies",
            location: "The Beach",
        },
        {
            date: "16 Fall",
            name: "Stardew Valley Fair",
            location: "Pelican Town Square",
        },
        {
            date: "27 Fall",
            name: "Spirit's Eve",
            location: "Pelican Town Square",
        },
        {
            date: "8 Winter",
            name: "Festival of Ice",
            location: "Cindersap Forest",
        },
        {
            date: "25 Winter",
            name: "Feast of the Winter Star",
            location: "Pelican Town Square",
        },
    ]


    return (
        <div className="shows__container">
            <div className="shows__header">
                <h4 className="show__label show__label--header">date</h4>
                <h4 className="show__label show__label--header">festival</h4>
                <h4 className="show__label show__label--header">location</h4>
            </div>
            {festivals.map(festival => 
                <FestivalItem 
                    date={festival.date}
                    name={festival.name}
                    location={festival.location}
                />
            )}
        </div>
    );
}

export default FestivalsTable;