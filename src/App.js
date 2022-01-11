import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import PaginaProdutos from './PaginaProdutos';
import Home from './Home';
import React from 'react';

function App() {
  const { pathname } = useLocation();
  const trechoString = pathname.substring(10);
  const nome =
    trechoString[0] &&
    trechoString[0].toUpperCase() + trechoString.substring(1);

  React.useEffect(() => {
    if (pathname === '/') {
      document.title = `Imperial Móveis | Home`;
    } else {
      document.title = `Imperial Móveis | ${nome}`;
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos/*" element={<PaginaProdutos />} />
      </Routes>
    </div>
  );
}

export default App;
