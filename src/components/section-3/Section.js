import React from 'react'
import './Section.css'
import BillGates from '../../assests/img2.jpg';
import SteveJobs from '../../assests/img3.jpg';
const Section = () => {
  return (
    <div id="testimonials" class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="section-head">Testimonials</h2>
                </div>
                <div class="col-md-6">
                    <div class="testimonial">
                    <p>he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered</p>
                    <img src={BillGates} alt=""/>
                    <div class="author">Bill Gates</div>
                    <div class="author-company">Microsoft</div>
                    </div>
                </div>
                <div class="col-md-6">
                <div class="testimonial">
                    <p>he more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered</p>
                    <img src={SteveJobs} alt=""/>
                    <div class="author">Steve jobs</div>
                    <div class="author-company">Apple</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section