import React from 'react'
import './Form.css'
import ME from '../../assests/deepak.png'
const Form = () => {
  return (
    <div class="container abc">
        <h2 class="py-3 text-center text-white">New User Sign Up</h2>
        <div class='row py-3'>
            <div class="col-md-6">
                <div class="col-md-9 ">
                    <img src={ME}  class="img-fluid"/>
                        
                </div>
            </div>
            <div class="col-md-4">
            <form>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-6">
                    <label for="name" class="text-white">First Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter First Name" />
                    </div>
                    <div class="col-md-6">
                    <label for="name" class="text-white">Last Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Last Name" />
                    </div>
                </div>
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1" class="text-white">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1" class="text-white">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                <small id="passwordHelp" class="form-text text-white">Password must be Contin 8-20 Characters</small>
            </div>
           
            <div class="form-group">
                <label for="mobile_number" class="text-white">Mobile Number</label>
                <input type="password" class="form-control" id="mobile_number" placeholder="Mobile Number" />
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label text-white" for="exampleCheck1">Accept Terms And Conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            </div>
        </div>
    </div>
  )
}

export default Form