import title from '../../assets/headers/bulletin-board.png';
import bulletinBoard from '../../assets/images/bulletin-board.png';
import calendarSpring from '../../assets/images/Calendar_Spring.png';
import './BulletinBoard.scss';

function BulletinBoard() {
    return (
        <>
        <section className="about">
            <h2 className="about__title">
                <img src={title} alt='Bulletin Board' />
            </h2>
            <img src={bulletinBoard} alt="bulletin board background" className="about__image" />
            <img src={calendarSpring} alt="calendar" className="about__image" />
            <p className="about__quote">
                "We push each other to be the best. It's not uncommon for one of us to say 'this needs to be better, back to the drawing board'"
            </p>
            <p className="about__credit">- Bryan Teddy, lead vocalist of The Bees Knees</p>
        </section>

        <section className="bees-knees">
            <h3 className="bees-knees__title">The Bees Knees</h3>
            <div className="bees-knees__content-container">
                <p className="bees-knees__content">
                    The Bees Knees is a pop rock band originating from San Francisco, California. The band consists of lead vocalist Bryan Teddy, guitarist Mack Tolkens, guitarist Andrew Green, bassist Kent Zulkee and drummer Freddie Fischer. The band achieved its first commercial success as an unsigned act, drawing attention from manager Cam Adams. Having worked with other popular acts (The Elephant In The Room, One Trick Pony, The Cat's Meow), Adams was confident the band could succeed even further, pushing them to sign with Magenta Records. 
                </p>
                <p className="bees-knees__content">
                    From there, the band has soared, gaining international recognition and ranking in the top 10 on the Poster Charts. New fans immediately fell in love with the band's original and organic attitude, solidifying their place as one of the hottest and fastest up and coming acts of this century. Fans affectionately refer to themselves as “The Hive” and are drawn to their candid and authentic performances on stage. Looking forward to touring in the future, The Bees Knees are currently recording their second studio album, looking to be released in late 2021.
                </p>
            </div>
        </section>
        </>
    );
}

export default BulletinBoard;