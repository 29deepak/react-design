import React ,{useRef} from 'react'

const Video = () => {
    const videoRef=useRef();
    const handlePlay  =()=>{
        videoRef.current.play();
    }
    const handlePause =()=>{
        videoRef.current.pause();
    }
  return (
    <div class="container py-3">
        <h2 class="text-center py-3 text-white">Video Editing 2nd part</h2>
        <div class="row">
            <div class=" offset-md-4 col-md-2">
                <button class="btn btn-success" onClick={handlePlay}>Play</button>
            </div>
            <div class=" col-md-3">
            <button class="btn btn-danger" onClick={handlePause}>Pause</button>
            </div>
        </div>
        <div class="col-md-3 offset-md-3">
        <video width="520" height="240" ref={videoRef}>
            <source src="/Videos/1.mp4"/>
        </video>
        </div>
        
    </div>
  )
}

export default Video