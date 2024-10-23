import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from "../../components/AdminDashboard/Sidebar";
import Footer from "../../components/AdminDashboard/Footer";  // Import Footer component
import Header from '../../components/AdminDashboard/Header';
import { persistor } from '../../store';

const AdminDashboard = () => {
  const auth = useSelector(state => state.auth);

  console.log("this is the redux token from admin dashboard: " + auth.token);
  return (
    <div style={styles.dashboard}>
      <Header/>
      <Sidebar />
      
      <div style={styles.content}>
        {/* Dashboard content goes here */}
        <button className='text-white' onClick={() => {persistor.purge()}}>purge</button>
      </div>
      <Footer />  {/* Include Footer component */}
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    flexDirection: 'column',  // Make sure content stacks vertically with sidebar and footer
    minHeight: '80vh',       // Ensure full viewport height
    background: 'radial-gradient(circle, #3E0000, #1F0000, #090909)',  // Apply radial gradient background
  },
  content: {
    flex: 1,
   backgroundColor: 'transparent',  // Set content background to transparent so radial gradient shows
  },
};

export default AdminDashboard;


