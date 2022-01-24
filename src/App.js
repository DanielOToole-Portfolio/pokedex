// Styles
import './App.css';

// React
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// Pages
import SearchPage from './pages/SearchPage';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} exact />
          <Route path='/pokemon-archive' element={<SearchPage />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;


