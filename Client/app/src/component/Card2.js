import React from 'react';
import paris from './paris.jpg'


const Card2 = ({ tv }) => {
  const { _id, title, overview, tags, poster_path, popularity } = tv
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
    <div className='mycard2'>
      <img alt={poster_path} src={poster_path} width="100" height="150"></img>
      <div className='descriptionCard2'>
        <div style={{ display: "flex", justifyContent:'space-between', flexDirection: 'row', alignContent:'center' }}>
          <div>
            {bintang && bintang}
            <h4 className='title'>{title}</h4>
            <p style={{ fontSize: '16px' }} className='popularity'>{popularity} dari IMDD</p>
          </div>
          {/* <img style={{ marginRight: '30px', marginTop: '10px', display: 'flex' }} className='userProfile' alt='paris.jpg' src={poster_path} width="50" height="50"></img> */}
        </div>
        <div style={{paddingTop: '10px'}}>
          <p style={{ fontSize: '18px', maxLines:'3' }} className='popularity'>{overview}</p>
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

export default Card2