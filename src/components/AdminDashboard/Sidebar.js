import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (item) => {
    setActiveItem(item.id); // Update active item
    navigate(item.path); // Navigate to the item's path
  };

  const items = [
    { id: 1, name: 'Home', path: '/admin-dashboard' }, // Add path for navigation
    { id: 2, name: 'Sample item 1', path: '/path-for-sample-item-1' },
    { id: 3, name: 'Sample item 2', path: '/path-for-sample-item-1' },
    { id: 4, name: 'Sample item 3', path: '/path-for-sample-item-1' },
  ];

  return (
    <div className="bg-[#242424] w-[200px] sm:w-[250px] md:w-[294px] h-[89vh] flex flex-col">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className={`nav-item p-4 sm:p-5 md:p-6 text-white text-base sm:text-xl md:text-xl cursor-pointer transition-colors duration-300
            ${activeItem === item.id ? 'bg-[#340101]' : 'bg-[#242424]'}`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

// Add hover effect with CSS using Tailwind
const css = `
  .nav-item:hover {
    background-color: #000000;
  }
`;

// Append the CSS dynamically to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

export default Sidebar;
