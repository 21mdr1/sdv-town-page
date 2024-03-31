import scroll from '../../assets/backgrounds/scroll-background.png';
import flag from '../../assets/images/Calendar_Flag_Anim.gif';
import FestivalsTable from '../../components/FestivalsTable/FestivalsTable';
import './Festivals.scss';

function Festivals() {
   return (
      <main className="main">
            <h2 className="shows__title" 
               style={{backgroundImage: `url(${scroll})`}}
            >
               Festivals
               <img src={flag} alt="flag" className="shows__image"/>
            </h2>
            <FestivalsTable />
      </main>
   );
}

export default Festivals;