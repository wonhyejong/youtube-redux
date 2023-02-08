import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from './../components/SideMenu';

const Search = () => {
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
          <VideoList  />
          </section>
        </>
    );
};

export default Search;