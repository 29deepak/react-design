import React from 'react'
import './Footer.css'
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">Copyright@2023 company name</div>
                <div class="col-md-6">
                <ul id="social-icons" class="float-md-end ">
                    <li><a href=""><BiLogoFacebookCircle/></a></li>
                    <li><a href=""><AiFillTwitterCircle/></a></li>
                    <li><a href=""><AiFillLinkedin/></a></li>
                </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer