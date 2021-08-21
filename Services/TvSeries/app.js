const express = require('express')
const app = express()

const PORT = 3002
// const routes = require('./routes/index')

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'entertainme';
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

});

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/tv-series',  (req, res) => {
  try {
    const db = client.db(dbName)
    db.collection('tvSeries').find().toArray(function (err, data) {
      if (err) throw err;
      res.send(data)
    })
  } catch (err) {
    res.statusCode(500).send({
      eror: 'Server error'
    })
    res.status(500).send({
      err: err.message
    })
  }
})
app.get('/tv-series/:id',  (req, res) => {
  try {
    const db = client.db(dbName)
    const { id } = req.params

    db.collection('tvSeries').findOne({ _id: ObjectId(id) }, function (err, data) {
      if (err) throw err;
      res.send(data)
    })

  } catch (err) {
    res.status(500).send({
      err: err.message
    })
  }
})
app.post('/tv-series',  (req, res) => {
  const db = client.db(dbName)


  try {

    let { title, overview, poster_path, popularity, tags } = req.body

    if (!title) {
      throw { name: 'title is verivied' }
    }

    let newTitle = title ? title : 'Not Set'
    let newOverview = overview ? overview : 'Not Set'
    let newPosterPath = poster_path ? poster_path : 'Not Set'
    let newTags = tags ? tags.split(',') : []
    let newpopularity = popularity ? Number(popularity) : 0

    db.collection('tvSeries').insertOne({ title: newTitle, overview: newOverview, poster_path: newPosterPath, popularity: newpopularity, tags: newTags }, function (err, data) {
      if (err) throw err;
      res.send(data.ops[0])
    });
  } catch (err) {
    res.status(500).send({
      err: err.message
    })
  }


})
app.put('/tv-series/:id',  (req, res) => {
  const db = client.db(dbName)
  const { id } = req.params
  

  try {
    const { title, overview, poster_path, popularity, tags } = req.body
    if (!title) {
      throw { name: 'title is verivied' }
    }
    let newTitle = title ? title : 'Not Set'
    let newOverview = overview ? overview : 'Not Set'
    let newPosterPath = poster_path ? poster_path : 'Not Set'
    let newTags = tags ? tags.split(',') : []
    let newpopularity = popularity ? Number(popularity) : 0

    db.collection('tvSeries').updateOne({ _id: ObjectId(id) }, { $set: { title: newTitle, overview: newOverview, poster_path: newPosterPath, popularity: newpopularity, tags: newTags } }, function (err, data) {
      if (err) throw err;
      res.send({
        msg: 'Sukses'
      })
    });
  } catch (err) {
    res.status(500).send({
      msg: err.message
    })
  }


})
app.delete('/tv-series/:id',  (req, res) => {
  const db = client.db(dbName)
  const { id } = req.params

  try {
    db.collection('tvSeries').deleteOne({ _id: ObjectId(id) }, function (err,data) {
      if (err) throw err;
      res.send({
        msg: 'Sukses'
      })
    });
  } catch (err) {
    res.status(500).send({
      msg: err.message
    })
  }


})

app.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT} `)
})