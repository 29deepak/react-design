import React from 'react';
const Video = () => {
  return (
    <div class="container mb-5">
        <h2 class="py-3 text-center text-white">Video Working</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7AHmiFcRCmQ" frameborder="0"></iframe><br/>
                    <small id="passwordHelp" class="form-text text-center  text-white">songs</small>
                    
                </div>
            </div>
            <div class="col-md-4">
                <div class="embed-responsive embed-responsive-21by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7AHmiFcRCmQ" frameborder="0"></iframe>
                </div>
            </div>
            <div class="col-md-4">
                <div class="embed-responsive embed-responsive-4by3">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7AHmiFcRCmQ" frameborder="0"></iframe>
                </div>
            </div>
            <div class="col-md-4">
                <div class="embed-responsive embed-responsive-1by1">
                    <iframe class="embed-responsive-item" src="../../assests/1.mp4" frameborder="0"></iframe>
                </div>
            </div>
            <div class="col-md-4">
                
                    <video width="520" height="240" controls>
                        <source src="/Videos/1.mp4" />
                    </video>
                
            </div>
        </div>
    </div>
  )
}

export default Video