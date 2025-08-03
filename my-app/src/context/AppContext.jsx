import React, { createContext, useContext, useState, useEffect } from 'react';
import AOS from 'aos';
const AppContext = createContext(null);

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
