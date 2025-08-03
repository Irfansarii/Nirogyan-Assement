import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(null);
import AOS from 'aos';
export const AppProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(() => {
    const storedDoctor = localStorage.getItem('selectedDoctor');
    return storedDoctor ? JSON.parse(storedDoctor) : null;
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      once: false, 
    });
    AOS.refresh();
    if (selectedDoctor) {
      localStorage.setItem('selectedDoctor', JSON.stringify(selectedDoctor));
    }
  }, [selectedDoctor]);

  return (
    <AppContext.Provider value={{ selectedDoctor, setSelectedDoctor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
