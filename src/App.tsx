import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme}`}>
      <Header />
      <main className="p-4 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;