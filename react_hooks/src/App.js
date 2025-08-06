import React, { useState } from 'react';
import ThemeContext from './components/ThemeContext';
import  UseStateUseEffectHook from './components/UseStateUseEffectHook';
import './App.css'; // Import the CSS

function App() {
  const[theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';
  return (
    <div className={`app-container ${theme}`}>
      <ThemeContext.Provider value={theme}>
        <UseStateUseEffectHook />
      </ThemeContext.Provider>
      <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>Switch to {isDark ? 'Light' : 'Dark'} Mode</button>
    </div>
  );
}

export default App;
