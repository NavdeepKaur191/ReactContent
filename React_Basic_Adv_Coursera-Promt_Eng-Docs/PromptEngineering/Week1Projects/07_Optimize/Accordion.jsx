/* Optimize prompts
1. Prompt ChatGPT to ask clarifying questions your prompt
2. Answer ChatGPT's clarifying questions.
3. When ChatGPT returns an optimize prompt, feed the prompt back to ChatGPT
4. Success!
*/


import React, { useState, useEffect } from 'react';
import './Accordion.css'; 
 
const dummyData = [
  { title: 'Section 1', content: 'Lorem ipsum dolor sit amet.' },
  { title: 'Section 2', content: 'Consectetur adipiscing elit.' },
  { title: 'Section 3', content: 'Vestibulum mollis sem et nunc cursus porta.' },
  // Add as many sections as you want
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    // Here you can replace dummyData with an API request to fetch the JSON data
  }, []);

  return (
    <div className="accordion">
      {dummyData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-title" onClick={() => toggleItem(index)}>
            {item.title}
            <div className={`accordion-icon ${index === activeIndex ? 'rotate' : ''}`}>^</div>
          </div>
          <div className={`accordion-content ${index === activeIndex ? 'show' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
