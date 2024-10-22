import {
  Route,
  BrowserRouter as Router,
  Routes,
  
} from "react-router-dom";

import AdminLogin from "./pages/Login/AdminLogin";



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
