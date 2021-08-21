const express = require('express')
const app = express()
const Axios = require('axios')
const Redis = require("ioredis");
const { response } = require('express');
const redis = new Redis();

const port = 3000

app.get('/entertainme', async (req, res) => {



  try {
    const entertainmeCached = await redis.get('entertain')

    if (entertainmeCached) {
      res.send(JSON.parse(entertainmeCached))
    } else {
      const resultMovies = await Axios.get('http://localhost:3001/movies')
      const resultTvSeries = await Axios.get('http://localhost:3001/tv-series')

      if (resultMovies || resultTvSeries) {
        const Response = {
          movies: resultMovies.data,
          tvSeries: resultTvSeries.data
        }
        await redis.set('entertain', JSON.stringify(Response))
        res.send(Response)
      }
    }

  } catch (err) {
    console.log(err)
  }


})

app.listen(port, () => {
  console.log('Orcestrator listen at port ', port)
})