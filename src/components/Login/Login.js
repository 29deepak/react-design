import React from 'react'
import './Login.css'
import ME from '../../assests/deepak.png'
const Login = () => {
  return (
    <div class="container">
        <div class="row py-3">
            <h2 class="py-3 text-center text-white">Login Form</h2>
            <div class="col-md-6">
            <div class="col-md-8 ">
                <figure class="figure">
                  <img src={ME}  class="img-fluid  figure-img rounded-circle" alt=""/>
                  <figcaption class="figure-caption text-center text-white">Name Of the Person</figcaption>
                </figure>
                    
                        
                </div>
            </div>
            <div class="col-md-6">
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
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Login