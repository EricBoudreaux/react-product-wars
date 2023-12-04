import { Route, Routes } from 'react-router-dom';

import Bag from './components/Inventory/Bag';

import Subway from './components/Travel/Subway';
import Difficulty from './pages/Difficulty';
import Brooklyn from './pages/Brooklyn';

import StartScreen from './pages/StartScreen'
import Station from './pages/Station';
import TheBronx from './pages/TheBronx';
import Manhattan from './pages/Manhattan';
import Queens from './pages/Queens';
import StatenIsland from './pages/StatenIsland';


function App() {
  return (
    <div className='app'>

      {/* <Subway />
      <Bag /> */}
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/difficulty' element={<Difficulty />} />
        <Route path='/station' element={<Station />} />
        <Route path='/brooklyn' element={<Brooklyn />} />
        <Route path='/bronx' element={<TheBronx />} />
        <Route path='/manhattan' element={<Manhattan />} />
        <Route path='/queens' element={<Queens />} />
        <Route path='/staten' element={<StatenIsland />} />

      </Routes>

    </div>
  );
}

export default App;
