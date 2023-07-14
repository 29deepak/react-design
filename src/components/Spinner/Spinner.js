import React from 'react'

const Spinner = () => {
  return (
    <div class="container">
        <h2 class="py-3 text-center">Spinners </h2>
        <div class="row py-5">
            <div class='col text-center'>
                <div class="spinner-border"></div>
                <div class="spinner-border text-primary m-5">
                    <span class="sr-only">Loading..</span>
                </div>
            </div>
        </div>
        <div class="row py-5">
            <div class='col'>
                <div class="spinner-border"></div>
                <div class="spinner-border text-primary">
                    <span class="sr-only">Loading..</span>
                </div>
                <div class="spinner-border text-success"></div>
                <div class="spinner-border text-danger"></div>
                <div class="spinner-border spinner-border-sm text-danger"></div>
                <div class="spinner-border text-info " style={{width:"80px", height:"80px"}}></div>
            </div>
        </div>
        <div class="row py-5">
            <div class='col'>
                <div class="spinner-grow"></div>
                <div class="spinner-grow text-primary"></div>
                <div class="spinner-grow text-success"></div>
                <div class="spinner-grow text-danger"></div>
                <div class="spinner-grow spinner-grow-sm text-danger"></div>
            </div>
        </div>
        <div class="row py-5">
            <div class='col'>
                <button class="btn btn-primary" disabled><span class="spinner-border spinner-border-sm"></span>Loading</button>
                <button class="btn btn-primary" ><span class="spinner-border spinner-border-sm"></span></button>
            </div>
        </div>
    </div>
  )
}

export default Spinner