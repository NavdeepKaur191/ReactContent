import React, { useState } from 'react';

const NavigationBar = ({ navLinks = [] }) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              style={activeLink === index ? { color: 'red' } : {}}
              onClick={(e) => {
                e.preventDefault();
                handleClick(index);
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;