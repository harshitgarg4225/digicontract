// src/components/ThemeSwitcher.jsx
import React from 'react';

function ThemeSwitcher() {
  const switchTheme = (themeName) => {
    document.body.classList.remove('theme-default', 'theme-dark');
    document.body.classList.add(`theme-${themeName}`);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => switchTheme('default')}
        className="bg-primary text-white px-2 py-1 rounded mr-2 hover:bg-secondary"
      >
        Default Theme
      </button>
      <button
        onClick={() => switchTheme('dark')}
        className="bg-secondary text-white px-2 py-1 rounded hover:bg-primary"
      >
        Dark Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;

