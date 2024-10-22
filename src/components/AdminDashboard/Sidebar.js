import React, { useState } from 'react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const items = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Sample item 2' },
    { id: 3, name: 'Sample item 3' },
  ];

  return (
    <div className="bg-[#242424] w-[200px] sm:w-[250px] md:w-[294px] h-[89vh] flex flex-col">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item.id)}
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
