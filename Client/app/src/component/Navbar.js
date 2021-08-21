import React from 'react'
import { Link } from 'react-router-dom'
import paris from './paris.jpg'


const Navbar = () => {

  return (
    <>
      <div className="mynavbar  navbar navbar-light bg-light fixed-top">
        <div className="navzero">
          <i style={{ marginRight: '5px', color: 'red' }} className="myicon fa fa-youtube-play fa-2x"></i>
          <p style={{ margin: 0, padding: 0, fontSize: '20px', fontWeight: 'bold' }} >MIRIPYoutube</p>
        </div>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Cari movies disini" aria-label="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <div className='navthree' style={{ cursor: 'pointer' }}>
          <Link to='/add-movies' >
            
            <i style={{marginRight: '20px', color: '#555' }} className="myicon fa fa-plus-circle"></i>
          </Link>
          {/* <i style={{ marginRight: '20px', color: '#555' }} className="myicon fa fa-bell"></i> */}
          <img className='userProfile' alt='paris.jpg' src={paris} width="30" height="30"></img>
        </div>
      </div>
    </>
  )
}

export default Navbar