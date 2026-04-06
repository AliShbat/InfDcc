"use client";
import { useState, useEffect } from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import styles from './ThemeToggle.module.css';

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة السكرول لإظهار الزر بعد النزول لمسافة 200 بكسل
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // التحقق من الوضع الداكن عند التحميل
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkMode(savedTheme === 'dark');
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`${styles.floatingWrapper} ${isVisible ? styles.showToggle : ''}`}>
      <button 
        onClick={toggleTheme}
        className={`${styles.btnFloatingTheme} shadow-lg ${darkMode ? 'bg-warning' : 'bg-dark'}`}
      >
        {darkMode ? <BsSunFill size={22} color="black" /> : <BsMoonStarsFill size={20} color="white" />}
        <span className="ms-2 d-none d-md-inline fw-bold small">
          {darkMode ? 'مضيء' : 'مظلم'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggler;
