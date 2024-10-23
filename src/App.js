import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import AdminLogin from "./pages/Login/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard/Admindashboard"; // Import AdminDashboard
import AdminDashboardUpload from "./pages/AdminDashboard/Admin-UploadPopup"; // Import Admin Dashboard Upload Files Popup

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/path-for-sample-item-1" element={<AdminDashboardUpload />} /> {/* Add route for Sample Item 1 */}
        {/* Add more routes for other items as needed */}
      </Routes>
    </Router>
  );
}

export default App;
