import Hero from '../../components/Hero/Hero';
import FestivalsTable from '../../components/FestivalsTable/FestivalsTable';
import './Festivals.scss';

function Festivals() {
   return <>
      <Hero />
      <main className="main">
            <h2 className="shows__title">Festivals</h2>
            <FestivalsTable />
      </main>
   </>
}

export default Festivals;