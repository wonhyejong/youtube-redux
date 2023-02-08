import React from 'react';
import './index.css';


const VideoView  = ({id,channelId}) => {

    return (
        <div className='playVideoBox'>
            <div className='iframeBox'>
                <iframe 
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title='youtube video'
                allowFullScreen>
                </iframe>
            </div>
            <div className='descriptionContainer'>
                 <div className='channel-img'>
                   <img src="" alt="" />
                 </div>
                 <div className='channel-data'>
                    <h3 className='channel-title'>
                       
                    </h3>
                    <p className='channel-des'>
                   
                    </p>
                 </div>
             </div>
        
        </div>
    );
};

export default VideoView;