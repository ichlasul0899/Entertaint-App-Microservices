import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar bg-light'>
      <Link to="/" className='sidebarlist'>
        <i style={{ marginRight: '15px' }} className="myicon fa fa-rocket"></i>
        <p style={{ margin: 0, padding: 0, fontSize: '18px' }} >Movies</p>
      </Link>
      <Link to="/tv-series" className='sidebarlist'>
        <i style={{ marginRight: '15px' }} className="myicon fa fa-rocket "></i>
        <p style={{ margin: 0, padding: 0, fontSize: '18px' }} >Tv Series</p>
      </Link>
      <Link to="/favorite" className='sidebarlist'>
        <i style={{ marginRight: '15px' }} className="myicon fa fa-rocket"></i>
        <p style={{ margin: 0, padding: 0, fontSize: '18px' }} >Favorite</p>
      </Link>
      <hr></hr>
      <a href="https://github.com/ichlasulamalgit?tab=repositories" className='sidebarlist'>
        <i style={{ marginRight: '15px' }} className="myicon fa fa-github "></i>
        <p style={{ margin: 0, padding: 0, fontSize: '18px' }} >Code</p>
      </a>
    </div>
  )
}

export default Sidebar