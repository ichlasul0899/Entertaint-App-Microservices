import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { gql, useQuery, useMutation } from '@apollo/client'
import { favoriteItems } from '../cache'
import { GET_MOVIE, DELETE_MOVIES} from '../queries/index'



const Detail = () => {
  const { id } = useParams()
  let history = useHistory();
  const { loading, error, data, refetch } = useQuery(GET_MOVIE, { variables: { id } })
  const [deleteMovies, { msg }] = useMutation(DELETE_MOVIES)
  
  useEffect(() => {
    refetch()
  }, [data])

  if (loading) return <p>Loading</p>
  if (error) return <p>error...{JSON.stringify(error)}</p>
  const { title, overview, poster_path, tags, popularity } = data.getMovie

  function addToFavorites(){
    const favorites = favoriteItems()
    favoriteItems([...favorites, data.getMovie])
      history.push("/")

  }

  async function handleDelete(e) {
    e.preventDefault()
    console.log('delete')
    try {
      await deleteMovies({ variables: { id } })
      history.push("/")
    } catch (err) {
      console.log(err)
    }
  }
    
  return (
    <div>
      <Link to={{
        pathname: `/edit/${id}`
      }} className="btn btn-info" style={{ marginRight: '10px' }}>Edit</Link>
      <a onClick={async (e) => handleDelete(e)} href="" className="btn btn-danger">Delete</a>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop:'20px' }}>
        <div style={{justifyContent: 'center' , marginRight: '20px'}}>
          <img alt='paris.jpg' src={poster_path} width="350" height="200"></img>
          <div className="card" style={{ width: '350px' }}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p>Rate {popularity} From IMDD</p>
              <p className="card-text">{overview}</p>
              <p><span style={{fontWeight: 'bold'}}>Rate : {popularity} </span> , Tags : {tags.map(e => {
                return <span class="badge badge-secondary">{e}</span>
              })}</p>
              <div onClick={addToFavorites} className="btn btn-primary" style={{width: '100%'}}>
                Add To Favorites
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Detail