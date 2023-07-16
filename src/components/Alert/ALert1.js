import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertComponent = ({ id,type, message }) => {
  const [show, setShow] = useState(true);

  const dismissAlert = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className={`alert alert-${type} alert-dismissible`} role="alert">
      {message}
      <button type="button" className="btn-close" onClick={dismissAlert}></button>
    </div>
  );
};

export default AlertComponent;















// import React, { useEffect, useRef } from 'react';
// import {Alert} from 'bootstrap'
// const CustomAlert = ({ id, type, message }) => {
//   const alertRef = useRef(null);

//   useEffect(() => {
//     if (alertRef.current) {
//       const alertElement = alertRef.current;
//       const bootstrapAlert = new Alert(alertElement);
      
//       const dismissAlert = () => {
//         bootstrapAlert.close();
//       };

//       const showAlert = () => {
//         bootstrapAlert.show();
//       };
      
//       // Expose the dismissAlert and showAlert functions to the window object
//       window.dismissAlert = dismissAlert;
//       window.showAlert = showAlert;
//     }
//   }, [id]);

//   return (
//     <div ref={alertRef} className={`alert alert-${type}`} role="alert">
//       {message}
      
//     </div>
//   );
// };

// export default CustomAlert;