import React from 'react'
import S1 from '../../assests/download (2).jpg'
const Card = () => {
  return (
    <div class="container py-3">
        <h2 class="text-center py-3 text-white">Card</h2>
        <div class="row py-5">
            <div class="col-md-4">
                <div class="card">
                {/* <img src={S1} class="card-img-top" alt="" height="250" width="250" /> */}
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <h5 class="card-subtitle text-center text-muted">Subtitle</h5>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                    <button class="btn btn-primary">Read More</button>
                    <img src={S1} class="card-img-bottom" alt="" height="250" width="250" />
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                <img src={S1} class="card-img-top" alt="" height="250" width="250" />
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                    <a href='' class="card-link">Read more</a>
                    <a href="" class="card-link">Another Link</a>
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                <img src={S1} class="card-img" alt="" height="250" width="250" />
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                <img src={S1} class="card-img" alt="" height="250" width="250" />
                <div class="card-img-overlay">
                    <h4 class="card-title text-center">Card Title</h4>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                <img src={S1} class="card-img" alt="" height="250" width="250" />
                {/* <div class="card-body"> */}
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">lorem iosum dolor.</li>
                        <li class="list-group-item">lorem iosum dolor.</li>
                        <li class="list-group-item">lorem iosum dolor.</li>
                        <li class="list-group-item">lorem iosum dolor.</li>
                    </ul>
                {/* </div> */}
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                {/* <div class="card-header">Heading Goes Here</div> */}
                <h3 class="card-header">Heading Goes Here</h3>
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <h5 class="card-subtitle text-center text-muted">Subtitle</h5>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
                <div class="card-footer">Footer goes Here</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                        <li class="nav-item">
                            <a href="" class="nav-link">Link One</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Link Two</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Link Three</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Link Four</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <h5 class="card-subtitle text-center text-muted">Subtitle</h5>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src={S1} class="card-img" alt="" height="250" width="250" />
                        </div>
                        <div class="col-md-8">
                        <h4 class="card-title text-center">Card Title</h4>
                           <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card