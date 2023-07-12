import React from 'react';
import './Section.css';
import img1 from '../../assests/1.jpg';
import img2 from '../../assests/2.jpg';
import img3 from '../../assests/3.jpg';
import {FcCalendar} from 'react-icons/fc';
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
const Section = () => {
  return (
    <div id="news" class="container section">
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-head "> Recent News</h2>
            </div>
            <div class="col-lg-3">
                <div class="news-post">
                    <img src={img1} alt="" />
                    <h3><a href="">News Heading Here</a></h3>
                    <div class="post-date"><FcCalendar/>july 12,2023</div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for th</p>
                    <a href="" class="readmore">Read More<MdOutlineKeyboardDoubleArrowRight/></a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="news-post">
                    <img src={img3} alt="" />
                    <h3><a href="">News Heading Here</a></h3>
                    <div class="post-date"><FcCalendar/>july 12,2023</div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for th</p>
                    <a href="" class="readmore">Read More<MdOutlineKeyboardDoubleArrowRight/></a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="news-post">
                    <img src={img2} alt="" />
                    <h3><a href="">News Heading Here</a></h3>
                    <div class="post-date"><FcCalendar/>july 12,2023</div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for th</p>
                    <a href="" class="readmore">Read More<MdOutlineKeyboardDoubleArrowRight/></a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="news-post">
                    <img src={img3} alt="" />
                    <h3><a href="">News Heading Here</a></h3>
                    <div class="post-date"><FcCalendar/>july 12,2023</div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for th</p>
                    <a href="" class="readmore">Read More<MdOutlineKeyboardDoubleArrowRight/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section