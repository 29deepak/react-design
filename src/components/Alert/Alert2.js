import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleDismiss = () => {
    setShowAlert(false);
  };

  return (
    showAlert && (
      <div className="alert alert-primary alert-dismissible fade show" role="alert">
        This is a primary alert!
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleDismiss}></button>
      </div>
    )
  );
};

export default AlertComponent;


// import React from 'react';
// import AlertComponent from './AlertComponent';

// const App = () => {
//   return (
//     <div>
//       <h1>My App</h1>
//       <AlertComponent />
//     </div>
//   );
// };

// export default App;