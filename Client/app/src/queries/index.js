import { gql } from '@apollo/client'

export const GET_FAVORITES = gql`
  query getFavourites {
    favorites @client
  }
`
export const GET_TVSERIES = gql`
  query{
    getTvSeries{
      _id,
      title,
      overview,
      poster_path,
      popularity,
      tags
    }
  }
`
export const ADD_MOVIES = gql`
  mutation addMovies($title: String!, $overview: String!, $poster_path: String!, $popularity: String!, $tags: String! ){
    addMovies(newMovies: 
    { title:$title, 
      overview:$overview, 
      poster_path:$poster_path, 
      popularity:$popularity, 
      tags:$tags
    }) {
      _id,
      title, 
      overview, 
      tags, 
      popularity,
      poster_path
    }
  }
  
`
export const UPDATE_MOVIES = gql`
  mutation updateMovies($input: UpdatePostInput!){
    updateMovies(input: $input){
      msg
    }
  }
`;
export const GET_MOVIES = gql`
  query{
    getMovies{
      _id,
      title,
      overview,
      poster_path,
      popularity,
      tags
    }
  }
`
export const GET_MOVIE = gql`
  query getMovie($id: ID!){
    getMovie(_id: $id){
      _id,
      title,
      overview,
      poster_path,
      popularity,
      tags
    }
  }
`;
export const DELETE_MOVIES = gql`
  mutation deleteMovies($id: ID!){
    deleteMovies(_id:$id){
      msg
    }
  }
`