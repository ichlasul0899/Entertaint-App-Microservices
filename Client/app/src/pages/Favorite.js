import React from 'react';
import {GET_FAVORITES} from '../queries/index'
import { useQuery } from '@apollo/client'
import Card from '../component/Card'
import { Link } from 'react-router-dom'

const Favorite = () => {
  const { data } = useQuery(GET_FAVORITES)
  
  if (data.favorites.length === 0) {
    return (
      <div>
        <h4>Belum ada favourite</h4>
      </div>
    )
  }

  return (
    <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', position:'static' }}>
      <div style={{ flexDirection: 'column' }}>
        <h3>List All Favorites</h3>
        <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap' }}>
          {data.favorites.map((movie, index) => {
            return (
              <Link style={{color:'black'}} to={`/detail/${movie._id}`}>
                <Card movie={movie} index={index} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Favorite