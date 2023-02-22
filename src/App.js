import './App.css';
import Calculator from './components/calculator';
import { Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar';
import Quotes from './components/quote';
import Home from './components/home';



function App() {
  return (
    <div className="App">
<>
     <NavBar/>
         <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>

</>
    </div>
  );
}

export default App;
