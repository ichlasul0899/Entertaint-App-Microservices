const { gql } = require("apollo-server")
const Axios = require("axios")

const typeDefs = gql`
  type TvSeries {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  type MessageTv {
    msg: String
  }

  input UserInputTV {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: String
  }

  extend type Query {
    getTvSeries: [TvSeries]
    getTv(_id:ID): TvSeries
  }

  extend type Mutation {
    addTvSeries(newTvSeries: UserInputTV): TvSeries
    updateTvSeries(_id:ID, newTvSeries: UserInput): Message
    deleteTvSeries(_id:ID): Message
  }
`


const resolvers = {
  Query: {
    getTvSeries: async () => {
      const { data } = await Axios.get("http://localhost:3002/tv-series")
      return data
    },
    getTv: async (parent, args) => {
      const { _id } = args
      const { data } = await Axios.get(`http://localhost:3002/tv-series/${_id}`)
      return data
    }

  },
  Mutation: {
    addTvSeries: async (parents, args, context, info) => {
      const { newTvSeries } = args;
      const { data } = await Axios.post('http://localhost:3002/tv-series', newTvSeries)
      return data
    },
    updateTvSeries: async (parents, args, context, info) => {
      const { _id, newTvSeries } = args;
      const { data } = await Axios.put(`http://localhost:3002/tv-series/${_id}`, newTvSeries)
      return data
    },
    deleteTvSeries: async (parents, args, context, info) => {
      const { _id } = args;
      const { data } = await Axios.delete(`http://localhost:3002/tv-series/${_id}`)
      return data
    }
  }

}

module.exports = { typeDefs, resolvers }