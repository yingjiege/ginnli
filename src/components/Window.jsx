import React from 'react';
import './Window.css'; // Import CSS file for styling

const Window = ({ element, onClose, most, lowest }) => {
  const linkUrl = 'https://ginnli.com'; // URL for ginnli.com

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Result</h2>
        <p>You got most element is :{most} and lowest element is : {lowest}</p>
        <div className="links">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img src="path_to_image1.jpg" alt="Link 1" />
          </a>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img src="path_to_image2.jpg" alt="Link 2" />
          </a>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img src="path_to_image3.jpg" alt="Link 3" />
          </a>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img src="path_to_image3.jpg" alt="Link 4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Window;
