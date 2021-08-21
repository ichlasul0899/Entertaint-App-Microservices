import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import {ADD_MOVIES} from '../queries/index'

const AddMovies = () => {
  const [addMovies, { data }] = useMutation(ADD_MOVIES)
  let history = useHistory();
  let title, overview, poster_path, popularity, tags;

  function handleSubmit(e) {
    e.preventDefault();
    addMovies({ variables: { title: title.value, overview: overview.value, popularity: popularity.value, poster_path: poster_path.value, tags: tags.value } })
    history.push("/")
  }

  return (
    <div>
      <h3>Form Add Movie</h3>
      <form onSubmit={(e) => handleSubmit(e)} style={{width: '500px'}}>
        <div className="form-group">
          <label for="label1" >Movie Title</label>
          <input ref={value => title = value} type="text" className="form-control"id="label1"/>
        </div>
        <div className="form-group">
          <label for="label2" >Overview</label>
          <textarea ref={value => overview = value} class="form-control" id="label2" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label for="label3">Popular path</label>
          <input ref={value => poster_path = value} type="text" className="form-control"id="label3"/>
        </div>
        <div className="form-group">
          <label for="label4">Popularity</label>
          <input ref={value => popularity = value} type="text" className="form-control"id="label4"/>
        </div>
        <div className="form-group">
          <label for="label5">Tags</label>
          <input ref={value => tags = value} type="text" className="form-control"id="label5"/>
        </div>
        <button type="submit" className="btn btn-primary">Add Movie</button>
      </form>
    </div>
  )
}

export default AddMovies