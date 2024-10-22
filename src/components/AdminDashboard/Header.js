import React, { useState } from 'react';
import DashboardLogo from '../../assets/AdminDashboard/DashboardLogo.png'; // Import your Dashboard logo
import AdminDropdownAccountIcon from '../../assets/AdminDashboard/Admin-dropdown-account-icon.svg';
import SocialMediaIcon from '../../assets/AdminDashboard/admin-dashboard-dropdown-socialmedia-icon.svg';
import BillingIcon from '../../assets/AdminDashboard/admin-dashboard-dropdown-billingicon.svg';
import LogoutIcon from '../../assets/AdminDashboard/admin-dashboard-dropdown-logouticon.svg';
import Avatar from '../../assets/AdminDashboard/avatar.png'; // Import user's avatar
import ArrowPointer from '../../assets/AdminDashboard/arrow-pointer.svg'; // Import arrow-pointer svg

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName] = useState('Amelia Charlotte');

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#161616] h-20 flex justify-between items-center px-4 md:px-6 ">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <img src={DashboardLogo} alt="Dashboard Logo" className="w-36 h-8 md:w-55 md:h-10 ml-1 md:ml-3" />
      </div>

      {/* Right Side: User Profile & Dropdown */}
      <div className="flex items-center">
        {/* Dropdown with user info */}
        <div className="bg-[#1F1F1F] h-[46px] w-[200px] sm:w-[240px] md:w-[280px] rounded-full flex items-center justify-between px-2 sm:px-4 relative">
          {/* Arrow and Dropdown Button */}
          <div onClick={toggleDropdown} className="cursor-pointer flex items-center">
            <img src={ArrowPointer} alt="Arrow" className="w-4 h-4 sm:w-5 sm:h-5 text-[#DD4124]" />
          </div>

          {/* Dropdown items */}
          {isOpen && (
            <div className="absolute right-0 top-12 w-40 sm:w-48 bg-[#454444] divide-y divide-gray-600 rounded-md shadow-lg mr-10 md:mr-20">
              <a href="/account-info" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700 gap-2">
                <img src={AdminDropdownAccountIcon} alt="Account" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Account Information
              </a>
              <a href="/social-media" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700 gap-2">
                <img src={SocialMediaIcon} alt="Social Media" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Social Media
              </a>
              <a href="/billing" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700 gap-2">
                <img src={BillingIcon} alt="Billing" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Billing and Subscriptions
              </a>
              <a href="/logout" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700 gap-2">
                <img src={LogoutIcon} alt="Logout" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Logout
              </a>
            </div>
          )}

          {/* User Info */}
          <span className="text-white text-xs sm:text-sm font-semibold truncate max-w-[100px] sm:max-w-[120px] md:max-w-[140px] mr-1 md:mr-9">
            {userName}
          </span>
          <img
            src={Avatar}
            alt="User Avatar"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
