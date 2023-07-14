import React from 'react'

const Progress = () => {
  return (
    <div class="container mb-5">
        <h2 class="py-3 text-center">Progress Bar</h2>
        <div class="row py-5">
            <div class="col">
                <h5>HTML</h5>
                <div class="progress mb-3">
                    <div class="progress-bar" style={{width:"25%"}} >25%</div>
                </div>
                <h5>Css</h5>
                <div class="progress  mb-3 " style={{height:"5px"}}>
                    <div class="progress-bar bg-success" style={{width:"50%"}} >
                        50%
                    </div>
                </div>
                <div class="progress  mb-3 " >
                    <div class="progress-bar bg-success" style={{width:"50%"}} >
                        50%
                    </div>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar bg-danger" style={{width:"25%"}} >25%</div>
                    <div class="progress-bar" style={{width:"15%"}} >15%</div>
                    <div class="progress-bar bg-info" style={{width:"35%"}} >35%</div>
                </div>
                <h5>Java Script</h5>
                <div class="progress  mb-3 " >
                    <div class="progress-bar progress-bar-striped bg-success" style={{width:"50%"}} >
                        50%
                    </div>
                </div>
                <h5>Animated</h5>
                <div class="progress  mb-3 " >
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:"50%"}} >
                        50%
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress