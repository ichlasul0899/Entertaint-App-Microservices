import React from 'react';

const Card = ({movie}) => {
  const { _id, title, overview, tags, poster_path, popularity } = movie
  let bintang

  if (parseInt(popularity) >= 8) {
    bintang = (
      <>
        <i style={{ marginRight: '5px', color: 'red' }} class="myicon fa fa-star"></i>
        <i style={{ marginRight: '5px', color: 'red' }} class="myicon fa fa-star"></i>
        <i style={{ marginRight: '5px', color: 'red' }} class="myicon fa fa-star"></i>
      </>
    )
  } else if (parseInt(popularity) >= 5) {
    bintang = (
      <>
        <i style={{ marginRight: '5px', color: 'red' }} class="myicon fa fa-star"></i>
        <i style={{ marginRight: '5px', color: 'red' }} class="myicon fa fa-star"></i>
      </>
    )
  } else if (parseInt(popularity < 5)) {
    bintang = <i style={{ marginRight: '5px', color: 'red' }} class="myicon fa fa-star"></i>
  }

  return (
    <div className='mycard' >
      <img alt='' src={poster_path} width="250" height="150"></img>
      <div className='description'>
        <img style={{marginRight:'30px', marginTop: '10px'}} className='userProfile' alt="" src={poster_path} width="30" height="30"></img>
        <div className='row' style={{ display: "flex", justifyContent: "left", flexDirection: 'column', overflow:'visible' }}>
          <div>
            {bintang && bintang}
            <h6 className='title'>{title}</h6>
          </div>
          <p style={{fontSize:'14px'}} className='popularity'>{popularity} dari IMDD</p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {tags.map(e => {
              return <span class="badge badge-secondary">{e}</span>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card