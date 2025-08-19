import React, { useState } from 'react';
import ThemeContext from './components/ThemeContext';
import  UseStateUseEffectHook from './components/UseStateUseEffectHook';
import './App.css'; // Import the CSS
import UseRefHook from './components/UseRefHook';
import UseMemoHook from './components/UseMemoHook';
import UseCallback from './components/UseCallback';
import UseReducerHook from './components/UseReducerHook';
import ReducerFormState from './components/ReducerFormState';
import UseLayoutEffectHook from './components/UseLayoutEffectHook';
import UseImperativeHandle from './components/UseImperativeHandle';
import UseImperativeModal from './components/UseImperativeModal';
import CustomHookComponent from './components/CustomHookComponent';

function App() {
  const[theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const themeChange = {
    theme,
    toggleTheme,
  };

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>Switch to {isDark ? 'Light' : 'Dark'} Mode</button>
      {/* If value={theme} pass the single value */}
      <ThemeContext.Provider value={themeChange}> 
        <UseStateUseEffectHook />
        <hr />
        <UseRefHook />
        <hr />
        <UseMemoHook />
        <hr />
        <UseCallback />
        <hr />
        <UseReducerHook />
        <hr />
        <ReducerFormState />
        <hr />
        <UseLayoutEffectHook />
        <hr />
        <UseImperativeHandle />
        <hr />
        <UseImperativeModal />
        <hr />
        <CustomHookComponent />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
