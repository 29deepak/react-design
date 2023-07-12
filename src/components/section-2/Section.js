import React from 'react'
import './Section.css'
import {FaAnchor} from 'react-icons/fa';
import {AiOutlineBarChart} from 'react-icons/ai';
import {MdDiamond} from 'react-icons/md';
const Section = () => {
  return (
    <div class="container section">
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-head">Some Heading Goes Here</h2>
            </div>
            <div class="col-md-4">
                <div class="service-box">
                    <i class="fa"><FaAnchor/></i>
                    <h3>Some Heading</h3>
                    <p>em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="service-box">
                    <i class="fa"><AiOutlineBarChart/></i>
                    <h3>Some Heading</h3>
                    <p>em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="service-box">
                    <i class="fa"><MdDiamond/></i>
                    <h3>Some Heading</h3>
                    <p>em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Section