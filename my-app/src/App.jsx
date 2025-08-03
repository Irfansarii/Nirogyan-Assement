import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';


const App = () => (
  <AppProvider>
    <Router basename="/Nirogyan-Assessment">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
      </Routes>
    </Router>
  </AppProvider>
);

export default App;
