import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AdminLogin from "./pages/Login/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard/Admindashboard"; // Import AdminDashboard
import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>    
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
