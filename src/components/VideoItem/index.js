import React from 'react';
import './index.css';
const VideoItem = () => {
    
    return (
        <li className='videoItem videoItemGrid'>
          <div className='thumbnail-img-box'>
            <img src='' alt='비디오썸네일' className='thumbnail-img' />
          </div>
          <div className='descriptionBox'>
            <div className='description'>
                  <h2 className='videoTitle'></h2>
                  <h3 className='channelTitle'></h3>
                  <p className='date'></p>
            </div>
          </div>
        </li>
    );
};

export default VideoItem;