import React from 'react'

const Badges = () => {
  return (
    <div class="container mb-5">
        <h2 class="py-3 text-center">Badges</h2>
        <div class="row py-5">
            <div class="col">
                <h1 class="text-black" >Heading Badges <span class="badge bg-primary badge-primary">New</span></h1>
                <h1 class="text-black" >Heading Badges <span class="badge badge-pill bg-success badge-success">New</span></h1>
                <button class="btn btn-primary">Notifications <span class="badge bg-primary">5</span></button>
                <a href="" class="badge badge-info bg-primary">Read More</a>
                <a href="" class="badge badge-pill badge-info bg-danger">Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Badges