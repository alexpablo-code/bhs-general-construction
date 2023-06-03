import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ServicesPage from './pages/ServicesPage';
import Gallery from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
