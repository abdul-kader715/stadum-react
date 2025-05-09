import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


const VideoModal = () => {

   const [isOpen, setOpen] = useState(false)

   return (
      <React.Fragment>
         <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="LlCwHnp3kL4?si=ZFGc5G5aZKruMVgY" onClose={() => setOpen(false)} />

         <button className='video-btn' onClick={() => setOpen(true)}
            data-type="iframe">
            <div className="icon">
               <svg width="29" height="32" viewBox="0 0 29 32" fill="none" >
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.3567 14.688L2.27252 0.205306C2.04309 0.0717628 1.78256 0.000955718 1.5171 0H1.51273C1.24713 0.00105488 0.986471 0.0718984 0.756878 0.205431C0.525663 0.337292 0.333701 0.528305 0.200695 0.758864C0.0676885 0.989422 -0.00157027 1.25122 2.70154e-05 1.51739V30.4825C-0.00102348 30.7488 0.0683172 31.0107 0.201028 31.2416C0.333739 31.4725 0.525109 31.6643 0.755762 31.7975C0.986415 31.9306 1.24816 32.0005 1.5145 32C1.78084 31.9995 2.04232 31.9286 2.27245 31.7945L27.3567 17.3118C27.587 17.1789 27.7782 16.9876 27.9112 16.7573C28.0441 16.5271 28.1141 16.2658 28.1141 15.9999C28.1141 15.734 28.0441 15.4727 27.9112 15.2424C27.7782 15.0121 27.587 14.8209 27.3567 14.688Z" />
               </svg>
            </div>

         </button>
      </React.Fragment>
   )
}

export default VideoModal;