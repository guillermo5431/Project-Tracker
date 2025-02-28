import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Project_Status from './pages/Project_Status';
import Submit_Concern from './pages/Submit_Concern';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login_Signup from './pages/auth/Login_Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ProjectStatus' element={<Project_Status />} />
        <Route path='/Concerns' element={<Submit_Concern />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Login-SignUp' element={<Login_Signup />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
