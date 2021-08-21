import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_MOVIES } from '../queries/index';
import Card from '../component/Card';

const Home = () => {
  const { loading, error, data, refetch } = useQuery(GET_MOVIES)
  
  useEffect(() => {
    refetch()
  }, [data])

  if (loading) return <p>Loading</p>
  if (error) return <p>error...{JSON.stringify(error)}</p>
  if (data.getMovies.length === 0) {
    return (
      <div>
        <h4>Data movies Kosong</h4>
      </div>
    )
  }

  return (
    <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', position:'static' }}>
      <div style={{ flexDirection: 'column' }}>
        <h3>List All Movies</h3>
        <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap' }}>
          {data.getMovies.map((movie, index) => {
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

export default Home