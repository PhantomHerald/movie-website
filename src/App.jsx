import './App.css';
import Favorites from './pages/fav.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
function App() {
  return (
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
  );
}

export default App;
// Compare this snippet from src/index.css: