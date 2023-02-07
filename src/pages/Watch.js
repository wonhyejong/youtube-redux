import React from 'react';
import VideoView from './../components/VideoView';
import VideoItem from '../components/VideoItem';
const Watch = () => {
   
    return (
        <section className='list content'>
            <VideoView />
            <ul className='watchList VideoRowList'>
                <VideoItem />
            </ul>
        </section>
    );
};

export default Watch;