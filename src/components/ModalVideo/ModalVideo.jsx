import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="pBFQdxA-apI?si=pRjK9cMNdoWREEFG" onClose={() => setOpen(false)} />

      <a className='popup-youtube' onClick={() => setOpen(true)}
        data-type="iframe">
        <div  className="video_icon"></div>
      </a>
    </React.Fragment>
  )
}

export default VideoModal;