import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyComponent from './components/Tooltip/Tooltip';
import Tool from './components/Tooltip/Tool';
import Tool1 from './components/Tooltip/Tooloption';
import Popovers from './components/popovers/Popovers';
import Popover2 from './components/popovers/Popover2';
import Alert from './components/Alert/Alert';
import Alert1 from './components/Alert/ALert1';
import Modal from './components/Modals/Modals';
import Modal2 from './components/Modals/Modals2';
import Modal3 from './components/Modals/Modals3';
import Collapse from './components/Collapse/Collapse';
import Alert2 from './components/Alert/Alert2';
import Tab from './components/Tabs/Tabs';
import Carousel from './components/Carousel/Carousel';
import Caro from './components/Carousel/Caro';
import Toast from './components/Toast/Toast';
import Scrollpay from './components/Scrollpay/Scrollpay';
import Scroll from './components/Scrollpay/Scroll';
import Scrolls from './components/Scrollpay/Scrolls';
import Table from './components/Table/Table';
import Table2 from './components/Table/Table2';
import Animation from './components/Animations/Animation';
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
       <Caro/>
       <Toast/>
      <Tool />
      <Alert2/>
   
      {/* <MyComponent /> */}
      <Popovers/>
      <Tool1/>
      <Popover2/>
      <Alert />
      <Alert1 id ="1" type="success" message="This is a success alert!"/>
      <Alert1 id ="2" type="error" message="This is a error alert!"/>
      <div>
      <h1>My App</h1>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
    <Modal2/>
    <Modal3/> 
    <Collapse/>
    <Tab/>
    <Carousel/>
    <Scrollpay/>
    <Scroll/>
    <Scrolls/>
    <Table/>
    <Table2/>
    <Animation/>
    </div>
  );
};

export default App;
