import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div class="container">
        <h2 class="py-3 text-center">Form Type-1</h2>
        <div class='row py-3'>
            <div class="col-md-6">
                
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" value="abc@gmail.com" class="form-control-plaintext" readOnly/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control"/>
                    <small class="form-text text-muted">Your password must be 8-20 characters</small>
                </div>
                <div class="form-group">
                    <label>Country</label>
                    <select name="" id="" class="form-control">
                        <option>India</option>
                        <option>USA</option>
                        <option>Nepal</option>
                        <option>Russia</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea class="form-control"></textarea>
                </div>
                
            </div>
            <div class="col-md-6">
               <div class="form-group">
                    <label>File Upload</label><br/>
                    <input type="file" class="form-control-file"/>
                </div>
                <div class="form-group">
                    <label>Amount</label><br/>
                    <input type="range" class="form-control-range"/>
                </div>
                <div class="form-group">
                    <label>Hobbies</label><br/>
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="musicCheck"/>
                    <label for="musicCheck" class="form-check-label">Music</label>
                    </div>
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="sportCheck"/>
                    <label for="sportCheck" class="form-check-label">Sports</label>
                    </div>
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="sportCheck" disabled/>
                    <label for="sportCheck" class="form-check-label">Sports</label>
                    </div>
                    
                </div>
                <div class="form-group">
                    <label>Gender</label><br/>
                    <div class="form-check">
                    <input type="radio" class="form-check-input" name="gender" id="maleRadio"/>
                    <label for="maleRadio" class="form-check-label">Male</label>
                    </div>
                    <div class="form-check">
                    <input type="radio" class="form-check-input" name="gender" id="femaleRadio"/>
                    <label for="femaleRadio" class="form-check-label">Female</label>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form