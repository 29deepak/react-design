import React, { useState } from 'react';


const ModalComponent = ({ showModal, closeModal }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission or perform any other necessary action
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'show d-block' : ''}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal Title</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <p>Modal content goes here...</p>
            <form onSubmit={handleSubmit}>
              <input type="text" value={inputValue} onChange={handleChange} />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;