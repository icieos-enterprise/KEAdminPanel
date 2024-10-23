import React from 'react';
import Sidebar from "../../components/AdminDashboard/Sidebar";
import Footer from "../../components/AdminDashboard/Footer";  // Import Footer component
import Header from '../../components/AdminDashboard/Header';
import UploadPopup from '../../components/AdminDashboard/UploadPopup';  // Import UploadPopup component

export const UploadClients = () => {
  return (
    <div style={styles.dashboard}>
      <Header />
      <Sidebar />
      
      <div style={styles.content}>
        {/* Dashboard content goes here */}
      </div>

      {/* Center-right side popup */}
      <div style={styles.uploadPopupContainer}>
        <UploadPopup type="clients"/>
      </div>

      <Footer />  {/* Include Footer component */}
    </div>
  );
};

export const UploadProductions = () => {
  return (
    <div style={styles.dashboard}>
      <Header />
      <Sidebar />
      
      <div style={styles.content}>
        {/* Dashboard content goes here */}
      </div>

      {/* Center-right side popup */}
      <div style={styles.uploadPopupContainer}>
        <UploadPopup type="productions"/>
      </div>

      <Footer />  {/* Include Footer component */}
    </div>
  );
};

export const UploadLyrics = () => {
  return (
    <div style={styles.dashboard}>
      <Header />
      <Sidebar />
      
      <div style={styles.content}>
        {/* Dashboard content goes here */}
      </div>

      {/* Center-right side popup */}
      <div style={styles.uploadPopupContainer}>
        <UploadPopup type="lyrics"/>
      </div>

      <Footer />  {/* Include Footer component */}
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    flexDirection: 'column',  // Stack vertically with sidebar and footer
    minHeight: '60vh',        // Ensure full viewport height
    background: 'radial-gradient(circle, #3E0000, #1F0000, #090909)',  // Radial gradient background
    position: 'relative',     // Set relative positioning to place popup within
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',  // Transparent so radial gradient shows through
  },
  uploadPopupContainer: {
    position: 'absolute',
    top: '50%',                // Center vertically
    right: '10%',              // Positioned slightly inside from the right edge
    transform: 'translateY(-50%)',  // Offset to perfectly center vertically
  },
};

// export default AdminDashboard;
