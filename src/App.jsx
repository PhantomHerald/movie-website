import { useState } from 'react';
import './App.css';
import Moveicard from './componets/moveicard.jsx';

function App() {
  const movienumber = 1;
  

  return (
    <>
    {movienumber === 1 ? (
      <Moveicard movie={{ title: "Hello", releaseDate: "2025", url: "https://via.placeholder.com/150" }} />
    ) : (
      <Moveicard movie={{ title: "part 2", releaseDate: "2027", url: "https://via.placeholder.com/150" }} />
    )}
    </>
  );
}

export default App;
