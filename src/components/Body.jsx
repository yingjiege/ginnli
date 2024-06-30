import React, { useState, useEffect } from 'react';
import './Body.css'; // Example CSS for styling
import Window from './Window'; // Import Window component
import { getGanZhi } from './ganZhi'; // Adjust the path as necessary

const Body = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [highlightedElement, setHighlightedElement] = useState(null);
  const [animationActive, setAnimationActive] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [mostElement, setMostElement] = useState('')
  const [lessElement, setLessElement] = useState('')
  const radius = 150; // Radius of the circle
  const elements = ['Gold', 'Wood', 'Water', 'Fire', 'Earth'];

  const handleDateChange = (event) => {
    let inputDate = event.target.value;
    
    // Remove non-numeric characters
    inputDate = inputDate.replace(/[^0-9\/]/g, '');

    // Format the date as MM/DD/YYYY
    let formattedDate = '';

    formattedDate = inputDate
    // if (inputDate.length > 0) {
    //   formattedDate = inputDate.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    // }
    if (inputDate.length == 2){
      formattedDate += '/'
    }
    if (inputDate.length == 5){
      formattedDate += '/'
    }

    // Update state with the formatted date
    setDateOfBirth(formattedDate);
    
  };

  const getExtremes = (data) => {
    let maxCount = -Infinity;
    let minCount = Infinity;
    let maxElements = [];
    let minElements = [];
  
    for (const [element, count] of Object.entries(data)) {
      if (count > maxCount) {
        maxCount = count;
        maxElements = [element];
      } else if (count === maxCount) {
        maxElements.push(element);
      }
  
      if (count < minCount) {
        minCount = count;
        minElements = [element];
      } else if (count === minCount) {
        minElements.push(element);
      }
    }
  
    return { maxElements, minElements };
  };
    

  const handleEnterClick = () => {

    console.log(dateOfBirth)
    const parts = dateOfBirth.split('/');

// Extract month, day, and year from the parts array
    const month = Number(parts[0]) ; // '06'
    const day =Number(parts[1]) ;   // '23'
    const year = parts[2];  // '2000'

    const extremes = getExtremes(getGanZhi(year, month, day));
    console.log(getGanZhi(year, month, day))
    setMostElement(extremes.maxElements.join(', '));
    setLessElement(extremes.minElements.join(', '));
    setShowResultModal(true);

    // setAnimationActive(true);

    // // Simulate animation stop after 3 seconds
    // setTimeout(() => {
    //   const index = dateOfBirth % elements.length;
    //   setHighlightedElement(elements[index]);
    //   setAnimationActive(false);
    //   setTimeout(() => {
        
    //   }, 1000);
    // }, 3000);

  };

  const handleCloseModal = () => {
    setShowResultModal(false);
  };

  // useEffect(() => {
  //   if (animationActive) {
  //     const elementsCount = elements.length;
  //     const angleIncrement = (2 * Math.PI) / elementsCount;
  //     let angle = 0;

  //     const interval = setInterval(() => {
  //       const index = Math.floor(angle / angleIncrement) % elementsCount;
  //       setHighlightedElement(elements[index]);
  //       angle += Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 5
  //     }, 500); // Adjust interval for smoother animation



  //     return () => clearInterval(interval);
  //   }
  // }, [animationActive, elements]);

   // Log state changes for debugging
   useEffect(() => {
    console.log('Most Element:', mostElement);
  }, [mostElement]);

  useEffect(() => {
    console.log('Less Element:', lessElement);
  }, [lessElement]);

  return (
    <div className="body">
      <div className="input-container">
        <label htmlFor="dob">Enter your Date of Birth:</label>
        <input
          type="text"
          id="dob"
          value={dateOfBirth}
          onChange={handleDateChange}
          placeholder="MM/DD/YYYY"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleEnterClick();
            }
          }}
        />
        <button onClick={handleEnterClick}>Enter</button>
      </div>
      
      {/* <div className="anime-container">
        <h2 className="anime-heading">Choose Your Element</h2>
        <div className="elements">
          {elements.map((element, index) => (
            <div
              key={element}
              className={`element ${highlightedElement === element ? 'highlighted' : ''}`}
              style={{
                transform: `translate(${radius * Math.cos((2 * Math.PI * index) / elements.length)}px, ${radius * Math.sin((2 * Math.PI * index) / elements.length)}px)`
              }}
            >
              {element}
            </div>
          ))}
        </div>
      </div> */}
      {showResultModal && (
        <Window element={highlightedElement} onClose={handleCloseModal} most = {mostElement} lowest = {lessElement}/>
      )}
    </div>
  );
};

export default Body;
