import React, { useEffect, useRef } from 'react';
import {Toast} from 'bootstrap';

const ToastComponent = () => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (toastRef.current) {
      const toastElement = toastRef.current;
      const toast = new Toast(toastElement);
      toast.show();
    }
  }, []);

  return (
    <div ref={toastRef} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">Toast Title</strong>
        <small class="text-muted">1 sec ago</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        This is the content of the toast.
      </div>
    </div>
  );
};

export default ToastComponent;