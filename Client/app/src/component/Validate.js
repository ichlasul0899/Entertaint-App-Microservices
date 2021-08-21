import React from 'react'

const Validate = ({ data, from }) => {
  const { _id, title, overview, poster_path, tags, popularity } = data
  
  console.log(data, from, '===>')

  return (
    <div class="alert alert-success" role="alert">
      {from}
    </div>
  )
}

export default Validate