import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import NavBar from './NavBar';

// Please generate some made up links for the nav bar. Theme them as if this is a website for learning to code, like Scrimba. 

const navLinks = [
    { name: 'Home', url: '#' },
    { name: 'Courses', url: '#courses' },
    { name: 'About', url: '#about' },
    { name: 'Instructors', url: '#instructors' },
    { name: 'Blog', url: '#blog' },
    { name: 'Contact', url: '#contact' }
  ];

const App = () => {
  return (
    <div>
      <Counter />
      <NavBar navLinks={navLinks} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 