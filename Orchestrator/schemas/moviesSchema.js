const { gql } = require("apollo-server")
const Axios = require("axios")

const typeDefs = gql`
  type Movies {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  type Message {
    msg: String
  }

  input UserInput {
    title: String
    overview: String
    poster_path: String
    popularity: String
    tags: String
  }

  input UpdatePostInput{
    _id:ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  extend type Query {
    getMovies: [Movies]
    getMovie(_id:ID): Movies
  }

  extend type Mutation {
    addMovies(newMovies: UserInput!): Movies!
    updateMovies(input: UpdatePostInput!): Message
    deleteMovies(_id:ID): Message
  }
`
    // updateMovies(_id:ID, newMovies: UserInput): Message

const resolvers = {
  Query: {
    getMovies: async () => {
      const { data } = await Axios.get("http://localhost:3001/movies")
      return data
    },
    getMovie: async (parent, args, context, info) => {
      const { _id } = args

      const { data } = await Axios.get(`http://localhost:3001/movies/${_id}`)
      return data
    }
  },
  Mutation: {
    addMovies: async (parents, args, context, info) => {
      console.log('Add Movies Nih')
      const { newMovies } = args;
      const { data } = await Axios.post('http://localhost:3001/movies', newMovies)
      console.log(data)
      return data
    },
    updateMovies: async (parents, args, context, info) => {
      console.log('Update Movies Nih')

      const { input } = args;
      console.log(input)
      const { data } = await Axios.put(`http://localhost:3001/movies/${input._id}`, input)
      console.log(data)
      return data
    },
    deleteMovies: async (parents, args, context, info) => {
      const { _id } = args;
      const { data } = await Axios.delete(`http://localhost:3001/movies/${_id}`)
      return data
    }
  }

}

module.exports = {typeDefs, resolvers}