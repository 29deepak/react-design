import React from 'react';
import './Footer.css';
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
const Footer = () => {
  return (
    <div id="footer-sidebar">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="footer-widget">
                        <h4>About Company</h4>
                        <p>he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered</p>
                        <p>during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in sectio</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer-widget">
                        <h4>Latest News</h4>
                        <ul id="latest-news">
                            <li><a href=""><MdOutlineKeyboardDoubleArrowRight/>  he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going t</a></li>
                            <li><a href=""><MdOutlineKeyboardDoubleArrowRight/>  he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going t</a></li>
                            <li><a href=""><MdOutlineKeyboardDoubleArrowRight/>  he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going t</a></li>
                            <li><a href=""><MdOutlineKeyboardDoubleArrowRight/>  he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going t</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer-widget">
                        <h4>Company Address</h4>
                        <address>
                            <b>Deepak Kumar Inc.</b><br/>
                            gola bandh road <br/>
                            Muzaffarpur , India 842001<br/>
                            p:(120-83884999)
                        </address>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer