import React, { useRef, useEffect } from 'react';
import {Modal} from 'bootstrap';

const ModalComponent = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
        new Modal(modalRef.current);
    }
  }, []);

  const openModal = () => {
    if (modalRef.current) {
      const modalInstance = new Modal(modalRef.current);
      modalInstance.show();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      const modalInstance = new Modal (modalRef.current);
      modalInstance.hide();
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>

      <div ref={modalRef} className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <p>Deeepak Kumar...</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={closeModal}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;