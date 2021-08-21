import React, { useState, useEffect } from 'react';
import { Link,useParams, useHistory } from 'react-router-dom'
import { gql, useMutation, useQuery } from '@apollo/client'
import { UPDATE_MOVIES, GET_MOVIE} from '../queries/index'

const Edit = () => {
  let history = useHistory();
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_MOVIE, { variables: { id } });
  const [updateMovies, {msg}] = useMutation(UPDATE_MOVIES);
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [poster_path, setPosterPath] = useState('')
  const [popularity, setPopularity] = useState('')
  const [tags, setTags] = useState('')

  
  useEffect(() => {
    if (data) {
      setTitle(data.getMovie.title)
      setOverview(data.getMovie.overview)
      setPosterPath(data.getMovie.poster_path)
      setPopularity(data.getMovie.popularity)
      setTags(data.getMovie.tags)
    }
  }, [data])

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let newtags
      if (typeof tags === 'string') {
        newtags = tags.split(',')
        console.log(newtags)
      } else {
        newtags = tags
      }
      await updateMovies({
        variables: {
          input: {
            _id: id,
            title,
            overview,
            popularity: Number(popularity),
            poster_path,
            tags: newtags
          }
        }
      })
      history.push(`/detail/${id}`)
    } catch (err) {
      return <p>Error :(</p>;
    }

  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} style={{ width: '500px' }}>

        <div className="form-group">
          <label for="label1" >Movie Title</label>
          <input value={title} onChange={(e) => {
            setTitle(e.target.value)
          }}  type="text" className="form-control" id="label1" />
        </div>

        <div className="form-group">
          <label for="label2" >Overview</label>
          <textarea value={overview} onChange={(e) => {
            setOverview(e.target.value)
          }} class="form-control" id="label2" rows="3"></textarea>
        </div>

        <div className="form-group">
          <label for="label3">Popular path</label>
          <input value={poster_path} onChange={(e) => {
            setPosterPath(e.target.value)
          }} type="text" className="form-control" id="label3" />
        </div>

        <div className="form-group">
          <label for="label4">Popularity</label>
          <input value={popularity} onChange={(e) => {
            setPopularity(e.target.value)
          }} type="number" className="form-control" id="label4" />
        </div>

        <div className="form-group">
          <label for="label5">Tags</label>
          <input value={tags} onChange={(e) => {
            setTags(e.target.value)
          }} type="text" className="form-control" id="label5" />
        </div>

        <Link style={{marginRight:"20px"}} to={`/detail/${id}`} className="btn btn-outline-primary">Back</Link>
        <button type="submit" className="btn btn-primary">Update Movie</button>

      </form>
    </div>
  )
}

export default Edit