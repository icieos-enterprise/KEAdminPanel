import {
  Route,
  BrowserRouter as Router,
  Routes,
  
} from "react-router-dom";

import AdminLogin from "./pages/Login/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard/Admindashboard"; // Import AdminDashboard



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
