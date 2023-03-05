
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Leyout from './Layout/Layout';
import ChuckNorris from './ChuckNorris/ChuckNorris';
import Countries from './Countries/Countries';
import Home from './Home/Home';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CountryApiSearch from './CountryApiSearch/CountryApiSearch';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Leyout />}>
        <Route index element={<Home/>}/>
        <Route path='chuckNorris/' element={<ChuckNorris/>}/>
        <Route path='countries/' element={<Countries/>}>
          <Route path=':country_name/' element={<CountryApiSearch/>}/>
        </Route>
        <Route path='about/' element={<About/>}/>
      </Route>  
    </Routes>
  );
}

export default App;
