import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
/**
 * Header component displayed on the top of the application.
 * Contains logo and a dropdown to switch themes.
 */
const Header = () => {
  const { theme, setTheme } = useTheme();

  /**
   * Handles theme change from the dropdown
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as typeof theme);
  };

  return (
   <>
    <header className="flex justify-between items-center px-6 py-3 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
        {/* App Name */}
      <div className="text-xl font-bold">Multi-Theme App</div>
 {/* Theme switcher dropdown */}
      <nav className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <select
          value={theme}
          onChange={handleChange}
          className="text-black px-2 py-1 rounded"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
   </>
  );
};

export default Header;