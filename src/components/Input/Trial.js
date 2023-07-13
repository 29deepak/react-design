import React from 'react'
import './Trial.css'
const Trial = () => {
  return (
    <div class="container">
        <h1 class="py-3 text-center">Trial for input Classes</h1>
        <div class="row py-3">
            <div class="col-md-6">
               <div class="form-group">
                    <label>Bigger</label>
                    <input type="text" class="form-control form-control-lg"/>
                </div>
                <div class="form-group">
                    <label>Default</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Smaller</label>
                    <input type="text" class="form-control form-control-sm"/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Trial