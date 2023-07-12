import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div id="header">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div id="logo">
            <h1>Company Name</h1></div>
      </div>
      <div class="col-md-8">
        <ul id="menu" class="float-md-end">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header