import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Health from './pages/Health';
import Badges from './pages/Badges';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="health" element={<Health />} />
        <Route path="badges" element={<Badges />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
