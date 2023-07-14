import React from 'react'
import S1 from '../../assests/download (2).jpg'
const Card = () => {
  return (
    <div class="container">
        <h3 class="py-3 text-center text-white">card group & column classes</h3>
        <div class="row py-5">
        <div class="col">
            {/* card group me no space aata hai and card-deck me space aata hai */}
            <div class="card-group card-deck">
                <div class="card">
                <img src={S1} class="card-img-top" alt="" height="250" width="250" />
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <h5 class="card-subtitle text-center text-muted">Subtitle</h5>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                   
                </div>
                </div>
                <div class="card">
                <img src={S1} class="card-img-top" alt="" height="250" width="250" />
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <h5 class="card-subtitle text-center text-muted">Subtitle</h5>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                   
                </div>
                </div>
                <div class="card">
                <img src={S1} class="card-img-top" alt="" height="250" width="250" />
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <h5 class="card-subtitle text-center text-muted">Subtitle</h5>
                    <p class="card-text">urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                   
                </div>
                </div>
                <div class="card">
                <img src={S1} class="card-img-top" alt="" height="250" width="250" />
                <div class="card-body">
                    <h4 class="card-title text-center">Card Title</h4>
                    <h5 class="card-subtitle text-center text-muted">Subtitle</h5>
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